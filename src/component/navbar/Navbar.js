import React from "react";
import { NavLink } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      {/* <nav className={NavbarCSS.navHero}> */}
      {/* navbar  */}
      <nav className={NavbarCSS.navbar}>
        <div className={NavbarCSS.navbarItems + " " + NavbarCSS.logo}>
          Books' Reviews
        </div>
        <div className={NavbarCSS.navbarItems}>
          <ul>
            <li>
              <NavLink to="/" className={NavbarCSS.linkStyles}>
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/reviews" className={NavbarCSS.linkStyles}>
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/authors" className={NavbarCSS.linkStyles}>
                Authors
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className={NavbarCSS.linkStyles}>
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;