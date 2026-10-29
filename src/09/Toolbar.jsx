
import React from "react";

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div className="riot-toolbar">
            <span>RIOT ACCOUNT</span>

            {isLoggedIn ? (
                <button onClick={onClickLogout}>LOG OUT</button>
            ) : (
                <button onClick={onClickLogin}>LOG IN</button>
            )}
        </div>
    );
}

export default Toolbar;
