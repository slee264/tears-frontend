import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { server } from 'src/axios';

import './conversation.css';

export default function Conversation(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const member_id = props.conversation.members.find((m) => m !== props.current_user);

    const getUser = async () => {
      try{
        const res = await server.get('account/' + member_id);
        setUser(res.data);
      }catch(err){
        console.log(err);
      }
    }

    getUser();
  }, [props.conversation]);

  return(
    <div className="conversation">
      <Button onClick={() => props.setCurrentChat(props.conversation)}> <span className="conversationName">{user.name}</span> </Button>
    </div>
  )
}
