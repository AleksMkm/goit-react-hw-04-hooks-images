import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import Button from './Components/Button';
import ImageGalleryView from './Components/ImageGalleryView';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [moreImagesAvailable, setMoreImagesAvailable] = useState(false);

  return (
    <Container>
      <Searchbar getSearchQuery={query => setSearchQuery(query)} />
      <ImageGalleryView
        searchQuery={searchQuery}
        page={searchPage}
        resetSearchPage={() => setSearchPage(1)}
        updateImageAvialability={status => setMoreImagesAvailable(status)}
      />
      {moreImagesAvailable && (
        <Button updateSearchPage={() => setSearchPage(state => state + 1)} />
      )}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
