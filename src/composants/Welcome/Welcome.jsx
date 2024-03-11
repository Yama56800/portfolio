import React, { useEffect } from "react";
import logo from "../../logo-trans.webp";
import git from "../../images/icon/icons8-github.svg";
import link from "../../images/icon/icons8-linkedin.svg";
import mail from "../../images/icon/email-icon.svg";

const FloatingBalls = () => {
  useEffect(() => {
    const moveBalls = () => {
      const balls = document.querySelectorAll(".ballpink");
      const balls2 = document.querySelectorAll(".ballgreen");
      balls.forEach((ball) => {
        const x = Math.random() * (window.innerWidth - 30);
        const y = Math.random() * (window.innerHeight - 30);
        ball.style.transform = `translate(${x}px, ${y}px)`;
      });
      balls2.forEach((ball) => {
        const x = Math.random() * (window.innerWidth - 90);
        const y = Math.random() * (window.innerHeight - 90);
        ball.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    moveBalls();
    const interval = setInterval(moveBalls, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="balls-container">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="ballpink"></div>
      ))}
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="ballgreen"></div>
      ))}
      <div className="bg">
        <div className="welcome-content">
          <i className="welcome-logo">
            <img src={logo} alt="logo" />
          </i>
          <div className="welcome-title">
            <h1 className="welcome-h1">Thomas Mahias</h1>
            <h2 className="welcome-h2">
              Développeur front-end <br />
              et artiste numerique{" "}
            </h2>
          </div>
          <div className="welcome-link">
            <div className="link-list">
              <a href="https://github.com/Yama56800">
                <i>
                  {" "}
                  <img src={git} alt="logo git" />
                </i>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/thomas-mahias-350a23212/">
                <i>
                  {" "}
                  <img src={link} alt="logo linkedin" />
                </i>
                Linkedin
              </a>
              <a href="mailto:thomas.mahias.bzh@gmail.com">
                <i>
                  {" "}
                  <img src={mail} alt="logo mail" />
                </i>
                thomas.mahias.bzh@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBalls;
