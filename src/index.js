import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
// import TodoListApp from "./01/TodoListApp";

import reportWebVitals from './reportWebVitals';

// import Library from "./03/Library";
// import Library from "./03/enhanced_css/Library";
// import "./03/enhanced_css/Book.css"

// import Clock from "./04/Clock";
// import "./04/Clock.css"

// import ConfirmDialog from "./04/ConfirmDialog/ConfirmDialog";
// import "./04/ConfirmDialog/ConfirmDialog.css";
// import ConfirmDialog from "./04/ConfirmDialog";
// import ConfirmDialogList from "./04/ConfirmDialogList";

// import WelcomeList from "./05/exam01/WelcomeList";
// import BookList from "./05/exam02/BookList";
// import UserInfoList from "./05/exam03/UserInfoList";

import NotificationList from "./06/test/NotificationList";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <NotificationList />
    </React.StrictMode>
);

reportWebVitals();
