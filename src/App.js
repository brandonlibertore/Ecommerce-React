import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import {books} from './data.js'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book){
    setCart([...cart, book])
    // const dupeItem = cart.find(item => parseFloat(item.id) === parseFloat(book.id))
    // if (dupeItem){
    //   setCart(cart.map(item => {
    //     if (item.id === dupeItem.id){
    //       return {...item, quantity: item.quantity + 1}
    //     }
    //     else{
    //       return item
    //     }
    //   }))
    // }
    // else{
    //   setCart([...cart,{...book, quantity: 1}])
    // }
  }

  useEffect(() => console.log(cart))

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact render={() => <Books books={books}/>}/>
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
        <Route path="/cart" render={() => <Cart cart={cart}/>}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
