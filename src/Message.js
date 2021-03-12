import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Message() {
   
    const [render, setrender] = useState(1)
    const [Gname, setGname] = useState()
    const location = useLocation();
  const [message, setmessage] = useState();
  const send = () => {
    axios.post("http://localhost:3001/sendMessage", {
        message: message,
        name: Gname,
      })
      .then((response) => {
        alert(response.data.message);
      });
  };
  if(render){
  if(location.state)
  {
      setGname(location.state.params.name)
setrender(0)
  }
    }
  return (
    <div style={{ textAlign:'center'}}>
      <textarea
        placeholder="Enter your message"
        onChange={(e) => {
          setmessage(e.target.value);
        }}
        
        rows='8'
        cols='70'
      ></textarea>
      <button className="but" onClick={send}>
        send
      </button>
    </div>
  );
}

export default Message;
