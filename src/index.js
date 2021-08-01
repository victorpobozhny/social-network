import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id: 1, message: "Hello, how are you", likes: 15},
    {id: 2, message: "Welcome to my page", likes: 20},
    {id: 3, message: "Everything is possible, my friend", likes: 22}
]


let dialogs = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Roman"},
    {id: 3, name: "Slavik"},
    {id: 4, name: "Misha"},
    {id: 5, name: "Pasha"},
    {id: 6, name: "Marat"}
]

let messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hi, how are you?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "When i can see you?"},
    {id: 5, message: "Hello"},
    {id: 6, message: "Good morning"},
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
