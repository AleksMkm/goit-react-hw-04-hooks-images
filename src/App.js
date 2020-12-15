import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import Button from './Components/Button';
import ImageGalleryView from './Components/ImageGalleryView';
import customHooks from './hooks/hooks';

const { useStateWithLabel } = customHooks;

function App() {
  const [searchQuery, setSearchQuery] = useStateWithLabel('', 'searchQuery');
  const [searchPage, setSearchPage] = useStateWithLabel(1, 'searchPage');
  const [moreImagesAvailable, setMoreImagesAvailable] = useStateWithLabel(
    false,
    'moreImagesAvailable',
  );

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
