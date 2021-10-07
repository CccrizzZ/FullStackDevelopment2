import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeter from './Greeter'
import LikeButton from './LikeButton'


const Display = () => {

    return(
      <>
      <Greeter />
      <div>
        {Array.from({ length: 10 }, (_, i) => <LikeButton key = {i}/>)}
      </div>
      <App />
      </>
    )
}

ReactDOM.render(<Display />, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
