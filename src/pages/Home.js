import React from 'react';
import { Link } from 'react-router-dom'
import '../pages/home.css'
// import Header from '../components/Header'

function Home() {
    return (
        <React.Fragment>
        <div className="home">
         <div className="hero-text">
            <h1>The Bookcase</h1>
            <Link to="/pages/About" className="bookLink"><button className="aboutButton">About</button></Link>
            <Link to='/pages/Search' className="bookLink"><button className="aboutButton">Search</button></Link>
            <Link to="/bookcase" className="bookLink"><button className="aboutButton">Bookcase</button></Link>
         </div>
        </div>
        </React.Fragment>
    )
}

export default Home