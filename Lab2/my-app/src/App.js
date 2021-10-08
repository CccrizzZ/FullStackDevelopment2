import logo from './logo.svg';
import './App.css';
import Student from './components/student'
import College from './components/college'

function App() {
  return (
    <div>
      <Student name="Chris" number="11111" enrolled="2" />
      <Student name="Mike" number="222222" enrolled="1" />
      <Student name="Jason" number="33333" enrolled="3" />
      <College name="GBC" location="Casa Loma" />
    </div>
  );
}

export default App;
