import "./Home.css";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="rectangle">
        <div className="parent">
          <div className="shield">
            <img src="Rif-dark.png" alt="badge" />
            <div className="gradient-overlay"></div>
          </div>
        </div>
        <div className="message">
          <FaEnvelope
            style={{
              color: "#DFB141",
              width: 15,
              height: 15,
              marginTop: 7,
            }}
          />
        </div>
        <p>Hello@riffutures.com</p>
        <div className="message two">
          <FaWhatsapp
            style={{
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: 10,
              width: 15,
              height: 15,
              marginTop: 7,
            }}
          />
        </div>
        <p>+234 905 640 5260</p>

        <div className="message three">
          <BsFileEarmarkArrowUpFill
            style={{
              color: "#DFB141",
              width: 15,
              height: 15,
              marginTop: 7,
            }}
          />
        </div>
        <p>Dashboard</p>

        <div className="message four">
          <BsFillPersonPlusFill
            style={{
              color: "#DFB141",
              width: 15,
              height: 15,
              marginTop: 7,
            }}
          />
        </div>
        <p>Register</p>
      </div>
    </div>
  );
};

export default Home;
