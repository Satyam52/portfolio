import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

function SideDrawer(props) {
  let side = "side-drawer";
  if (props.show) side = "side-drawer open";

  return (
    <nav className={side}>
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
    </nav>
  );
}

export default SideDrawer;
