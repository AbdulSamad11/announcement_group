function Main() {
  return (
    <div className="main" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
    <div className='group'>
    <a href='/announce'>
     <h1>Announce</h1>
    </a>
    </div>
    <div className='group'>
    <a href='/group'>
     <h1>Create Group</h1>
    </a>
    </div>
    </div>
  );
}

export default Main;
