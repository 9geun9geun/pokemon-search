import React, { useState } from "react";
import './SearchBar.styles.scss';


const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) =>{
    e.preventDefault();
    setSearch((e.target.value).toLowerCase())
  }
  return (
    <div className="container">
    <h1> POKEMON SEARCH</h1>
    <div className = "container__item">
      <form className="form">
      <input className="form__field"
        type="text"
        placeholder="Enter Pokemon Name"
        onChange={handleChange}
      />
      </form>
      <button className= "button-search" onClick={(e) => props.getPokemon(search)}>Search</button>
    </div>
    </div>
  );
};

export default SearchBar;
