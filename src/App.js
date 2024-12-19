import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUS';
import TextBlocks from './pages/Offers';

function App() {
  return (
    <div className="App" >
      <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/about' element={< About/>} />
      <Route path='/products' element={< Products/>} />
      <Route path='/gallery' element={< Gallery/>} />
      <Route path='/contactus' element={< ContactUs/>} />
      <Route path='/offers' element={< TextBlocks/>} />
      </Routes>
    </div>
  );
}

export default App;
