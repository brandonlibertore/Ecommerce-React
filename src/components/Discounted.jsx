import React from 'react'
import Book from './UI/Book.jsx'
import {books} from '../data.js'

export default function Discounted() {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Discounted <span className="purple">Books</span>
                </h2>
                <div className="books">
                    {
                        books
                            .filter(book => book.salePrice)
                            .slice(0, 8)
                            .map(book => <Book 
                                key = {book.id}
                                url = {book.url} 
                                title = {book.title} 
                                originalPrice = {book.originalPrice}
                                salePrice = {book.salePrice}
                                rating = {book.rating}/>)
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
