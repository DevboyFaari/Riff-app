import "./Navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="home">Home</p>
      <p className="about">About Us</p>
      <div className="icon-1">
        <MdKeyboardArrowDown
          style={{
            width: 30,
            height: "34px",
            top: "8.5px",
            left: "25px",
          }}
        />
      </div>
      <p className="services">Services</p>
      <div className="icon-2">
        <MdKeyboardArrowDown
          style={{
            width: 30,
            height: "34px",
            top: "8.5px",
            left: "25px",
          }}
        />
      </div>
      <p className="portfolio">Portfolio</p>
      <div className="icon-3">
        <MdKeyboardArrowDown
          style={{
            width: 30,
            height: "34px",
            top: "8.5px",
            left: "25px",
          }}
        />
      </div>
      <p className="developers">Developers</p>
      <div className="icon-4">
        <MdKeyboardArrowDown
          style={{
            width: 30,
            height: "34px",
            top: "8.5px",
            left: "25px",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
