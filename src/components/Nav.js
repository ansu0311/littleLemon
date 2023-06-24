import {Link} from "react-router-dom";

export default function Nav(){
    return (
      <nav>
        <Link to="/">
          <img
            src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png"
            width="200px"
            alt="..."
          ></img>
        </Link>
        <ul className="blockquote">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservation</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
        </ul>
      </nav>
    );
}