import React, {useState} from 'react'
import Book from '../components/UI/Book';

export default function Books({books: initialBooks}) {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter) {
        console.log(filter)
        if (filter === "LOW_TO_HIGH"){
            console.log("HERE")
            setBooks(books.slice().sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }
        else if (filter === "HIGH_TO_LOW"){
            setBooks(books.slice().sort((a,b) => (b.salePrice || b.originalPrice) -  (a.salePrice || a.originalPrice)))
        }
        else if (filter === "RATING"){
            setBooks(books.slice().sort((a,b) => a.rating- b.rating))
        }
    }

  return (
    <div id="books__body">
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className='section__title books__header--title'> 
                                All <span className="purple">Books</span>
                            </h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Price, Low to High</option>
                                <option value="HIGH_TO_LOW">Price, High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {
                            books
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
        </main>
    </div>
  )
}
