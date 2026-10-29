
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
// import Accommodate from "./07/Accommodate";

// 08 - Toggle 실습
// import Toggle from "./08/Toggle";

// 08 - 버튼 이벤트 실습
// import MyButton2 from "./08/MyButton2";

// 08 - ConfirmButton 실습
// import ConfirmButton from "./08/ConfirmButton.jsx";

// 08 - 메시지 전송 실습
// import MessageSender from "./08/MessageSender.jsx";

// 09 - 조건부 렌더링 실습
// import Greeting from "./09/Greeting";

// 09 - 엘리먼트 변수 실습
// import LoginControl from "./09/LoginControl";

// 09 - 인라인 조건 실습
// import Mailbox from "./09/Mailbox";

// 09 - 컴포넌트 렌더링 막기
// import MainPage from "./09/MainPage";

// 09 - Toolbar 실습 (RIOT GAMES)
import LoginControl from "./09/LoginControl";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <LoginControl />
    </React.StrictMode>
);

reportWebVitals();
