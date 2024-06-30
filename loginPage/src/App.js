import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import starx91 from './assets/starx91.png';

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const App = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email"
      }).then(() => {
        console.log('GAPI client initialized');
      }).catch(error => {
        console.error('Error initializing GAPI client:', error);
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  return (
    <Router>
      <div className='bg-black min-[320px]:h-full sm:w-full sm:h-screen lg:h-screen lg:w-full'>
        <div className='flex justify-center content-center pt-4 '>
          <img src={starx91} className='w-28 h-8 px-5 bg-white rounded-full'/>
        </div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
