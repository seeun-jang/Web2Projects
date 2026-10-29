import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import ben10Image from "./ben10.png";
import "./MainPage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(!showWarning);
    };

    return (
        <div className="security-page">
            <div className="security-card">
                <h1>SECURITY ALERT</h1>
                <p>System Danger Monitoring</p>

                <img
                    src={ben10Image}
                    alt="security character"
                    className="security-image"
                />

                <WarningBanner warning={showWarning} />

                <button onClick={handleToggleClick}>
                    {showWarning ? "Hide Warning" : "Show Warning"}
                </button>
            </div>
        </div>
    );
}

export default MainPage;
