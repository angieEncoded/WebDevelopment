import React from 'react'
import "./searchresult.css"
const SearchResult = (props) => {
    return (
        <div className="search-result" key={props.id}>
            <div className="row result-line">
                <div className="col ">{props.id}</div>
                <div className="col ">{props.name}</div>
                <div className="col ">{props.type}</div>
            </div>
        </div>
    )
}

export default SearchResult
