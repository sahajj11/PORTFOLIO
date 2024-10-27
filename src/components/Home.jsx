import React, { useState } from "react";
import "./Home.css";
import myImage from "./pic 3.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className="navbar d-flex justify-content-center fs-4 gap-4 hcc">
        <Link to="/" style={{ textDecoration: 'none',color:'#333333' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none',color:'#333333' }}>About</Link>
        <Link to="/projects" style={{ textDecoration: 'none',color:'#333333' }}>Projects</Link>
        <Link to="/resume" style={{ textDecoration: 'none',color:'#333333' }}>Resume</Link>
      </div>

      <div className="d-flex mt-5 justify-content-center vh-100">
        <div className="text-center">
          <p className="display-1 hc">Hello!</p>
          <p className="display-1 hc">Sahaj Rajput Here</p>
          <p className="hcc fs-3 mt-3">Full Stack Web Developer </p>

          {/* <label className="theme-switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label> */}

          <div>
            <img
              src={myImage}
              className="img-fluid mt-5 myPfp w-50 h-25"
              alt="Description"
            />
          </div>

          <div className="d-flex flex-column align-items-start ms-5 mt-5">
            <div className="d-flex justify-content-center align-items-center mb-3">
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

            <div className="d-flex flex-coloumn align-items-start mb-3">
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

            <div className="d-flex justify-content-center align-items-center mb-3">
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
                <span className="ms-2">
                sahajj11</span>
              </a>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
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
