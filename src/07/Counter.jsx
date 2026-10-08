
import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            count: 0,
            seconds: 0
        };

        this.inputRef = React.createRef();
    }

    // 컴포넌트 마운트
    componentDidMount() {
        console.log("컴포넌트 마운트");

        this.timer = setInterval(() => {
            this.setState(prev => ({
                seconds: prev.seconds + 1
            }));
        }, 1000);
    }

    // 컴포넌트 업데이트
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("클릭 횟수:", this.state.count);
        }

        if (prevState.userName !== this.state.userName) {
            console.log("사용자 이름:", this.state.userName);
        }
    }

    // 컴포넌트 언마운트
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("컴포넌트 언마운트");
    }

    // 입력창 포커스
    focusInput = () => {
        this.inputRef.current?.focus();
    };

    render() {
        const { userName, count, seconds } = this.state;

        return (
            <div className="counter-page">
                <div className="counter-card">

                    <div className="counter-label">
                        ✦ REACT LIFECYCLE & REF
                    </div>

                    <h1>Counter App</h1>

                    <p className="counter-desc">
                        클래스형 컴포넌트 실습
                    </p>

                    {/* 사용자 이름 입력 */}
                    <input
                        ref={this.inputRef}
                        className="name-input"
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={userName}
                        onChange={(e) =>
                            this.setState({
                                userName: e.target.value
                            })
                        }
                    />

                    {/* 포커스 버튼 */}
                    <button
                        className="focus-btn"
                        onClick={this.focusInput}
                    >
                        ⌖ 입력창으로 이동
                    </button>

                    <p className="welcome-text">
                        {userName || "사용자"}님, 환영합니다!
                    </p>

                    {/* 클릭 카운터 */}
                    <div className="count-box">
                        <span>TOTAL CLICKS</span>
                        <h2>{count}</h2>
                        <p>
                            {userName || "사용자"}님이 {count}번 클릭했습니다
                        </p>
                    </div>

                    <div className="counter-buttons">
                        <button
                            className="plus-btn"
                            onClick={() =>
                                this.setState(prev => ({
                                    count: prev.count + 1
                                }))
                            }
                        >
                            + 클릭하기
                        </button>

                        <button
                            className="reset-btn"
                            onClick={() =>
                                this.setState({ count: 0 })
                            }
                        >
                            ↻
                        </button>
                    </div>

                    {/* 생명주기 정보 */}
                    <div className="lifecycle-info">
                        <p>⏱ 실행 시간: {seconds}초</p>
                        <p>● 컴포넌트 실행 중</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Counter;

