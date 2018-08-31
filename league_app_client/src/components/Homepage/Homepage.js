import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => (
  <div className="home-container flex-column-center">
    <div className="home-content">
      <h1>Welcome to BOWLeagues</h1>
      <Link to="/login">
        <button className="btn btn-info">Login</button>
      </Link>
      <Link to="/register">
        <button className="btn btn-info">Register</button>
      </Link>
    </div>
  </div>
);

export default Homepage;
