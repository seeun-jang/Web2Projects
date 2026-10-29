
import React, { useState } from "react";
import mailboxImage from "./mailbox.png";
import "./Mailbox.css";

<img
    src={mailboxImage}
    alt="귀여운 편지함 캐릭터"
    className="mailbox-image"
/>

function Mailbox(props) {
    const [messages, setMessages] = useState(props.unreadMessages);

    const toggleMessages = () => {
        setMessages(messages.length > 0 ? [] : ["편지1", "편지2"]);
    };

    return (
        <div className="mailbox-page">
            <div className="mailbox-card">
                <h1>💌 My Mailbox</h1>
                <p>今日のメールボックス</p>

                <img
                    src={mailboxImage}
                    alt="편지함 일러스트"
                    className="mailbox-image"
                />

                <div className="mailbox-message">
                    {messages.length > 0 && (
                        <h3>セウンさん、新しいお手紙が{messages.length}通届きました！</h3>
                    )}
                    {messages.length === 0 && (
                        <h3>すべてのお手紙を読みました ✨</h3>
                    )}
                </div>

                <button onClick={toggleMessages}>
                    {messages.length > 0 ? "모두 읽기" : "새 편지 받기"}
                </button>
            </div>
        </div>
    );
}

export default Mailbox;
