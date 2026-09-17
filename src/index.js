import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import TodoListApp from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';
// import Clock from "./04/Clock";
// import BookList from "./05/exam02/BookList";

import UserInfoList from "./05/exam03/UserinfoList";

// import Library from "./03/enhanced_css/Library";
// import "./03/enhanced_css/Book.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserInfoList/>
    </React.StrictMode>
);

reportWebVitals();
