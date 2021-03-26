import Login from './Login'
import {Switch, Route} from 'react-router-dom'
import Main from './Main'
import Announce from './Announce'
import Groups from './Groups'
import Message from './Message'
import Schedule from './Schedule'

function App() {
  return (
    <Switch>
    <Route exact path='/' component={Login}/>
    <Route exact path='/main' component={Main}/>
    <Route exact path='/announce' component={Announce}/>
    <Route exact path='/group' component={Groups}/>
    <Route exact path='/Message' component={Message}/>
    <Route exact path='/Schedule' component={Schedule}/>
    </Switch> 
  );
}

export default App;
