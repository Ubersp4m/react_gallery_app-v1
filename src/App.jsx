import { Route, Routes } from 'react-router-dom';
import './App.css'
import './index.css'
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
      <Routes>
        <Route path="/cats" element={<PhotoList />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        <Route path="/" element={<PhotoList />} />
        <Route path="/search/:query" element={<PhotoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
