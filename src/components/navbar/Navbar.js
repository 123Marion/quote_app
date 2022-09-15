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
          Quotes
        </div>
        <div className={NavbarCSS.navbarItems}>
          <ul>
            <li>
              <NavLink to="/" className={NavbarCSS.linkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-quote" className={NavbarCSS.linkStyles}>
                Add Quote
              </NavLink>
            </li>
            <li>
              <NavLink to="/authors" className={NavbarCSS.linkStyles}>
                Authors
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
