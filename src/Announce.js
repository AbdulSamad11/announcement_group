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
  function deleteGroup (p){
    const r = window.confirm('Confirm Remove this group')
    if(r===true){
     axios.post('http://localhost:3001/deleteGroup',
     {
       id: p.id,
       name: p.name,
     })
     window.location.reload();
   }
   else{
     // window.location.reload();
     alert('not deleted')
   }
   }
 
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
      
       <h1>Announcement Section</h1>
       {groups.map((val) => {
          return (<div key={val.id} style={{display:'block'}}>
        <span style={{fontSize:'1.4rem'}} key={val.id} >{val.name}</span>
<i className="fa fa-envelope" onClick={()=>{history.push('/Message',{params:val})}} style={{fontSize:'20px',margin:'4px',cursor:'pointer'}}></i>
<i className='fas fa-calendar' onClick={()=>{deleteGroup(val)}} style={{fontSize:'20px',margin:'4px',cursor:'pointer'}}></i>
          </div>);
        })}

      </div>
    );
  }
  
  export default Announce;
  