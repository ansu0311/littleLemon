import React from 'react';
import { Link } from 'react-router-dom';

export default function Ontheway() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='https://www.shutterstock.com/image-vector/received-rubber-stamp-vector-old-260nw-526479394.jpg' alt='payment received' style={{ width: '300px' }} />
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 700, fontFamily: 'Karla' }}>Your food is on its way......</h1>
        <Link to="/" className="btn">Go Back to Home</Link>
      </div>
    </>
  );
}
