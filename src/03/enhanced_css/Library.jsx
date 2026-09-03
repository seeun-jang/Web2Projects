import React from "react";
import Book from "./Book";
import "./Book.css";

function Library() {
    return (
        <div className="library-section">
            <div className="library-header">
                <p className="library-badge">BESTSELLER COLLECTION</p>
                <h1 className="library-title">이번 주 베스트셀러</h1>
                <p className="library-subtitle">
                    요즘 많이 읽히는 책들을 한눈에 확인해보세요
                </p>
            </div>

            <div className="Library-container">
                <Book
                    name="압록강은 흐른다"
                    numOfPage={252}
                    imgUrl="https://minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84500_%EC%95%95%EB%A1%9D%EA%B0%95%EC%9D%80%ED%9D%90%EB%A5%B8%EB%8B%A4_%ED%91%9C1%EB%9D%A0%EC%A7%80-300x511.jpg"
                />
                <Book
                    name="한편 20호 로봇"
                    numOfPage={232}
                    imgUrl="https://minumsa.minumsa.com/wp-content/uploads/bookcover/20_%ED%95%9C%ED%8E%B8_%EB%A1%9C%EB%B4%87_%ED%91%9C1-300x430.jpg"
                />
                <Book
                    name="세계문학전집 이야기"
                    numOfPage={380}
                    imgUrl="https://minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84%EC%9D%B4%EC%95%BC%EA%B8%B0_%ED%91%9C1-300x511.jpg"
                />
                <Book
                    name="집밥력"
                    numOfPage={424}
                    imgUrl="https://semicolon.minumsa.com/wp-content/uploads/bookcover/%EC%A7%91%EB%B0%A5%EB%A0%A5_%ED%91%9C1-300x400.jpg"
                />
                <Book
                    name="내손으로, 치앙마이"
                    numOfPage={576}
                    imgUrl="https://minumsa.com/wp-content/uploads/bookcover/%EB%82%B4-%EC%86%90%EC%9C%BC%EB%A1%9C-%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4-%ED%91%9C1-300x426.jpg"
                />
            </div>
        </div>
    );
}

export default Library;
