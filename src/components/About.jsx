import React from "react";
import "./About.css";
import { useNavigate } from "react-router";

const About = () => {
  const navigate=useNavigate()
 
  return (
    <>
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
      <div>
        <h3 className="text-center mt-3">About Me</h3>

        <p className="fs-5 text-center mt-3 p-3">
          Hi, I'm Sahaj Rajput, a full-stack developer with a focus on the MERN
          stack. I develop user-friendly, efficient web applications.
        </p>

        <div className="skills mt-3 p-3">
          <h3>-Skills and Interests</h3>
          <div class="icon-container d-flex justify-content-center flex-wrap">
            <img
              class="m-2"
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/javascript--v1.png"
              alt="javascript--v1"
            />
            <img
              class="m-2"
              width="64"
              height="64"
              src="https://img.icons8.com/arcade/64/html-5.png"
              alt="html-5"
            />
            <img
              class="m-2"
              width="64"
              height="64"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-css-computer-science-flaticons-lineal-color-flat-icons.png"
              alt="external-css-computer-science-flaticons-lineal-color-flat-icons"
            />
            <img
              class="m-2"
              width="80"
              height="80"
              src="https://img.icons8.com/officel/80/react.png"
              alt="react"
            />
            <img
              class="m-2"
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/nodejs.png"
              alt="nodejs"
            />
            <img
              class="m-2"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/bootstrap.png"
              alt="bootstrap"
            />
            <img
              class="m-2"
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/mongo-db.png"
              alt="mongo-db"
            />
          </div>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDb</li>
            <li>
              {" "}
              <li>Web Development, AI, and Software Engineering</li>
            </li>
          </ul>
        </div>

        <div className="else p-3">
          <h3>-Else than Coding</h3>
          <p className="fs-6 mt-3">
            When I'm not coding , I enjoy playing sports , especially cricket .
            I also like to relax and explore my passion for video editing .
          </p>
        </div>

        <div className="end text-center">
          <p>
            Feel free to contact on{" "}
            <a href="https://www.linkedin.com/in/sahaj-rajput">Linkedln</a>
          </p>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default About;
