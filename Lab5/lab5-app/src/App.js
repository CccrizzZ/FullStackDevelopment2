import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import Student from './components/Student'
import customHistory from './components/History'
import Redirect  from './components/Redirect';

const NewRoute = () => {
  return (
    <div>
      <h1>NewRoute</h1>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter history={customHistory}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newRoute">New Route</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/student/Jane Smith/50001">Student: Jane Smith, No:50001</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/newRoute" component={NewRoute} />
        <Route path="/about" component={About} />
        <Route path="/error" component={Error} />
        <Route path="/contact" component={Contact} />
        <Route path="/student/:studentname/:studentno?" component={Student} />
        <Route path="/redirect" component={Redirect} />



      </Switch>
    </BrowserRouter>
  )
}

export default App;
