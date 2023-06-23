import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="heading">
        <h3>Little Lemon - where Traditionality meets Modernity</h3>
      </div>
      <div className="containers">
        <img src="Mario and Adrian A.jpg" alt="chefs" className="img-fluid" />
        <p>
          At Little Lemon, we are proud to be a family-run restaurant nestled in
          the heart of Chicago. Our story began with two brothers who shared a
          passion for culinary arts and a desire to showcase traditional dishes
          with a modern twist. With our commitment to quality and innovation, we
          have created a dining experience that combines the rich flavors of
          traditional cuisine with the creativity of contemporary culinary
          techniques.
          <br />
          <br />
          We believe that dining is not just about nourishment; it is an
          opportunity to embark on a culinary journey. At Little Lemon, we
          invite you to embark on this journey with us. Indulge in the flavors
          of tradition, discover the art of innovation, and allow us to take you
          on a gastronomic adventure like no other. Thank you for choosing
          Little Lemon. We look forward to serving you and sharing our passion
          for culinary excellence with each and every dish we prepare.
          <br />
          <br />
          <Link
            to="/Menu"
            style={{
              marginTop: "20px",
              display: "inline-block",
            }}
          >
            <button
              style={{
                width: "250px",
                height: "50px"
              }}
            >
              Online Menu
            </button>
          </Link>
        </p>
      </div>
    </>
  );
}
