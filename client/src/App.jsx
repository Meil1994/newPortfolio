import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './assets/logo.png'

const App = () => {
  const faviconUrl = logo;

  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={faviconUrl} />
      </Helmet>
      <ToastContainer />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
