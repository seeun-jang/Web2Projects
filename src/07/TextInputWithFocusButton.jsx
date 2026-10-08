
import React, { useRef } from "react";
import "./TextInputWithFocusButton.css";

function TextInputWithFocusButton() {
    const inputElement = useRef(null);

    const onButtonClick = () => {
        inputElement.current.focus();
    };

    return (
        <div className="focus-page">
            <div className="focus-card">
                <div className="focus-label">
                    ✦ REACT USE REF
                </div>

                <h1>Input Focus</h1>
                <p className="focus-desc">
                    버튼을 클릭하면 입력창에 포커스가 이동합니다.
                </p>

                <div className="focus-box">
                    <label>TEXT INPUT</label>

                    <input
                        ref={inputElement}
                        type="text"
                        placeholder="여기에 텍스트를 입력하세요"
                    />

                    <button onClick={onButtonClick}>
                        ⌖ Focus the input element
                    </button>
                </div>

                <p className="focus-footer">
                    useRef() · current · focus()
                </p>
            </div>
        </div>
    );
}

export default TextInputWithFocusButton;

