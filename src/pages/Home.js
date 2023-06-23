import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import testimonialsData from "../components/Testimony";
import specialsData from "../components/Specialsdata";

function Home() {
  useEffect(() => {
    const myButton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        ⬆
      </button>
      <div className="main">
        <main>
          <div className="container">
            <div className="empty1"></div>
            <div className="col-6-lg col-12" id="titles">
              <h2>Little Lemon</h2>
              <h4>Chicago</h4>
              <p>
                Little Lemon Restaurant, a family run <br />
                Mediterranean restaurant located in <br /> Chicago, Illinois.
                Please come and enjoy <br />
                our wide selection of authentic <br />
                Mediterranean cuisine!
              </p>
              <Link to="/Reservation">
                <button id="res">Reserve a table</button>
              </Link>
            </div>
            <div className="col-6-lg col-12" id="image">
              <img
                src="restaurant chef B.jpg"
                alt="Chef img"
                className="img-fluid"
              />
            </div>
            <div className="empty2"></div>
          </div>
        </main>
      </div>
      <div className="specials">
        <h3>This weeks specials!</h3>
        <Link to="/Menu">
          <button>Online Menu</button>
        </Link>
      </div>
      <div className="spe">
        {/* to add more specials or edit the data go to specialsdata.js in components */}
        {specialsData.map((special) => (
          <Specials
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
      <h2 id="testi">Testimonials</h2>
      <div className="testimonials">
        {/* to add more testimonials go to testimony.js in components and add as an object */}
        {testimonialsData.map((testimonial) => (
          <Testimonials
            key={testimonial.id}
            profile={testimonial.profile}
            name={testimonial.name}
            rating={testimonial.rating}
            review={testimonial.review}
          />
        ))}
      </div>
      <div className="about">
        <div className="empty1"></div>
        <div className="col-6-lg col-12" id="titles2">
          <h2>Little Lemon</h2>
          <h4>Chicago</h4>
          <p>
            Little Lemon Restaurant, a family run <br />
            Mediterranean restaurant located in <br /> Chicago, Illinois. Please
            come and enjoy <br />
            our wide selection of authentic <br />
            Mediterranean cuisine!
          </p>
        </div>
        <div className="col-6-lg col-12" id="image2">
          <img
            src="Mario and Adrian A.jpg"
            alt="Chef img"
            className="img-fluid"
          />
        </div>
        <div className="empty2"></div>
      </div>
    </>
  );
}

export default Home;
