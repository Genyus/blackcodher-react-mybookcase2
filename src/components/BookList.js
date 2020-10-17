import React from 'react';
import Book from './Book';
// import data from './models/books.json';
// import logo from './logo.svg';
// import './App.css';

const BookList = (props) => {
  return (
    <>
        {props.books.map(book => (<Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook}/>))}
    </>
  );
}


export default BookList;