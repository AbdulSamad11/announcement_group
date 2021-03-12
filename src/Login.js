import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ()=>{
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (!response.data.message) {
          history.push("/main"); //+username);
        } else alert(response.data.message);
      });
  };

return (<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
<h1>Login</h1>
<input
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        
        <button className='but' onClick={login}>Login</button>
     
</div>);
}


export default Login;