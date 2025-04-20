import React, { useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    alert('Searching for: ' + searchTerm);
  };

  return (
    <div className="search-container">
      <h2>Search for Water Tips!</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
      
    </div>
  );
}
