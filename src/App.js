import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './pages/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Thankyou from './pages/Thankyou/Thankyou';

function App() {
  const location = useLocation();
  const [checkLocation, setCheckLocation] = useState(true);
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setCheckLocation(false);
    } else {
      setCheckLocation(true);
    }
  }, [location.pathname])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout/:serviceId" element={<RequireAuth>
          <Checkout />
        </RequireAuth>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {checkLocation && (
        <Footer />
      )}
      <ToastContainer/>
    </div>
  );
}

export default App;
