import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Soupsonline from "./soupsonline";
import Appetizersonline from "./Appetizersonline";
import Maincourseonline from "./maincourseonline";
import Dessertonline from "./dessertonline";
import "./orderonline.css"; // Import the CSS file for styling

export default function OrderOnline() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [outputValue, setOutputValue] = useState(0);

  useEffect(() => {
    const myButton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
      <div className="order-container">
        <button
          className="menu-button"
          onClick={() => scrollToSection("soups")}
        >
          Soups
        </button>
        <button
          className="menu-button"
          onClick={() => scrollToSection("appetizers")}
        >
          Appetizers
        </button>
        <button
          className="menu-button"
          onClick={() => scrollToSection("main-course")}
        >
          Main Course
        </button>
        <button
          className="menu-button"
          onClick={() => scrollToSection("desserts")}
        >
          Desserts
        </button>
        <div className="basket-container">
          <img
            src="Basket.svg"
            alt="basket"
            className="basket-icon"
            width={15}
            height={35}
          />
          <output className="basket-output box-with-border">
            {outputValue}
          </output>
          <Link to="/checkout" className="checkout-link">
            <button className="checkout-button">Checkout</button>
          </Link>
        </div>
      </div>
      <Soupsonline setOutputValue={setOutputValue} outputValue={outputValue} />
      <Appetizersonline
        setOutputValue={setOutputValue}
        outputValue={outputValue}
      />
      <Maincourseonline
        setOutputValue={setOutputValue}
        outputValue={outputValue}
      />
      <Dessertonline
        setOutputValue={setOutputValue}
        outputValue={outputValue}
      />
    </>
  );
}
