import React from "react";
import "./Book.css";

function Book(props) {
    return (
        <div className="book-card">
            <img
                src={props.imgUrl}
                className="book-img"
                alt={props.name}
            />
            <h3 className="book-title">{props.name}</h3>
            <p className="book-page">총 {props.numOfPage} 페이지</p>
        </div>
    );
}

export default Book;
