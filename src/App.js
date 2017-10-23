import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AllBooks from './AllBooks'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
      this.getAllBooks()
  }

  getAllBooks = () => {
      BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  selectShelf = (book, newShelf) => {
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf
              this.setState(state => ({
              books: state.books.filter(b => b.id !== book.id).concat([ book ])
          }));
        }
      )
    }

  render() {
    return (
        <div className="App">
        <Route exact path="/" render={() => (
          <AllBooks
            books={this.state.books}
            selectShelf={this.selectShelf}
            />
        )} />
        <Route path="/search" render={() => (
          <Search
            selectShelf={this.selectShelf}
          />
        )}/>
      </div>
    )
  } 
}

export default BooksApp
