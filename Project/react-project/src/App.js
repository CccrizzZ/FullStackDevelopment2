import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Button, ButtonGroup} from 'react-bootstrap'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Login from './components/Login'
import EventTable from './components/EventTable'
import ChatTable from './components/ChatTable'




function App() {
  return (
    <BrowserRouter >
      <div className="bg">
        <ButtonGroup className="mb-2" style={{display: 'flex', }}>
          <Button><Link to="/eventhistory" style={{color: 'white'}}>Event History</Link></Button>
          <Button><Link to="/chathistory" style={{color: 'white'}}>Chat History</Link></Button>
          <Button><Link to="/rooms" style={{color: 'white'}}>Rooms</Link></Button>
        </ButtonGroup>
        <Switch>
          <Route path="/eventhistory" component={EventTable} exact />
          <Route path="/chathistory" component={ChatTable} exact />
          <Route path="/rooms" component={ChatTable} exact />


        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
