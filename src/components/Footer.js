import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <React.Fragment>
           <div className="footer">
            <hr />
                <h3><u>Project Links</u></h3>
                <div className="projectLinks">
                <a href="https://affirmedvisionary.github.io/blackcodher-bootcamp/">Contents</a>
                <a href="https://affirmedvisionary.github.io/blackcodher-bootcamp/html/portfolio/index.html">Personal Profile</a>
                <a href="https://affirmedvisionary.github.io/blackcodher-bootcamp/html/bookshop/index.html">Book Shop</a>
                <a href="https://affirmedvisionary.github.io/blackcodher-bootcamp/javascript/quiz-along/index.html">Simple Quiz</a>
                <a href="https://affirmedvisionary.github.io/blackcodher-react-mybookcase2/">My Bookcase</a>
                </div>
                <p className="copyright"><Link to="mailto:iam@charlenegrant.co.uk">Charlene Grant</Link> 2020</p>
                </div>
        </React.Fragment>
    )
}

export default Footer