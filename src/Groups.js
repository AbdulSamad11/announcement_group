import React,{useState} from 'react'
import axios from 'axios'

function Groups() {
  const [gname, setgname] = useState()
  const [email, setemail] = useState()
  const [disabled, setDisabled] = useState(false);
  const [main, setmain] = useState(1);
  const add=()=>{
    setDisabled(true);
    axios.post('http://localhost:3001/addPeople',
  {
    email: email,
    group: gname,
    main:main,

  })
  document.getElementById('email').value='';
  setmain(0);
  }
    return (
      <div>
      <h1>Creating Groups</h1>
       <input
        disabled={disabled}
          name="gname"
          type="text"
          placeholder="Group Name"
          onChange={(e) => {
            setgname(e.target.value);
          }}
        ></input>
        <input
        id='email'
          name="email"
          type="email"
          placeholder="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <button className='but' onClick={add}>add</button>
        <a href='/main'>
        <button className='but' style={{background:'green'}}>Done</button>
        </a>
      </div>
    );
  }
  
  export default Groups;
  