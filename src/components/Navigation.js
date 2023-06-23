// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// export default function Navigation() {
//   const [loggedInUsername, setLoggedInUsername] = useState('');

//   // Function to handle successful login and set the logged-in username
//   const handleSuccessfulLogin = (username) => {
//     setLoggedInUsername(username);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           <img
//             src="Asset 16@4x.png"
//             alt="Little lemon"
//             className="img-fluid"
//             height={100}
//             width={300}
//           />
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/"
//                 style={{ fontWeight: 800 }}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/About"
//                 style={{ fontWeight: 800 }}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/Menu"
//                 style={{ fontWeight: 800 }}
//               >
//                 Menu
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/Reservation"
//                 style={{ fontWeight: 800 }}
//               >
//                 Reservation
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/order-online"
//                 style={{ fontWeight: 800 }}
//               >
//                 Order online
//               </NavLink>
//             </li>
//             {loggedInUsername ? (
//               <li className="nav-item">
//                 <span className="nav-link" style={{ fontWeight: 800 }}>
//                   {loggedInUsername}
//                 </span>
//               </li>
//             ) : (
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link"
//                   to="/Login"
//                   style={{ fontWeight: 800 }}
//                 >
//                   Login
//                 </NavLink>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const loggedInUsername = location.state?.loggedInUsername;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="Asset 16@4x.png"
            alt="Little lemon"
            className="img-fluid"
            height={100}
            width={300}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={{ fontWeight: 800 }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/About"
                style={{ fontWeight: 800 }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Menu"
                style={{ fontWeight: 800 }}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Reservation"
                style={{ fontWeight: 800 }}
              >
                Reservation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/order-online"
                style={{ fontWeight: 800 }}
              >
                Order online
              </NavLink>
            </li>
            {loggedInUsername ? (
              <li className="nav-item">
                <span className="nav-link" style={{ fontWeight: 800 }}>
                  Welcome, {loggedInUsername}!
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Login"
                  style={{ fontWeight: 800 }}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
