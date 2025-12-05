import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import './index.css'
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';
import apiKey from './config';


function App() {
  const [imageData, setImageData] = useState(null);
  const [loadedData, setLoadedData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('cats');
//fetches data inside the useEffect callback with function fetchData
 useEffect(() => { 
  const fetchData = () => {
      fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}`)
        .then(response => {
          if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        }).then(data => {
          //sets imageData to data objects array containing image urls
          if(data.hits.length > 0){
            setImageData(data.hits);
            setLoadedData(true);
          }
          else{
            setLoadedData(false);
          }
        })
        .catch(error => {
          console.log("There was an error parsing and/or fetching the request", error);
        });
    }

       fetchData();
    },[searchTerm]);

  //sets searchTerm variable to re-render with useEffect dependency above
  const handleSearch = (search) => {
      setSearchTerm(search);
  }
//sets searchTerm based on page and path url, triggers useEffect thru dependency of searchTerm
  const pageChange = (pageTitleParam) => {
    setSearchTerm(pageTitleParam);
  }

  return (
    <div className="container">
      <Search search={handleSearch}/>
      <Nav search={handleSearch}/>
      <Routes>
        <Route path="/cats"  element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/dogs" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/computers" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/" element={loadedData ? (
          <PhotoList imageData={imageData}
            pageTitle={pageChange}/>) : <NotFound /> 
          } />
        <Route path="search/:query" element={loadedData ? (
          <PhotoList imageData={imageData}
            pageTitle={pageChange}/>) : <NotFound /> 
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
