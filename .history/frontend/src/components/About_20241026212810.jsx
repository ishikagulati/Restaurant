/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <Navbar/>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to KC Restaurant, where we bring you an unforgettable dining experience rooted in passion, flavor, and hospitality. Nestled in the heart of Delhi, our restaurant is dedicated to serving dishes crafted from fresh, locally-sourced ingredients and inspired by the rich culinary traditions of [Cuisine Type, e.g., Italian, Japanese, Fusion].

We strive to create an inviting ambiance where guests can relax, celebrate, and connect over food. Our menu showcases an array of signature dishes—from classic favorites to modern interpretations—all prepared with meticulous care and attention to detail.

At KC Restaurant, we believe that a great meal is more than just food; it’s about creating memories. Join us for lunch, dinner, or a private event, and let us share our passion for delicious cuisine and exceptional service with you.

We look forward to welcoming you soon!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;
