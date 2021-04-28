import React, { useRef } from 'react';
import { debounce } from 'lodash-es';
import "./styles.scss";

const SearchBar = ({ setSearch, search }) => {
  const textInput = useRef("");
  return (
  <section className="searchbar__container">
    <form
      type="submit"
      className="searchbar__form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(textInput.current.value);
        setSearch(textInput.current.value.replace(/ /g, '&').toLowerCase());
      }
      }
    >
      <input
        type="text"
        className="searchbar__form__input"
        placeholder="Search..."
        ref={textInput}
        onChange={debounce((event) => {
          setSearch(event.target.value.replace(/ /g, '&').toLowerCase());
        }, 3000)
        }
      />
    </form>
  </section>
)};

export default SearchBar;
