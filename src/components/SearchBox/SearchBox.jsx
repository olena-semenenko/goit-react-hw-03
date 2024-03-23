import React from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, handleFilter }) => {
  return (
    <div className={css.searchBox}>
      <h4>Find contact by name</h4>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter name..."
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
