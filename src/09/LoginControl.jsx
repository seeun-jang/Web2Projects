
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import riotLogo from "./riot-logo-transparent.png";
import "./LoginControl.css";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <div className="riot-page">
            <div className="riot-panel">

                <Toolbar
                    isLoggedIn={isLoggedIn}
                    onClickLogin={handleLogin}
                    onClickLogout={handleLogout}
                />

                <div className="riot-content">
                    <img
                        src={riotLogo}
                        alt="Riot Games"
                        className="riot-logo"
                    />

                    {isLoggedIn ? (
                        <div className="riot-welcome">
                            <h1>WELCOME BACK!</h1>
                            <p>Ready for your next game?</p>
                            <span>● CONNECTED</span>
                        </div>
                    ) : (
                        <>
                            <h1>Sign In</h1>
                            <p>Ready to play?</p>

                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleLogin();
                            }}>
                                <input
                                    type="text"
                                    placeholder="USERNAME"
                                    autoComplete="off"
                                    required
                                />

                                <input
                                    type="password"
                                    placeholder="PASSWORD"
                                    autoComplete="off"
                                    required
                                />

                                <button type="submit" className="riot-submit">
                                    SIGN IN →
                                </button>
                            </form>
                        </>
                    )}
                </div>

                <p className="riot-footer">
                    RIOT GAMES · REACT UI PRACTICE
                    <br />
                    Demo only — do not enter real credentials
                </p>
            </div>

            <div className="riot-art" aria-hidden="true"></div>
        </div>
    );
}

export default LoginControl;
