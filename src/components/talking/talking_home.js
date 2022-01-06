import React, { useState, useRef, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { server } from 'src/axios';
import Conversation from './conversation';
import Message from './message';
import TalkOnline from './talkOnline';

import "./talk.css";

export default function TalkingHome(props){
  const current_user_id = useSelector(state => state.user.user_id);
  const [conversation_list, setConversationList] = useState([]);
  const [current_chat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [online_users, setOnlineUsers] = useState([]);
  const [arrival_message, setArrivalMessage] = useState(null);

  const [search_user_list, setSearchUserList] = useState([]);

  const name_ref = useRef(null);
  const message_ref = useRef(null);
  const scroll_ref =useRef();
  const dispatch = useDispatch();
  let socket = useRef(null);


  //When you load or refresh the talk page
  useEffect(() => {
    //establish connection
    socket.current = io(process.env.REACT_APP_SERVER_DOMAIN, {withCredentials: true});

    //check for new messages
    socket.current.on('message', data => {
      setArrivalMessage({
        sender_id: data.sender_id,
        text: data.message,
        createdAt: Date.now()
      })
    })

  }, []);

  //IF there are new messages or user switches current_chat
  useEffect(() =>{
    //IF arrival messages is not null
    arrival_message
    //AND current chat's members include the sender_id of the arrival message
    && current_chat?.members.includes(arrival_message.sender_id)
    //ONLY THEN include the arrival message in the messages!
    && setMessages(prev => [...prev, arrival_message])
  }, [arrival_message, current_chat]);

  //IF current_user_id changes (I stored the current user id in redux... could have used a context. next time.)
  useEffect(() =>{

    //I was previously using here a request decorator in the backend bc it was convenient. But things started to get mixed up
    //when I was testing out with two different users. So strictly using the current_user_id from now if I need the user_id.
    const getConversations = async () => {
      const res = await server.get('/conversations/' + current_user_id, {withCredentials: true});
      setConversationList(res.data);
    }

    //We likely re-established our socket connection, so we need to let the server know we have a new connection
    socket.current.emit('addUser', {user_id: current_user_id});


    socket.current.on('getUsers', users =>{
      setOnlineUsers(users);
    })
    getConversations();
  }, [current_user_id]);

  //If the user changes current_chat
  useEffect(() => {

    //Get new messages.
    const getMessages = async () => {
      try{
        //Check if current_chat is null
        const res = await server.get('/messages/' + current_chat?._id, {withCredentials: true});
        setMessages(res.data);
      }catch(err) {
        console.log(err);
      }
    }
    getMessages();

  }, [current_chat]);

  const handleSearchUser = async () => {
    const payload = await server.post('/talks/search_user', {username_or_name: name_ref.current.value}, {withCredentials: true});
    setSearchUserList(payload.data);
  }

  const renderUserList = () => {
    let rendered_list = [];
    search_user_list.map(item => rendered_list.push(<li key={item.id}> { item.name }, {item.username} <Button> Invite to chat </Button> </li>));
    return rendered_list;
  }

  const renderConversationList = () => {
    let list = [];
    conversation_list.map((c) => {
      list.push(<Conversation conversation={c} current_user={current_user_id} setCurrentChat={setCurrentChat}/> );
    })
    return list;
  }

  const renderMessages = () => {
    let list = [];
    messages.map((m) => {
      list.push(<div ref={scroll_ref}><Message message={m} own={m.sender === current_user_id}/></div>);
    })
    return list;
  }

  const renderTalkOnlines = () => {
    let list = [];
    online_users.map((user) => {
      list.push(<TalkOnline user={user} current_user_id={current_user_id} setCurrentChat={setCurrentChat}/>);
    })
    return list;
  }

  const handleSend = async () => {
    if(message_ref.current.value && current_chat){
      const message = {
        sender: current_user_id,
        text: message_ref.current.value,
        conversationId: current_chat._id
      }

      const receiver_id = current_chat.members.find(member => member !== current_user_id);

      socket.current.emit('message',{
        sender_id: current_user_id,
        receiver_id: receiver_id,
        text: message_ref.current.value
      });

      try{
        const res = await server.post('/messages', {message}, {withCredentials: true});
        setMessages([...messages, res.data]);
      }catch(err){
        console.log(err);
      }

      message_ref.current.value = '';
    }
  }

  useEffect(() => {
    scroll_ref.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages])

  return(
    <div className="talk">
      <div className="talkMenu">
        <div className="talkMenuWrapper">
          {renderConversationList()}
        </div>
      </div>
      <div className="talkBox">
        <div className="talkBoxWrapper">
          <div className="talkBoxTop">
            {renderMessages()}
          </div>
          <div className="talkBoxBottom">
            <TextField class="talkMessageInput" label="Write something!" inputRef={message_ref} variant="standard" fullWidth />
            <Button onClick={() => handleSend()}>Send</Button>
          </div>
        </div>
      </div>
      <div className="talkOnline">
        <div className="talkOnlineWrapper">
        <TextField label="username" inputRef={name_ref} variant="standard" fullWidth />
        <Button onClick={() => handleSearchUser()}>Send</Button>
        <ul>
        {renderUserList()}
        </ul>
        </div>
      </div>
    </div>
  )
}
