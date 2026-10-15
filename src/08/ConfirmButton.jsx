
import React, { useState } from "react";
import "./ConfirmButton.css";

function ConfirmButton() {

    // 상태 관리
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [unlockChecked, setUnlockChecked] = useState(false);

    // 승인 및 승인 취소
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
        setUnlockChecked(false);
    };

    // 체크박스로 버튼 잠금 해제
    const handleUnlockChange = (event) => {
        setUnlockChecked(event.target.checked);
    };

    // 버튼 비활성화 조건
    const isDisabled = isConfirmed && !unlockChecked;

    return (
        <div className="cb-page">
            <div className="cb-card">

                <div className="cb-header">
                    <div className="cb-brand">
                        <span className="cb-brand-icon">◈</span>
                        NEXUS SECURITY
                    </div>

                    <span className={`cb-badge ${isConfirmed ? "verified" : ""}`}>
                        <span className="cb-dot"></span>
                        {isConfirmed ? "VERIFIED" : "PENDING"}
                    </span>
                </div>

                <div className="cb-content">
                    <div className={`cb-icon ${isConfirmed ? "approved" : ""}`}>
                        {isConfirmed ? "✓" : "◇"}
                    </div>

                    <p className="cb-label">
                        ACCESS AUTHORIZATION
                    </p>

                    <h1>
                        {isConfirmed
                            ? "승인이 완료되었습니다"
                            : "승인 대기 중"}
                    </h1>

                    <p className="cb-description">
                        {isConfirmed
                            ? "요청이 정상적으로 승인되었습니다."
                            : "아래 버튼을 눌러 요청을 승인하세요."}
                    </p>

                    <button
                        className={`cb-button
                            ${isConfirmed ? "confirmed" : ""}
                            ${unlockChecked ? "unlocked" : ""}`}
                        onClick={handleConfirm}
                        disabled={isDisabled}
                    >
                        <span>
                            {!isConfirmed
                                ? "확인하기"
                                : unlockChecked
                                    ? "확인 취소하기"
                                    : "✓ 확인됨"}
                        </span>
                        {!isDisabled && <span>→</span>}
                    </button>

                    {/* 비활성화 해제 체크박스 */}
                    <label className={`cb-unlock ${!isConfirmed ? "inactive" : ""}`}>
                        <input
                            type="checkbox"
                            checked={unlockChecked}
                            onChange={handleUnlockChange}
                            disabled={!isConfirmed}
                        />

                        <span className="cb-unlock-text">
                            <strong>버튼 잠금 해제</strong>
                            <small>
                                {unlockChecked
                                    ? "버튼을 다시 사용할 수 있습니다."
                                    : "체크하면 비활성화가 해제됩니다."}
                            </small>
                        </span>
                    </label>
                </div>

                <div className="cb-status">
                    <span>AUTHORIZATION STATUS</span>
                    <strong className={isConfirmed ? "success" : ""}>
                        {isConfirmed ? "● APPROVED" : "○ AWAITING"}
                    </strong>
                </div>

                <div className="cb-footer">
                    NEXUS SECURITY SYSTEM
                    <span>v2.0 - FUNCTIONAL</span>
                </div>

            </div>
        </div>
    );
}

export default ConfirmButton;
