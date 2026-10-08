
import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import "./Accommodate.css";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("====== useEffect 확인용 ======");
        console.log("컴포넌트 마운트 또는 업데이트");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div className="prison-page">
            <div className="prison-panel">

                <header className="prison-header">
                    <div className="prison-logo">
                        ◆ DETENTION CONTROL SYSTEM
                    </div>
                    <div className="prison-online">
                        ● ONLINE
                    </div>
                </header>

                <section className="prison-title">
                    <span>WARD 07 / OCCUPANCY MONITOR</span>
                    <h1>수용시설 통제 시스템</h1>
                    <p>실시간 수용 인원 및 출입 관리</p>
                </section>

                <section className="prison-monitor">
                    <div className="prison-monitor-header">
                        <span>CURRENT OCCUPANCY</span>
                        <span className={
                            isFull ? "prison-status full" : "prison-status"
                        }>
                            {isFull ? "FULL CAPACITY" : "AVAILABLE"}
                        </span>
                    </div>

                    <div className="prison-count">
                        <strong className={isFull ? "count-full" : ""}>
                            {String(count).padStart(2, "0")}
                        </strong>
                        <span>/ {MAX_CAPACITY} PERSONS</span>
                    </div>

                    <div className="prison-cells">
                        {Array.from({ length: MAX_CAPACITY }, (_, i) => (
                            <div
                                key={i}
                                className={`prison-cell ${
                                    i < count
                                        ? isFull ? "danger" : "occupied"
                                        : ""
                                }`}
                            />
                        ))}
                    </div>

                    <div className="prison-capacity">
                        <span>CAPACITY {count * 10}%</span>
                        <span>
                            REMAINING {MAX_CAPACITY - count}
                        </span>
                    </div>
                </section>

                <div className="prison-buttons">
                    <button
                        className="prison-enter"
                        onClick={increaseCount}
                        disabled={count >= MAX_CAPACITY}
                    >
                        → 수용시설 입장
                    </button>

                    <button
                        className="prison-exit"
                        onClick={decreaseCount}
                        disabled={count <= 0}
                    >
                        ← 수용시설 퇴장
                    </button>
                </div>

                <section className={
                    isFull
                        ? "prison-alert prison-alert-danger"
                        : "prison-alert"
                }>
                    <strong>
                        {isFull
                            ? "⚠ WARNING — MAXIMUM CAPACITY"
                            : "● SYSTEM STATUS — NORMAL"}
                    </strong>

                    <p>
                        {isFull
                            ? "수용시설에 정원이 가득 찼습니다. 추가 입장이 차단됩니다."
                            : "출입 관리 시스템 정상 작동 중"}
                    </p>
                </section>

                <footer className="prison-footer">
                    SECURE ACCESS TERMINAL · WARD 07
                </footer>
            </div>
        </div>
    );
}

export default Accommodate;

