import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import '../App.css'
// import Header from '../components/Header'

function Home() {
    return (
        <React.Fragment>
        <Container className="hero">
         <div className="hero-text">
            <h1>The Bookcase</h1>
            <Button href="/pages/About">About</Button>
            <Button href="/pages/Search">Search</Button>
            <Button href="/bookcase">Bookcase</Button>
         </div>
        </Container>
        </React.Fragment>
    )
}

export default Home