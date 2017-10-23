import React, {Component} from 'react'
import ShelfSelector from './ShelfSelector'
import PropTypes from 'prop-types'

class Book extends Component {

	static PropTypes = {
		books: PropTypes.object.isRequired,
		selectShelf: PropTypes.func.isRequired
	}

	render(){
		const { books, selectShelf } = this.props
		return(
			  <div className="bookshelf-books">
              <div className="books-grid">         
	              {books.map((book, j) => (
				      	<div key={j} className="book">
					      <div className="book-top">
					        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
					        <ShelfSelector 
					        	selectShelf={selectShelf}
					        	book={book}
					        />
					      </div>
				      	    <div className="book-title">{book.title}</div>
				      	    {book.authors.map((author, i) => (
				            <div className="book-authors" key={i}>{author}</div>
				        ))}
				      	</div>
				   ))}  
              </div> 
            </div>   	
		)
	}
}

export default Book