import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TweetContainer from './components/TweetContainer';


ReactDOM.render(
  <>
    <h1 style={{backgroundColor:"seagreen", color:"white"}}>Tweetar</h1>
    <hr />
    <TweetContainer title="Doge to the moon" />
    <TweetContainer title="Eth to the moon" />
    <TweetContainer title="Shiba to the moon" />

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
