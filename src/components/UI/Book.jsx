import React from "react";
import Price from "./Price";
import Rating from "./Rating";

const Book = (props) => {
  return (
    <div className="book">
      <a href={`/Ecommerce-React/books/${props.id}`}>
        <figure className="book__img--wrapper">
          <img src={props.url} alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a
          href={`/Ecommerce-React/books/${props.id}`}
          className="book__title--link"
        >
          {props.title}
        </a>
      </div>
      <Rating rating={props.rating} />
      <Price originalPrice={props.originalPrice} salePrice={props.salePrice} />
    </div>
  );
};

export default Book;
