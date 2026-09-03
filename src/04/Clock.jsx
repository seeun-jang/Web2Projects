import React from "react";
import "./Clock.css";

function Clock() {
    return (
        <div className="clock-container">
            <div className="clock-card">
                <p className="clock-label">AI SOFTWARE</p>
                <h1>인공지능소프트웨어학과</h1>

                <div className="clock-line"></div>

                <h2>
                    현재 시각은
                    <span className="clock-time">
                        {new Date().toLocaleTimeString()}
                    </span>
                    입니다.
                </h2>
            </div>
        </div>
    );
}

export default Clock;
