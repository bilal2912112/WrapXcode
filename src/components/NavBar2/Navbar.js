import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleImage from "./Assets/Asset-1.png";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [productdropdown, productsetDropdown] = useState(false);
  const [resourcedropdown, resourcesetDropdown] = useState(false);
  return (
    <>
      {/* below the actual nav */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo mb-5">
          <img src={TitleImage} width="200px" />
        </Link>

        <ul className="nav-items mb-5">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            } else if (item.title === "Products") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => productsetDropdown(true)}
                  onMouseLeave={() => productsetDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {productdropdown && <Dropdown />}
                </li>
              );
            } else if (item.title === "Resources") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => resourcesetDropdown(true)}
                  onMouseLeave={() => resourcesetDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {resourcedropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
