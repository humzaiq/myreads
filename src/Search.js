import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'


class Search extends Component{

    static PropTypes = {
    selectShelf: PropTypes.func.isRequired
  }

  state={
      books:[],
      query:''
  }

  updateQuery = (query) => {
        if(query) {
          this.setState({query : query.trim()})
          BooksAPI.search(query, 20).then((books) =>
          this.setState({books})
          )
      }
  }

	render(){
    const { selectShelf } = this.props
    const { query, books } = this.state  

		return(
		   <div className="search-books">
            <div className="search-books-bar">
            <Link
              to="/">
              <a className="close-search">Close</a>
            </Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={(e) => this.updateQuery(e.target.value)}/>
              </div> 
            </div>
            <div className="search-books-results">
              <ol className="books-grid">                 
                 <li>
                 
                   <Book 
                   books={books} 
                   key={books.id}
                   selectShelf={selectShelf}
                   /> 
             
                 </li>                 
              </ol>
            </div>
      </div>
		)
	}
}

export default Search