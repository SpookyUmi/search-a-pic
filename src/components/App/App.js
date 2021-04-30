import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import './styles.scss';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Results from '../Results';
import Footer from '../Footer';

import { searchFormat } from '../../utils/searchFormat';

const PIXABAY_URL = process.env.REACT_APP_PIXABAY_URL

const App = () => {
  // Our local state
  // The user's search
  const [search, setSearch] = useState("pink");
  // Our array of images, send by the API
  const [images, setImages] = useState([]);
  // The state of our image, open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Image's index info for our lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  // Page number for our results
  const [page, setPage] = useState(1);

  const loading = useRef("loading");

  // useEffect hook who contains the call to the API of Pixabay
  useEffect(() => {
    async function loadImages() {
      try {
        const response = await Axios({
          method: 'GET',
          url: `${PIXABAY_URL}&q=${search ? searchFormat(search) : '%27%27'}&per_page=50`
        });
        if (response.status !== 200) return console.error('ERROR');
        setImages(response.data.hits);
        console.log("La réponse API :", response);
      } catch (error) {
        console.log(error);
      }
    }
    loadImages();
  }, [search]);

  function loadMoreImages() {
    Axios.get(`${PIXABAY_URL}&q=${search ? searchFormat(search) : '%27%27'}&per_page=50&page=${page}`)
    .then(
      res => {
        setImages([...images, ...res.data.hits]);
        setPage(page + 1);
      }
    )
  }

  return (
    <div className="App">
      <Header />
        <SearchBar setSearch={setSearch} />
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreImages}
          hasMore={images.length >= 50 ? true : false}
          loader={loading.current.node}
        >
          <Results
            images={images}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            photoIndex={photoIndex}
            setPhotoIndex={setPhotoIndex}
            search={search}
          />
        </InfiniteScroll>
        <div className="loader" key={0} ref={loading}>{
          images.length >= 50 ? "Loading ..." : "-"
        }</div>
        <Footer />
    </div>
  );
}

export default App;
