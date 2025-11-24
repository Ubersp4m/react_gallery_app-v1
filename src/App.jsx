import { useState, useEffect } from 'react'
import {Route, Routes, Navigate, useParams} from 'react-router-dom';
import './App.css'
import './index.css'
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';
import apiKey from './config';


function App() {
  const [searchTerm, setSearchTerm] = useState('cats');
  const [imageData, setImageData] = useState(null);
  const [loadedData, setLoadedData] = useState(false);
  const [pageTitle, setPageTitle] = useState();
  /*let {pageTitleParam} = useParams();
  setPageTitle(pageTitleParam);*/

  const handleSearch = (search) => {
  /*  const query = useParams();
    if(!search && query){
      console.log(query);
      setSearchTerm(query); 
    }
    else{*/
      console.log('in handleSearch: '+search);
      setSearchTerm(search);
    //}
  }

  const pageChange = (pageTitleParam) => {
    console.log('in pageChange: '+pageTitleParam);
    setPageTitle(pageTitleParam);
    setSearchTerm(pageTitleParam);
  }

  const fetchData = () => {
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}`)
          .then(response => {
            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
          }).then(data => {
            console.log("fetch data: " + data);
            setImageData(data.hits);
            setLoadedData(true);
          })
          .catch(error => {
            console.log("There was an error parsing and/or fetching the request", error);
          });
      }

  useEffect(() => {
       fetchData();
       console.log('ran app useEffect');
    },[searchTerm, pageTitle]);
  return (
    <div className="container">
      <Search search={handleSearch}/>
      <Nav search={handleSearch}/>
      <Routes>
        <Route path="cats"  element={<PhotoList imageData={imageData} pageTitle={pageChange} fetchData={fetchData}/>} />
        <Route path="dogs" element={<PhotoList imageData={imageData} pageTitle={pageChange} fetchData={fetchData}/>} />
        <Route path="computers" element={<PhotoList imageData={imageData} pageTitle={pageChange} fetchData={fetchData}/>} />
        <Route path="/" element={loadedData ? (
          <PhotoList imageData={imageData}
            pageTitle={pageChange} fetchData={fetchData}/>) : null 
          } />
        <Route path="search/:query" element={<PhotoList imageData={imageData} pageTitle={pageChange} fetchData={fetchData}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
