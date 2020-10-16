import React from 'react';

const Search = (props) => {

function handleSubmit(event) {
    event.preventDefault();
    props.findBooks(props.keyword);
}

    return (
    <form className="search-form" onSubmit={handleSubmit}>
        <label>Search </label>
        <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/>
        <button>Submit</button>
        {props.keyword}
    </form>
    )
}

export default Search