import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { debounce } from 'lodash-es';
import './App.css';

import Header from "../Header";
import SearchBar from "../SearchBar";
import Results from "../Results";

const PIXABAY_URL = process.env.REACT_APP_PIXABAY_URL

function App() {
  // Our local state
  // What we catch in our form input
  const [inputValue, setInputValue] = useState("pink");
  // The user's search
  const [search, setSearch] = useState("");
  // Our array of images, send by the API
  const [images, setImages] = useState([]);

  // Function who calls the API of Pixabay

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await Axios({
          method: 'GET',
          url: `${PIXABAY_URL}&q=${search ? search : '%27%27'}`
        });
        if (response.status !== 200) return console.error('ERROR');
        setImages(response.data.hits);
        console.log("La réponse API :", response);
      } catch (error) {
        console.log(error);
      }
    }
    loadImages();
  }, [search, inputValue]);

  return (
    <div className="App">
      <Header />
        <input type="text" onChange={debounce((event) => {
          setInputValue(event.target.value);
        }, 1000)}/>
        <SearchBar setInputValue={setInputValue} inputValue={inputValue} setSearch={setSearch} search={search} />
        <Results images={images} />
    </div>
  );
}

export default App;
