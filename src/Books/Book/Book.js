import React from "react";
import "./Book.css";

function Book({ bookItem }) {
    return (
        <div className="book_wrapper">
            <div className="book_about">
                <p className="book_name">{ bookItem.bookName }</p>
                <div className="book_txt_wrapper">
                    <p className="book_txt">{ bookItem.bookText }</p>
                    <div className="book_price">
                           <p className="sum">{ bookItem.bookPrice }<span className="rub">руб.</span></p>
                        <div className="book_btn">
                            <button className="price_btn">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="book_img">
                <img
                    style={{width: '100%'}}
                    src={ bookItem.bookImg }
                    alt=""/>
            </div>
        </div>
    );
}

export default Book;