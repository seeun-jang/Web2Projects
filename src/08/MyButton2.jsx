
import React, { useState } from "react";
import "./MyButton2.css";

function MyButton2() {
    const [clickInfo, setClickInfo] = useState(null);
    const [count, setCount] = useState(0);

    const btnClick = (id, event) => {
        console.log(id, event.target, event.x, event.y);

        setClickInfo({
            id: id,
            target: event.target.tagName,
            x: event.x,
            y: event.y
        });

        setCount(prev => prev + 1);
    };

    return (
        <div className="mb2-page">
            <div className="mb2-card">

                <div className="mb2-header">
                    <div>
                        <span className="mb2-label">EVENT LAB / 08</span>
                        <h1>Click Inspector</h1>
                        <p>React Event Monitoring System</p>
                    </div>
                    <span className="mb2-online">● LIVE</span>
                </div>

                <div className="mb2-main">
                    <div className="mb2-icon">⌖</div>

                    <h2>Interaction Test</h2>
                    <p>버튼을 클릭하면 이벤트 정보가 기록됩니다.</p>

                    <button
                        className="mb2-button"
                        onClick={(event) => btnClick(1, event)}
                    >
                        <span>CLICK TO INSPECT</span>
                        <span>↗</span>
                    </button>

                    <span className="mb2-hint">
                        F12 → Console에서 상세 로그 확인
                    </span>
                </div>

                <div className="mb2-stats">
                    <div className="mb2-stat">
                        <span>BUTTON ID</span>
                        <strong>{clickInfo?.id ?? "—"}</strong>
                    </div>
                    <div className="mb2-stat">
                        <span>X POSITION</span>
                        <strong>{clickInfo?.x ?? "—"}</strong>
                    </div>
                    <div className="mb2-stat">
                        <span>Y POSITION</span>
                        <strong>{clickInfo?.y ?? "—"}</strong>
                    </div>
                </div>

                <div className="mb2-console">
                    <div className="mb2-console-title">
                        <span>● EVENT LOG</span>
                        <span>{count} EVENTS</span>
                    </div>

                    <div className="mb2-console-body">
                        {clickInfo ? (
                            <>
                                <p><span>&gt;</span> Event captured successfully</p>
                                <p><span>&gt;</span> target: {clickInfo.target}</p>
                                <p><span>&gt;</span> position: ({clickInfo.x}, {clickInfo.y})</p>
                            </>
                        ) : (
                            <p><span>&gt;</span> Waiting for interaction...</p>
                        )}
                    </div>
                </div>

                <div className="mb2-footer">
                    REACT EVENT SYSTEM <span>v1.0.0</span>
                </div>

            </div>
        </div>
    );
}

export default MyButton2;
