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
        <ButtonGroup className="mb-2" style={{right: '-38%'}}>
          <Link to="/eventhistory" style={{color: 'white'}}><Button>Event History</Button></Link>
          <Link to="/chathistory" style={{color: 'white'}}><Button>Chat History</Button></Link>
          <Link to="/rooms"style={{color: 'white'}}><Button>Rooms</Button></Link>
        </ButtonGroup>
        <Switch>
          <Route path="/" component={Login} exact /> 
          <Route path="/eventhistory" component={EventTable} exact />
          <Route path="/chathistory" component={ChatTable} exact />
          <Route path="/rooms" component={ChatTable} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
