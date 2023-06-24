import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="sep">
            <div>
                <img width="250px" src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg" alt="logo" />
            </div>

            {/* navigation sections */}
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                </ul>
            </div>

            {/* contact sections */}
            <div>
                <h3>Contact</h3>
                <ul>
                    <li><Link to="/">Phone Number</Link></li>
                    <li><Link to="/">Email</Link></li>
                    <li><Link to="/">Address</Link></li>
                </ul>
            </div>

            {/* social media sections */}
            <div>
                <h3>Social Media</h3>
                <ul>
                    <li><Link to="/">Instagram</Link></li>
                    <li><Link to="/">LinkedIn</Link></li>
                    <li><Link to="/">Pinterest</Link></li>
                </ul>
            </div>
        </footer>
    )
}