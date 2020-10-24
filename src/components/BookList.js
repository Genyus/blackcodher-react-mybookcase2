import Book from './Book';
import React, { useState } from "react";
import Pagination from "react-js-pagination";
// import data from './models/books.json';
// import logo from './logo.svg';
import '../App.css';

const BookList = (props) => {
  const booksPerPage = 8
  const [ activePage, setCurrentPage ] = useState( 1 )
  const indexOfLastBook  = activePage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = props.books.slice( indexOfFirstBook, indexOfLastBook );
  const renderBooks = currentBooks.map( ( book) => {
    return <Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook}/>
 } );
  const handlePageChange = ( pageNumber ) => {
    console.log( `active page is ${ pageNumber }` );
    setCurrentPage( pageNumber )
 };
  return (
    <>
    {renderBooks}
        <div className="pagination">
            <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 3 }
               totalItemsCount={ props.books.length }
               pageRangeDisplayed={ 3 }
               onChange={ handlePageChange }
            />
         </div>
    </>
  );
}


export default BookList;