import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import Rating from "../components/UI/Rating";
import Price from "../components/UI/Price";
import Book from "../components/UI/Book";

export default function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => parseFloat(book.id) === parseFloat(id));

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find((book) => parseFloat(book.id) === parseFloat(id));
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <a href="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </a>
              <a href="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </a>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book_selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus itaque vero sequi eos accusantium recusandae,
                    aspernatur veniam, doloribus vel officia rerum impedit nam.
                    Laudantium dolorem optio porro doloribus veritatis ratione.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus itaque vero sequi eos accusantium recusandae,
                    aspernatur veniam, doloribus vel officia rerum impedit nam.
                    Laudantium dolorem optio porro doloribus veritatis ratione.
                  </p>
                </div>
                {bookExistsOnCart() ? (
                  <a href={`/cart`}>
                    <button className="btn">Checkout</button>
                  </a>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter(
                  (book) =>
                    book.rating === 5 && parseFloat(book.id) !== parseFloat(id)
                )
                .slice(0, 4)
                .map((book) => (
                  <Book
                    key={book.id}
                    id={book.id}
                    url={book.url}
                    title={book.title}
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                    rating={book.rating}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
