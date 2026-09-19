import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { id, title, author, price, category, description } = book;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description} </p>
        <p>Author: {author}</p>
        <p>Category: {category}</p>
        <p>Price: {price}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <Link href={`/books/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
