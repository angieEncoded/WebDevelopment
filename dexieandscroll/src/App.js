import './App.css';

import React, { useEffect } from 'react'

import SearchWindow from "./components/SearchWindow"
import data from "./database/data"
import db from "./database/db"

// Update items in the database
const populateData = async () => {
  const results = await db.animals.bulkPut(data)
  console.log(results)
}




function App() {

  // This will run only once when the application loads
  // Put the functions outside the main rendering function so that 
  // react linter doesn't complain about missing dependencies
  useEffect(() => {
    populateData();
  }, [])






  return (
    <div className="App">
      <SearchWindow />
    </div>
  );
}

export default App;
