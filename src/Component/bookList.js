import React from "react";
import './bookList.css';
const BookList = (props) => {

    return (
        <React.Fragment>
        <h3>Önerilen Kitaplar</h3>
        <ul className="book-list">
            {props.books.map((book) => (
                <li className="book" key={book.id}>
                    <h4>{book.title}</h4>
                    <p>{book.detail}</p>
                </li>
            ))}
        </ul>
        </React.Fragment>
    )
}

export default BookList;