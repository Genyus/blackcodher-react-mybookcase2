import React from 'react';
import '../App.css'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
        <Container>
        <Row className="align-items-center justify-content-md-center book">
            <h2 className="bookTitle">{title}</h2>
        </Row>
        <Row className="align-items-center justify-content-md-center book">
            <h3 className="bookAuthor">by {authors}</h3>
        </Row>
        <Row className="align-items-center justify-content-md-center book">
            <Col lg="2">
            <img src= {smallThumbnail} alt={title}/>
            </Col>
            <Col lg="8">
            <p className="bookDescription">{description}</p>
            </Col>
            <Col lg="2">
            <p className="bookPrice">£{listPrice && listPrice.amount}</p>
            {props.addBook && (
                <Button  onClick={() => props.addBook(title, id)}>Add +</Button>
            )}
            {props.removeBook && (
                <Button  onClick={() => props.removeBook(id)}>Remove</Button>
            )}            
            </Col>
        </Row>
        <hr></hr>
        </Container>
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