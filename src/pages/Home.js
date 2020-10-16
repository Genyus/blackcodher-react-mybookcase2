import React from 'react';
import { Link } from 'react-router-dom'
import '../pages/home.css'

function Home() {
    return (
        <React.Fragment>
            <div className="home">
        <div className="hero-text">
          <h1>The Bookcase</h1>
          <h3>Create your own list here</h3>
        <Link to="/pages/Search" className="aboutButton">
            <button className="aboutButton">Search</button>
        </Link>
        <p>For more information check out the About page</p>
        <Link to="/pages/About" className="aboutButton">
            <button className="aboutButton">Search</button>
        </Link>
      </div>
      </div>
        </React.Fragment>
    )
}

export default Home