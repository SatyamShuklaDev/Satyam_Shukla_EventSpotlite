
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value); // Call onSearch when the input changes
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for events..."
        value={term}
        onChange={handleChange} // Update input value on change
      />
    </SearchContainer>
  );
};

export default SearchBar;
