import { io } from "socket.io-client";

export default function TalkingHome(props){
  const socket = io('localhost:5000');

  socket.emit('message', { data: 'this is a message from client'})

  socket.on('message', ({ data }) => {
    console.log('message received by the client');
  })

  return(
    <div>
    </div>
  )
}
