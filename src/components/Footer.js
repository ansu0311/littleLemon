import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img src="Asset 18@4x.png" alt="Logo" className="img-fluid" />
          </div>
          <div className="col-lg-4">
            <h5>Follow Us on</h5>
            <ul className="social-media-links" style={{ listStyle: 'none' }}>
              <li>
                <a href="instagram.com" style={{ fontWeight: 'bold', color: 'black' }}> Instagram-@LittleLemon</a>
              </li>
              <li>
                <a href="facebook.com" style={{ fontWeight: 'bold', color: 'black' }}>Facebook-@LittleLemon</a>
              </li>
              <li>
                <a href="youtube.com" style={{ fontWeight: 'bold', color: 'black' }}>Youtube-@LittleLemon</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contact Info</h5>
            <p><b>Email:</b> LittleLemon@example.com</p>
            <p><b>Phone:</b> 123-456-7890</p>
            <p><b>Address:</b> 123 Street, City, Chicago</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
