import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/books");
    const books = await res.json();

    return books.map((book) => ({ bookId: book.id}))
}


const BookDetailPage = async({params}) => {

    const {bookId} = await params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const book = await res.json();

    return (
        <div>
            <h2>Book Detail Page</h2>
            <h3>Book Title: {book.title}</h3>
            <p>Book Author: {book.author}</p>
            <p>Book Price: {book.price}</p>
            <p>Book Category: {book.category}</p>
            <p>Book Description: {book.description}</p>
        </div>
    );
};

export default BookDetailPage;