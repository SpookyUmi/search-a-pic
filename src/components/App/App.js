import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { debounce } from 'lodash-es';
import './App.css';

const PIXABAY_URL = process.env.REACT_APP_PIXABAY_URL

function App() {
  // Our local state
  // The user's search
  const [inputValue, setInputValue] = useState("pink");
  // Our array of images, send by the API
  const [images, setImages] = useState([]);

  // Function who calls the API of Pixabay

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await Axios({
          method: 'GET',
          url: `${PIXABAY_URL}&q=${inputValue ? inputValue : '%27%27'}`
        });
        if (response.status !== 200) return console.error('ERROR');
        setImages(response.data.hits);
        console.log("La réponse API :", response);

      } catch (error) {
        console.log(error);
      }
    }
    loadImages();
  }, [inputValue]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={debounce((event) => {
          setInputValue(event.target.value);
        }, 1000)}/>
      </header>
    </div>
  );
}

export default App;
