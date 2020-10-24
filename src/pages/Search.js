import React, { Fragment }from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// import './search.css'
import '../App.css'

const Search = (props) => {

function handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    props.findBooks(props.keyword, props.authorKeyword, props.titleKeyword, props.subjectKeyword);
    props.setKeyword("");
    props.setAuthorKeyword("");
    props.setTitleKeyword("");
    props.setSubjectKeyword("");
}

    return (
        <Fragment>
            <hr></hr>
            <div className="search-container">
                <h4>Choose one of the following search queries:</h4>
                <Form inline onSubmit={handleSubmit} className="search-form">
                    <Form.Group as={Row} controlId="searchKeyword">
                        <Form.Label srOnly>Search Keyword</Form.Label>
                        <Form.Control className="search-field" type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)} placeholder="Keyword" />
                        
                        <Form.Label srOnly>Search by Author</Form.Label>
                        <Form.Control className="search-field" type="text" value={props.authorKeyword} onChange={(e) => props.setAuthorKeyword(e.target.value)} placeholder="Author" />
                        
                        <Form.Label srOnly>Search by Title</Form.Label>
                        <Form.Control className="search-field" type="text" value={props.titleKeyword} onChange={(e) => props.setTitleKeyword(e.target.value)} placeholder="Title" />
                        
                        <Form.Label srOnly>Search by Subject</Form.Label>
                        <Form.Control className="search-field" type="text" value={props.subjectKeyword} onChange={(e) => props.setSubjectKeyword(e.target.value)} placeholder="Subject" />
                        <Button as="input" type="submit" value="Submit" />{' '}
                    </Form.Group>
                </Form>
            </div>
            <hr></hr>
          </Fragment>
    )
}

export default Search

    //  <form className="search-form" onSubmit={handleSubmit}>
    //     <label>Search </label>
    //     <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)} />
    //     <label>Search Author </label>
    //     <input type="text" value={props.authorKeyword} onChange={(e) => props.setAuthorKeyword(e.target.value)} />
    //     <label>Search Title </label>
    //     <input type="text" value={props.titleKeyword} onChange={(e) => props.setTitleKeyword(e.target.value)} />
    //     <label>Search Subject </label>
    //     <input type="text" value={props.subjectKeyword} onChange={(e) => props.setSubjectKeyword(e.target.value)} />
    //     <button>Submit</button>
    // </form>
