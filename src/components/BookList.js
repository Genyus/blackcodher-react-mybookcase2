import Book from './Book';
import React, {useState} from "react";
import Pagination from "react-js-pagination";
import Container from 'react-bootstrap/Container'
import '../App.css';

    const BookList = (props) => {
    const booksPerPage = 8
    const [activePage, setCurrentPage] = useState(1)
    const indexOfLastBook = activePage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);
    const renderBooks = currentBooks.map((book) => {
        return <Book
            key={book.id}
            book={book}
            addBook={props.addBook}
            removeBook={props.removeBook}/>
    });
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    };
    return ( 
    <> 
    <Container className="hero">
      <div className="hero-text">
          <h1>Your Shelf</h1>
          <h4>All your chosen future reads</h4>
      </div>
    </Container> 
    <Container> 
    {renderBooks}
    <div className = "pagination"> 
      <Pagination
        activePage={activePage}
        itemsCountPerPage={3}
        totalItemsCount={props.books.length}
        pageRangeDisplayed={3}
        onChange={handlePageChange}/> 
    </div>
    </Container > 
  </>);
}

export default BookList;