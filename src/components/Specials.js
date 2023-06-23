import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

export default function Specials(props) {
  return (
    <div>
      <div className="container" id="inspec">
        <div className="row">
          <img src={props.image} alt={props.title} className="img-fluid" width={50} />
        </div>
        <div className="row">
          <h3>{props.title}</h3>
          <h3 style={{ color: '#F42F14' }}>{props.price}</h3>
        </div>
        <div className="row">
          <p>{props.description}</p>
        </div>
        <div className="row" id="button">
          <Link
            to="/order-online"
            style={{
              color: 'black',
              fontSize: '30px',
              fontWeight: 500,
              textDecoration: 'none', // Remove underline
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 10
            }}
          >
            <h4>
              <span className="hover-text">Order Now......➡</span>
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
