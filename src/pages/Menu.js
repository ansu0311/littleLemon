import React,{useEffect} from "react";
import "./menubutton.css";
import Specials from "../components/Specials";
import soups from "../components/soups";
import appetizers from "../components/appetizers";
import mainCourses from "../components/maincourse";
import desserts from "../components/desserts";
export default function Menu() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
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
      <div>
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
      </div>
      {/* In-page sections */}
      <h2 id="menus"> Soups</h2>
      <div id="soups" className="menu-section">
        {/* Content for Soups section */}
        {soups.map((special) => (
          <Specials
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
      <h2 id="menus">Appetizers</h2>
      <div id="appetizers" className="menu-section">
        {/* Content for Appetizers section */}
        {appetizers.map((special) => (
          <Specials
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
      <h2 id="menus">Main course</h2>
      <div id="main-course" className="menu-section">
        {/* Content for Main Course section */}
        {mainCourses.map((special) => (
          <Specials
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
      <h2 id="menus">Desserts</h2>
      <div id="desserts" className="menu-section">
        {/* Content for Desserts section */}
        {desserts.map((special) => (
          <Specials
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
    </>
  );
}
