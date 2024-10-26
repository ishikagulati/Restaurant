import  { useState } from "react";
//import { data } from "../restApi.json";
import { NavLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">KC RESTAURANT</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {/* {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))} */}
             <NavLink 
          to="/" 
          className="nav-link" 
          activeClassName="active"
          exact
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className="nav-link" 
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink 
          to="/team" 
          className="nav-link" 
          activeClassName="active"
        >
          Team
        </NavLink>
        <NavLink 
          to="/reservation" 
          className="nav-link" 
          activeClassName="active"
        >
          Reservation
        </NavLink>
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
