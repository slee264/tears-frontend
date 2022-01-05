import React, { useState, useRef, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { server } from 'src/axios';
import Conversation from './conversation';

export default function TalkingHome(props){
  const current_user = useSelector(state => state.user.user_id);
  const [conversation_list, setConversationList] = useState([]);
  const [current_chat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [user_list, setUserList] = useState([]);
  const name_ref = useRef();
  const message_ref = useRef();
  const dispatch = useDispatch();
  let socket = useRef(null);

  useEffect(() => {
    const getConversations = async () => {
      const res = await server.get('/conversations', {withCredentials: true});
      setConversationList(res.data);
    }
    getConversations();
  }, []);

  useEffect(() => {

    const getMessages = async () => {
      try{
        const res = await server.get('/messages/' + current_chat?._id, {withCredentials: true});
        setMessages(res.data);
      }catch(err) {
        console.log(err);
      }
    }

    getMessages();

  }, [current_chat]);

  // useEffect(() => {
  //   socket.current = io(process.env.REACT_APP_SERVER_DOMAIN, {withCredentials: true});
  //   socket.current.on('connect_message',(data) => {
  //     setMessageList(prev => [...prev, data]);
  //   });
  //   socket.current.on('message', (data) => {
  //     setMessageList(prev => [...prev, data]);
  //   })
  // }, []);


  const handleSearch = async () => {
    const payload = await server.post('/talks/search_user', {username_or_name: name_ref.current.value}, {withCredentials: true});
    setUserList(payload.data);
  }

  const renderUserList = () => {
    let rendered_list = [];
    user_list.map(item => rendered_list.push(<li key={item.id}> { item.name }, {item.username} <Button> Invite to chat </Button> </li>));
    return rendered_list;
  }

  const handleSend = () => {
    socket.current.emit('message', message_ref.current.value);
    message_ref.current.value = '';
  }

  const renderConversationList = () => {
    let list = [];
    conversation_list.map((c) => {
      list.push(<Button onClick={() => setCurrentChat(c)}> <Conversation conversation={c} current_user={current_user} /> </Button>);
    })
    return list;
  }

  const renderMessages = () => {
    let list = [];
    messages.map((m) => {
      list.push(<li> {m.text} </li>);
    })
    return list;
  }

  return(
    <div>
      <br /><br /><br /><br /><br />
      <TextField label="Username" inputRef={name_ref} variant="standard" fullWidth />
      <Button onClick={() => handleSearch()}>
        Search user
      </Button>
      <ul>
      {renderUserList()}
      </ul>
      <TextField label="Message" inputRef={message_ref} variant="standard" fullWidth />
      <Button onClick={() => handleSend()}>
        Send
      </Button>
      <ul>
      {renderConversationList()}
      </ul>
      <ul>
      {renderMessages()}
      </ul>
    </div>
    <div className='talk'>
    </div>
  )
}
