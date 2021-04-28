import React, { useRef } from 'react';
import { debounce } from 'lodash-es';
import "./styles.scss";

const SearchBar = ({ setSearch }) => {
  const textInput = useRef("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(textInput.current.value);
    setSearch(textInput.current.value);
  }

  return (
  <section className="searchbar__container">
    <form
      type="submit"
      className="searchbar__form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="searchbar__form__input"
        placeholder="Search..."
        ref={textInput}
        onChange={debounce(handleChange, 1000)}
      />
    </form>
  </section>
)};

export default SearchBar;
