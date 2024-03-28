import "./Frame.css";
import { LuMonitorCheck } from "react-icons/lu";

const Frame = () => {
  return (
    <div>
      <div className="frame">
        <div className="ellipse">
          <div className="computer-icon">
            <LuMonitorCheck
              style={{ height: 100, width: 100, color: "#DFB141" }}
            />
          </div>
        </div>
        <span>Thank you reach out to us our teams we get back you!</span>
        <button className="get-button">Go back to Home</button>
      </div>
    </div>
  );
};

export default Frame;
