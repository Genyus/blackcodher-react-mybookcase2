import React from 'react';

const Search = (props) => {

function handleSubmit(event) {
    event.preventDefault();
    props.findBooks(props.keyword, props.authorKeyword);
    props.setKeyword("");
    props.setAuthorKeyword("")
}

    return (
    <form className="search-form" onSubmit={handleSubmit}>
        <label>Search </label>
        <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)} />
        <label>Search Author </label>
        <input type="text" value={props.authorKeyword} onChange={(e) => props.setAuthorKeyword(e.target.value)} />
        <button>Submit</button>
    </form>
    )
}

export default Search