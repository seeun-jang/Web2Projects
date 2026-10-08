
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

// import App from './App';
// import TodoListApp from "./01/TodoListApp";

// import Library from "./03/Library";
// import Library from "./03/enhanced_css/Library";
// import "./03/enhanced_css/Book.css";

// import Clock from "./04/Clock";
// import "./04/Clock.css";

// import ConfirmDialog from "./04/ConfirmDialog";
// import ConfirmDialogList from "./04/ConfirmDialogList";

// import WelcomeList from "./05/exam01/WelcomeList";
// import BookList from "./05/exam02/BookList";
// import UserInfoList from "./05/exam03/UserInfoList";

// import NotificationList from "./06/test/NotificationList";

// 07 - Counter 실습
// import Counter from "./07/Counter";

// 07 - useRef 실습
// import TextInputWithFocusButton from "./07/TextInputWithFocusButton";

// 07 - Custom Hook 실습
import Accommodate from "./07/Accommodate";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Accommodate />
    </React.StrictMode>
);

reportWebVitals();

