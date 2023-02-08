import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#home" className="nav-link"> home </a>
          </li>

          <li>
            <a href="#about" className="nav-link"> about </a>
          </li>

          <li>
            <a href="#services" className="nav-link"> services </a>
          </li>

          <li>
            <a href="#tours" className="nav-link"> tours</a>
          </li>
        </ul>

        <ul className="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>

    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">explore tours</a>
      </div>
    </section>

    <section className="section" id="about">
      <div className="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="./images/about.jpeg"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>

    <section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-2.jpeg" className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-3.jpeg" className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-4.jpeg" className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2019</p>
          </div>
          <div className="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">home</a>
        </li>
        <li>
          <a href="#about" className="footer-link">about</a>
        </li>
        <li>
          <a href="#services" className="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" className="footer-link">featured</a>
        </li>
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
  )
}

export default App
