import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import useToken from './lib/useToken';
import Navbar from './components/navbar/Navbar';
import Drive from './components/drive/Drive';
import NotFound from './components/misc/NotFound';
import { useLoadScript } from '@react-google-maps/api';
import configData from "./config.json";

const libraries = ['places'];

function App(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: configData.MAPS_API_KEY,
    libraries
  });

  const { token, setToken } = useToken();

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path='/' element={props.is_auth ? <Login /> : (props.is_trip_active ? 'ActiveTrip' : 'TripHistory')} /> */}
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/drive' element={<Drive />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
