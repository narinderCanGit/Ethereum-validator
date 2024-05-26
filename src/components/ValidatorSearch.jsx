import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchValidatorSuggestions } from '../api/api';

const ValidatorSearch = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    if (userInput.length >= 3) {
        const result = await fetchValidatorSuggestions(userInput);
        setSuggestions(result);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/Validator/${input}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/Validator/${suggestion.validatorindex || suggestion.pubkey}`);
  };

  return (
    <div className="validator-search">
      <h2>Search for a Validator</h2>
      <p>Enter a Validator ID or Pubkey to search for validator information.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={handleChange} 
          placeholder="Validator ID or Pubkey" 
        />
        <button className="button-search" type="submit">Search</button>
      </form>
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.validatorindex || suggestion.pubkey}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidatorSearch;
