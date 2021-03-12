import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Announce() {
  let history = useHistory();
const [groups, setgroups] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/getGroups').then((response)=>{
      setgroups(response.data)
    })
  },[])
    return (
      <div>
      
       <h1>Announcement Section</h1>
       {groups.map((val) => {
          return (
        <p key={val.id} onClick={()=>{history.replace('/Message',{params:val})}}>{val.name}</p>
          );
        })}

      </div>
    );
  }
  
  export default Announce;
  