import React from 'react';
import './welcome.css'
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
    <div className="container5">
         <img src='https://st4.depositphotos.com/2288675/20045/i/600/depositphotos_200459642-stock-photo-restaurant-reserved-table-sign-places.jpg' alt='reserved' id='reserved' />
    </div>
    <div className="homeb">
        <Link to="/" className="btn">Go Back to Home</Link>
    </div>
    </>
    );
}
