import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import About from './pages/About';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Checkout from './components/checkout';
import Ontheway from './components/Ontheway';
import Welcome from './pages/welcome';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Ontheway" element={<Ontheway/>} />
        <Route path='/Welcome' element={<Welcome/>}/>
        {/* Add other routes here */}
        {/* Make sure to specify the correct component for each route */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
