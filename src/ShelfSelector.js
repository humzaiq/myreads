import React, { Component } from 'react';
import Proptypes from 'prop-types'

class ShelfSelector extends Component {
	static Proptypes ={
		book: Proptypes.object.isRequired,
		selectShelf: Proptypes.func.isRequired
	}

	render(){
		const {book, selectShelf } = this.props

		return(
			<div className="book-shelf-changer">
	          <select onChange={(e) => selectShelf(book, e.target.value)} defaultValue={book.shelf ? book.shelf : 'none'} >
	            <option value="none" disabled>Move to...</option>
	            <option value="currentlyReading">Currently Reading</option>
	            <option value="wantToRead">Want to Read</option>
	            <option value="read">Read</option>
	            <option value="none">None</option>
	          </select>
	        </div>
		)
	}
}

export default ShelfSelector