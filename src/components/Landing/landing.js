import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <section className="intro">
      <div className="inner">
        <div className="content">
          <h1>Welcome </h1>
          <Link to="/resume" className="btn">
            View My Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default landing;
