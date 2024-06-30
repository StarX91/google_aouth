import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const Home = () => {
  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    console.log("Logout successful!");
    navigate('/');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
};

export default Home;
