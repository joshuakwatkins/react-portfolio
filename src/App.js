// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [port, setPort] = useState("initial");
  const handlePortChange = (port) => setPort(port);
  return (
    <div className="App">
      <header>
        <menu>
          <h2 className="logo pt-3">Josh Watkins</h2>
          <nav>
            <ul className="pt-3">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#add-work">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </menu>
      </header>
      <div className="hero-banner">
        <h2>Full Stack Brand Expert</h2>
      </div>
      <div className="container">
        <section id="portfolio">
          <section id="about" className="portfolio-container">
            <div className="side-title col-12 col-md-3">
              <h3>About Me</h3>
            </div>
            <div className="px-3 col-12 col-md-9">
              <figure></figure>
              <p>
                A dynamic, creative, and innovative global marketing and brand
                management professional known for tackling complex challenges
                sideways. I am adept at crafting and executing inspired
                e-commerce campaigns, retail product placement initiatives,
                social media promotions, and marketing blitzes. With expertise
                in product launches, and a vision-driven approach to decision
                making, strategic planning, and tactical implementation I have
                an outstanding ability to generate excitement and drive sales.
                Accomplished in fast-paced environments, with exceptional time
                management and organization skills I consistently meet
                challenging deadlines. Bringing a peaceful, authoritative
                presence I excel in leading and motivating high-performing,
                cohesive teams across diverse populations, able to diffuse
                situations, and reduce conflict. My core competencies include
                SEO and SEM optimized campaigns, online reputation management,
                market analysis, graphic/infographic design, marketing
                collateral creation, photography, and cinematography.
              </p>
            </div>
          </section>
          <section id="add-work" className="portfolio-container">
            <div className="side-title col-12 col-md-3">
              <h3>Portfolio</h3>
              <ul className="portfolio-list">
                <li id="portfolio-init">
                  <a
                    href="#initial"
                    onClick={() => handlePortChange("initial")}
                    className={
                      port === "initial" ? "p-2 bg-danger text-white" : "p2"
                    }
                  >
                    Select Works
                  </a>
                </li>
                <li id="portfolio-app">
                  <a
                    href="#appDev"
                    onClick={() => handlePortChange("appDev")}
                    className={
                      port === "appDev" ? "p-2 bg-danger text-white" : "p2"
                    }
                  >
                    App Dev
                  </a>
                </li>
                <li id="portfolio-media">
                  <a
                    href="#media"
                    onClick={() => handlePortChange("media")}
                    className={
                      port === "media" ? "p-2 bg-danger text-white" : "p2"
                    }
                  >
                    Media
                  </a>
                </li>
                <li id="portfolio-e-com">
                  <a
                    href="#e-com"
                    onClick={() => handlePortChange("e-com")}
                    className={
                      port === "e-com" ? "p-2 bg-danger text-white" : "p2"
                    }
                  >
                    E-Commerce
                  </a>
                </li>
              </ul>
            </div>
            <div class="portfolio-card col-12 col-md-9">
              {port === "e-com" || port === "initial" ? (
                <div id="empireears" className="add-work-card">
                  <a target="blank" href="https://empireears.com">
                    <span className="link-span"></span>
                  </a>
                  <div className="add-work-card-title">
                    <h3>Empire Ears</h3>
                    <p>E-Commerce Build</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "appDev" || port === "initial" ? (
                <div id="halfway-there" className="add-work-card">
                  <a
                    target="blank"
                    href="https://donk1557.github.io/halfway-there/"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="add-work-card-title">
                    <h3>Halfway There</h3>
                    <p>Geographically Optimized Socialization</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "appDev" ? (
                <div id="professionaleyes" className="add-work-card">
                  <a
                    target="blank"
                    href="https://professionaleyes.herokuapp.com/"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="work-card-title">
                    <h3>Professional Eyes</h3>
                    <p>Communication Utility</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "appDev" ? (
                <div id="daily-planner" className="add-work-card">
                  <a
                    target="blank"
                    href="https://joshuakwatkins.github.io/Daily-Planner/"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="work-card-title">
                    <h3>Daily Planner</h3>
                    <p>Productivity App</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "appDev" ? (
                <div id="weather-app" className="add-work-card">
                  <a
                    target="blank"
                    href="https://joshuakwatkins.github.io/weather-dashboard/"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="work-card-title">
                    <h3>Weather Dashboard</h3>
                    <p>Location Based Weather Services</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "appDev" || port === "initial" ? (
                <div id="budget-tracker" className="add-work-card">
                  <a
                    target="blank"
                    href="https://jkw-budget-tracker.herokuapp.com/"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="work-card-title">
                    <h3>Budget Tracker</h3>
                    <p>Financial App with Offline Capabilities</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "appDev" ? (
                <div id="note-taker" className="add-work-card">
                  <a
                    target="blank"
                    href="https://jkw-note-taker.herokuapp.com/"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="work-card-title">
                    <h3>Note Taker</h3>
                    <p>Track Notes and To-Do's</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "media" || port === "initial" || port === "e-com" ? (
                <div id="photography" className="add-work-card">
                  <a target="blank" href="https://joshwatkins.photo">
                    <span className="link-span"></span>
                  </a>
                  <div className="add-work-card-title">
                    <h3>Photography</h3>
                    <p>joshwatkins.photo</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "media" || port === "e-com" ? (
                <div id="emp-vid" className="add-work-card">
                  <a
                    target="blank"
                    href="https://www.youtube.com/watch?v=lhBWEqWH470"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="add-work-card-title">
                    <h3>Production Video</h3>
                    <p>Overview of the Empire Ears Lab</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "media" || port === "initial" ? (
                <div id="video" className="add-work-card">
                  <a
                    target="blank"
                    href="https://www.youtube.com/watch?v=3QNR8WdXDOs"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="add-work-card-title">
                    <h3>Video</h3>
                    <p>Lunch For The Week</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "media" ? (
                <div id="otis" className="add-work-card">
                  <a
                    target="blank"
                    href="https://photos.app.goo.gl/ros2HJSkYMJxqgbG9"
                  >
                    <span className="link-span"></span>
                  </a>
                  <div className="add-work-card-title">
                    <h3>Otis</h3>
                    <p>5 Star Wonderpup</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {port === "media" ? (
                <div id="rickroll" className="add-work-card">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <span className="link-span"></span>
                  </a>
                  <div className="add-work-card-title">
                    <h3>Not A Rickroll</h3>
                    <p>Totally not a rickroll</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </section>
          <section id="contact" className="portfolio-container">
            <div className="side-title col-12 col-md-3">
              <h3>Contact</h3>
            </div>
            <div className="portfolio-card col-12 col-md-9">
              <ul className="contact">
                <li>
                  <span className="iconz">🔗</span>{" "}
                  <a href="https://www.linkedin.com/in/joshua-k-watkins/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <span className="iconz">🖹</span>{" "}
                  <a href="Assets/Resume/Joshua_K_Watkins_Resume.pdf">Resume</a>
                </li>
                <li>
                  <span className="iconz">🖳</span>{" "}
                  <a href="https://github.com/joshuakwatkins">Github</a>
                </li>
                <li>
                  <span className="iconz">📱</span>{" "}
                  <a href="tel:8467371302">846 737 1302</a>
                </li>
                <li>
                  <span className="iconz">✉</span>{" "}
                  <a href="mailto: joshwatkinssfs@gmail.com">Email Me!</a>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
