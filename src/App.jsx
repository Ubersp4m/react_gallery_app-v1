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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  //const [pageTitle, setPageTitle] = useState();
 

  /*const handleSearch = (search) => {
    const query = useParams();
    if(!search && query){
      console.log(query);
      setSearchTerm(query); 
    }
    else{
      console.log('in handleSearch: '+search);
      setSearchTerm(search);
    //}
  }*/

  /*const pageChange = (pageTitleParam) => {
    console.log('in pageChange: '+pageTitleParam);
    setPageTitle(pageTitleParam);
=======

//fetches data inside the useEffect callback with function fetchData
 useEffect(() => {
    
  const fetchData = () => {
      fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}`)
        .then(response => {
          if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        }).then(data => {
          //sets imageData to data objects array containing image urls
          setImageData(data.hits);
          setLoadedData(true);
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
>>>>>>> Stashed changes
    setSearchTerm(pageTitleParam);
  }*/

<<<<<<< Updated upstream
  const fetchData = (searchTerm) => {
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

  /*useEffect(() => {
       fetchData();
       console.log('ran app useEffect');
    },[searchTerm, pageTitle]);*/
=======
>>>>>>> Stashed changes
=======

//fetches data inside the useEffect callback with function fetchData
 useEffect(() => {
    
  const fetchData = () => {
      fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}`)
        .then(response => {
          if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        }).then(data => {
          //sets imageData to data objects array containing image urls
          setImageData(data.hits);
          setLoadedData(true);
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

>>>>>>> Stashed changes
=======

//fetches data inside the useEffect callback with function fetchData
 useEffect(() => {
    
  const fetchData = () => {
      fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}`)
        .then(response => {
          if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        }).then(data => {
          //sets imageData to data objects array containing image urls
          setImageData(data.hits);
          setLoadedData(true);
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

>>>>>>> Stashed changes
  return (
    <div className="container">
      <Search fetchData={fetchData}/>
      <Nav fetchData={fetchData}/>
      <Routes>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Route path="cats"  element={<PhotoList imageData={imageData} fetchData={fetchData}/>} />
        <Route path="dogs" element={<PhotoList imageData={imageData} fetchData={fetchData}/>} />
        <Route path="computers" element={<PhotoList imageData={imageData} fetchData={fetchData}/>} />
        <Route path="/" element={loadedData ? (
          <PhotoList imageData={imageData}
            fetchData={fetchData}/>) : null 
          } />
        <Route path="search/:query" element={<PhotoList imageData={imageData} fetchData={fetchData}/>}/>
=======
        <Route path="/cats"  element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/dogs" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/computers" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/" element={loadedData ? (
          <PhotoList imageData={imageData}
            pageTitle={pageChange}/>) : <NotFound /> 
          } />
        <Route path="search/:query" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>}/>
>>>>>>> Stashed changes
=======
        <Route path="/cats"  element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/dogs" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/computers" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/" element={loadedData ? (
          <PhotoList imageData={imageData}
            pageTitle={pageChange}/>) : <NotFound /> 
          } />
        <Route path="search/:query" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>}/>
>>>>>>> Stashed changes
=======
        <Route path="/cats"  element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/dogs" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/computers" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>} />
        <Route path="/" element={loadedData ? (
          <PhotoList imageData={imageData}
            pageTitle={pageChange}/>) : <NotFound /> 
          } />
        <Route path="search/:query" element={<PhotoList imageData={imageData} pageTitle={pageChange}/>}/>
>>>>>>> Stashed changes
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
