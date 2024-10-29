import React, { useEffect, useState } from "react";
import "./Home.css";
import myImage from "./pic 3.png";
import { Link } from "react-router-dom";

const Home = () => {
 



  return (
    <>
       <div className="navbar d-flex justify-content-center hcc">
       
        <div className="nav-links-container fs-5 gap-5 d-flex">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </div>
      </div>

      <div className="d-flex mt-5 flex-column align-items-center vh-100">
        <div className="text-center">
          <p className="display-1 hc">Hello!</p>
          <p className="display-1 hc">Sahaj Rajput Here</p>
          <p className="hcc fs-3 mt-3">
            <span>Full Stack Web Developer</span>
          </p>

          <div>
            <img
              src={myImage}
              className="img-fluid mt-5 myPfp w-50 h-25"
              alt="Description"
            />
          </div>

          <div className="footer-section mt-4">
            <div className="mb-3">
              <a
                href="https://www.linkedin.com/in/sahaj-rajput"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
                <span className="ms-2">sahaj rajput</span>
              </a>
            </div>

            <div className="mb-3">
              <a
                href="https://www.instagram.com/developerr_here/"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="instagram-new"
                />
                <span className="ms-2">developerr_here</span>
              </a>
            </div>

            <div className="mb-3">
              <a
                href="https://github.com/sahajj11"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/glyph-neue/64/github.png"
                  alt="instagram-new"
                />
                <span className="ms-2">sahajj11</span>
              </a>
            </div>

            <div className="mb-3">
              <a
                href="mailto:sahajrajput1112@gmail.com"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/gmail-new.png"
                  alt="gmail-new"
                />
                <span className="ms-2">sahajrajput1112@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
