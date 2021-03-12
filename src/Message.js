import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Message() {
  let history = useHistory();
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
      document.getElementById('msg').value='';
      history.push("/announce");

  };
  if(render){
  if(location.state)
  {
      setGname(location.state.params.name)
setrender(0)
  }
    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
    <h1>Making a Announcement</h1>
      <textarea
        placeholder="Enter your message"
        onChange={(e) => {
          setmessage(e.target.value);
        }}
        style={{marginTop:'20px'}}
        id='msg'
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
