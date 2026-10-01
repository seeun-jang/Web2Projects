import React from "react";
import "./Notification.css";

function Notification(props) {
    return (
        <div className="notification-card">
            <div className="tarot-symbol">☾</div>

            <div className="notification-content">
                <div className="notification-title">
                    Tarot Message #{props.id}
                </div>

                <div className="notification-message">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default Notification;
