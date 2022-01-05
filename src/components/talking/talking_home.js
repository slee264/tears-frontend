import React, { useState, useRef, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { server } from 'src/axios';
import Conversation from './conversation';
import Message from './message';

import "./talk.css";

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
      list.push(<Conversation conversation={c} current_user={current_user} setCurrentChat={setCurrentChat}/> );
    })
    return list;
  }

  const renderMessages = () => {
    let list = [];
    messages.map((m) => {
      list.push(<Message text={m.text}/>);
    })
    return list;
  }

  return(
    <div className="talk">
      <div className="talkMenu">
        <div className="talkMenuWrapper">
          <TextField label="Username" inputRef={name_ref} variant="standard" fullWidth />
          {renderConversationList()}
        </div>
      </div>
      <div className="talkBox">
        <div className="talkBoxWrapper">
          <div className="talkBoxTop">
            {renderMessages()}
          </div>
          <div className="talkBoxBottom"></div>
        </div>
      </div>
      <div className="talkOnline">
        <div className="talkOnlineWrapper">
        online
        </div>
      </div>
    </div>
  )
}
