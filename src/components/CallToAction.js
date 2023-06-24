import { Link } from "react-router-dom";

export default function CallToAction(){
    return (
      <div className="sep ctaContainer">
        <div>
          <h2>Little Lemon</h2>
          <h4>Chicago</h4>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn btn-warning">
            Reserve a Table
          </Link>
        </div>
        <div>
          <img width="300px" src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/restaurantFood.088c3dd386b046ca6ce7.jpg" alt="reserveTable" />
        </div>
      </div>
    );
}