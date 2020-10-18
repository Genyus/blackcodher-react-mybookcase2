import React from 'react';
import '../components/book.css'
import PropTypes from 'prop-types'
// import addBook from '../App'
// import Book from '../models/books.json'

const Book = (props) => {

    let {id, volumeInfo: {title, authors, description, imageLinks:{smallThumbnail}},
        saleInfo:{listPrice}} 
        = props.book;
   

        // let amount = () => {
        //     if (saleInfo.retailPrice) {
        //         let amount = saleInfo.retailPrice.amount;
        //         return amount
        //     }else {
        //         let amount = 'No Amount Set'; 
        //         return amount
        //     }
        // };
 
        // let url = () => {
        // if (imageLinks) {
        //     let url = imageLinks.smallThumbnail;
        //     return url;
        // } else {
        //     let url = 'image not available';
        //     return url;
        // }
        // };

    return (
        <div className='book'>
            <span className="imgPriceAdd">
            <img src= {smallThumbnail} alt={title}/>
            {props.addBook && (
                <button className="addRemoveBtn" onClick={() => props.addBook(title, id)}>Add +</button>
            )}
            {props.removeBook && (
                <button className="addRemoveBtn" onClick={() => props.removeBook(id)}>Remove</button>
            )}            
            </span>
            <h2 className="bookTitle">{title}</h2>
            <h3 className="bookAuthor">by {authors}</h3>
            <p className="bookPrice">£{listPrice && listPrice.amount}</p>
            <p className="bookDescription">{description}</p>
        </div>
    );
}

Book.propTypes = {
    volumeInfo: PropTypes.shape(
        {title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        description: PropTypes.string,
        imageLinks: PropTypes.shape(
            {thumbnail: PropTypes.string, 
            smallThumbnail: PropTypes.string})
        }),
        saleInfo: PropTypes.shape({listPrice: PropTypes.shape({amount: PropTypes.number})})
   };

   Book.defaultProps ={
       authors: "No Known Authors"
   }
   

export default Book;