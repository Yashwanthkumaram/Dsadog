
import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search topics..."
      style={styles.searchBar}
    />
  );
};

const styles = {
  searchBar: {
    padding: '0.5rem',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '400px',
    margin: '1rem auto',
    display: 'block',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default SearchBar;
