import React, { useState } from "react";
import "./MessageSender.css";

function MessageSender() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim() === "") return;

        setMessages((prev) => [...prev, message.trim()]);
        setMessage("");
    };

    return (
        <div className="msg-page">
            <div className="msg-container">

                <div className="msg-header">
                    <div className="msg-avatar">세</div>
                    <div>
                        <h2>메시지</h2>
                        <p>iMessage 스타일 채팅</p>
                    </div>
                </div>

                <div className="msg-chat">
                    <div className="msg-welcome">
                        <h1>메시지 전송 프로그램</h1>
                        <p>메시지를 입력하고 전송해 보세요.</p>
                    </div>

                    {messages.map((msg, index) => (
                        <div className="msg-row" key={index}>
                            <div className="msg-bubble">
                                {msg}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="msg-bottom">
                    <div className="msg-preview">
                        <span>LIVE PREVIEW</span>
                        <p>{message || "입력한 메시지가 여기에 표시됩니다."}</p>
                    </div>

                    <div className="msg-input-area">
                        <input
                            type="text"
                            placeholder="iMessage"
                            value={message}
                            onChange={handleChange}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    handleSend();
                                }
                            }}
                        />

                        <button
                            onClick={handleSend}
                            disabled={!message.trim()}
                        >
                            전송
                        </button>
                    </div>

                    <div className="msg-footer">
                        <span>MESSAGE APP UI</span>
                        <span>{messages.length}개</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MessageSender;
