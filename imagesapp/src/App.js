import "./App.css";
import ImageList from "./components/ImageList";
import SearchHeader from "./components/SearchHeader";
import searchImages from './components/api'
import React, { useState } from 'react';


function App() {
  const [images, setImages] = useState([])
  
  const handleSearchHeader = async (term) => {
    const result= await searchImages(term);
    setImages(result)
  
  };
  return (
    <div className="App">
      <SearchHeader search={handleSearchHeader} />
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
