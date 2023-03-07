import React, { useState } from "react";

function Search({ onSearch }) {

  const [query, setQuery] = useState('');

  function handleQuery(e) {
    e.preventDefault() 

    onSearch(query)
  }

  return (
    <div>
      <input value={query} onChange={ e => setQuery(e.target.value)}></input>
      <button type="submit" onClick={e => handleQuery(e)}>Search</button>
    </div>
  );
}

export default Search;