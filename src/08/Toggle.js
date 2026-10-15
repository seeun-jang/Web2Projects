
import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isToggleOn: true };

        // callback에서 this를 사용하기 위한 바인딩
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const isOn = this.state.isToggleOn;

        return (
            <div className={`power-page ${isOn ? 'on' : 'off'}`}>
                <div className="power-card">

                    <div className="power-header">
                        <div className="brand">
                            <span className="brand-icon">◈</span>
                            <span>NEXUS CONTROL</span>
                        </div>

                        <div className="status-badge">
                            <span className="status-dot"></span>
                            {isOn ? 'ONLINE' : 'OFFLINE'}
                        </div>
                    </div>

                    <div className="power-content">
                        <p className="section-label">
                            POWER MANAGEMENT
                        </p>

                        <button
                            type="button"
                            className="power-button"
                            onClick={this.handleClick}
                            aria-pressed={isOn}
                            aria-label="전원 상태 전환"
                        >
                            <span className="power-symbol">⏻</span>
                        </button>

                        <h1>
                            System {isOn ? 'Online' : 'Offline'}
                        </h1>

                        <p className="power-description">
                            {isOn
                                ? 'All systems are running normally.'
                                : 'The system is currently in standby mode.'}
                        </p>
                    </div>

                    <div className="power-info">
                        <span>SYSTEM STATUS</span>

                        <div className="info-state">
                            <span className="status-dot"></span>
                            {isOn ? 'ACTIVE' : 'STANDBY'}
                        </div>
                    </div>

                    <div className="power-footer">
                        NEXUS OS — CONTROL INTERFACE v1.0
                    </div>

                </div>
            </div>
        );
    }
}

export default Toggle;
