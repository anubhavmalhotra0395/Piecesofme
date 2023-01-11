
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Items from './components/Items';
import { ShopContextProvider } from './components/ShopContext';
import Cart from './components/Cart';

function App() {
  return (
   <>
   <ShopContextProvider >
   <Router >
   <Navbar />
   <Routes>
      <Route path='/' exact element={<Home />} />  
      <Route path='/items' exact element={<Items />} />  
      <Route path='/cart' exact element={<Cart />} />  

    </Routes>
   </Router>
   </ShopContextProvider>
   </>
  );
}

export default App;
