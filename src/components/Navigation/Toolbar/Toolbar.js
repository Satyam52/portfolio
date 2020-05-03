import React from "react";
import "./Toolbar.css";
import { Avatar } from "@material-ui/core";
import Hamburger from "../Hamburger/Hamburger";
import Img from "../icon1.png";
import { Link } from "react-router-dom";

function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle_toolbar_button">
          <Hamburger click={props.SideToggle} />
        </div>
        <Link to="/" className="toolbar_logo">
          <Avatar alt="Abhishek" src={Img} />
        </Link>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>

            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
