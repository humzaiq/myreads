import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component{

  static PropTypes = {
    books: PropTypes.array.isRequired,
    selectShelf: PropTypes.func.isRequired
  }


	render(){
        const {books , selectShelf } = this.props
        const shelvesArray = [{value: 'currentlyReading', title: 'Currently Reading'},
                              {value: 'wantToRead', title: 'Want To Read'},
                              {value: 'read', title: 'Read'}
                              ]
		return(
		    <div className="bookshelf">
        {shelvesArray.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.value) 
        return (
          <div key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>        
                <Book 
                  books={shelfBooks}
                  selectShelf={selectShelf}
                /> 
            </div>
            )
        })}     
      </div>
		)
	}
} 

export default Bookshelf

