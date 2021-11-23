import "./searchwindow.css"

import React, { useState } from 'react'

import Draggable from 'react-draggable'; // The default
import SearchResult from "./SearchResult"
import db from "../database/db"

const SearchWindow = (props) => {

    //Set up our results state for what is coming out of dexie
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);


    // Get results from the database
    const searchIndexedDb = async (event, searchType) => {
        // console.log(event.target.value)
        setLoading(true)
        const results = await db.animals.where("type").startsWithIgnoreCase(event.target.value).toArray();
        setResults(results)
        setLoading(false)
    }

    // Fix for the Strict mode issue in the draggable module
    const nodeRef = React.useRef(null);


    return (
        <Draggable handle="span" nodeRef={nodeRef}>

            <div ref={nodeRef} className={"search"}>
                <span className="window-top">
                    <span className="ms-1">
                        Search Animals
                    </span>
                    <i className="las la-times float-end me-1 mt-1" id="closeme" onClick={props.closeQuickTask}></i>
                </span>


                <div className="my-3 mx-5">
                    <input type="text" className="form-control" onKeyUp={searchIndexedDb} placeholder="Start Typing an animal type" />
                </div>


                <div className={"results-wrapper"}>
                    <div className="results-div">
                        {loading && <p>Fetching Results</p>}
                        {results && results.length > 0 && results.map(item => <SearchResult id={item.id} name={item.name} type={item.type} key={item.id} />)}

                    </div>
                </div>






            </div>

        </Draggable>
    )
}

export default SearchWindow
