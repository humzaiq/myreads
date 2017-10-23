import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class AllBooks extends Component {

	static propTypes = {
	    books: PropTypes.array.isRequired,
	    selectShelf: PropTypes.func.isRequired
	}

	render(){
		const { books, selectShelf } = this.props
		return(
      	<div className="list-books">
		        <div className="list-books-title">
		          <h1>My Reads</h1>
		        </div>		      		
		        <div className="list-books-content">        
		            <Bookshelf 
		            	books={ books }
		            	selectShelf={ selectShelf }
		            />
				</div>					
	             <Link
	             to="/search"
	             className="open-search">
	             <a>Add a book</a>
	             </Link>
	      </div>	
		)
	}
}

export default AllBooks