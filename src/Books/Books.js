import React from "react";
import "./Books.css";
import Book from "./Book/Book";
import HomeFooter from "../Home/HomeFooter/HomeFooter";

function Books(props) {
    return (
        <div className="books_container">
            <div className="books_wrapper">
                {props.booksItem.map((el) => {
                    return <Book bookItem={el} key={el.id}/>
                })}
            </div>
            <HomeFooter />
        </div>
    );
}

export default Books;