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
