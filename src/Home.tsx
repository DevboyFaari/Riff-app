import "./Home.css";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="rectangle">
      <div className="parent">
        <div className="shield">
          <img src="Rif-dark.png" alt="badge" />
        </div>
      </div>
      <div className="message">
        <FaEnvelope className="envelope" />
      </div>
      <p>Hello@riffutures.com</p>
      <div className="message two">
        <FaWhatsapp className="whatsapp" />
      </div>
      <p className="phone-no">+234 905 640 5260</p>

      <div className="message three">
        <BsFileEarmarkArrowUpFill className="arrow" />
      </div>
      <p>Dashboard</p>

      <div className="message four">
        <BsFillPersonPlusFill className="person" />
      </div>
      <p>Register</p>
    </div>
  );
};

export default Home;
