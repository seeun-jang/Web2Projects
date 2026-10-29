
import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(!showWarning);
    };

    return (
        <div className="security-page">
            <div className="security-card">
                <div className="security-icon">🛡️</div>
                <h1>SECURITY CENTER</h1>
                <p>시스템 보안 알림 관리</p>

                <WarningBanner warning={showWarning} />

                <button onClick={handleToggleClick}>
                    {showWarning ? "경고 숨기기" : "경고 표시하기"}
                </button>
            </div>
        </div>
    );
}

export default MainPage;

