import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
    return(
        <React.Fragment>
           <div className="header">
            <h1>My Bookcase</h1>
            <Link to='/blackcodher-react-mybookcase2' className="bookLink">Home</Link>
            <Link to="/blackcodher-react-mybookcase2/pages/About" className="bookLink">About</Link>
            <Link to="/blackcodher-react-mybookcase2/bookcase" className="bookLink">Bookcase</Link>
            <br></br>
            </div>
        </React.Fragment>
    )
}

export default Header