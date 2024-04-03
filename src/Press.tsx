import React from "react";
import "./Press.css";
import { LuArrowRight } from "react-icons/lu";

const Press = () => {
  return (
    <div>
      <div className="press-text">
        <p className="release">Our Press Release</p>
        <p className="stay">
          Stay updated with our latest offerings, innovations, and team updates.
        </p>
      </div>
      <div className="group">
        <div className="box-1">
          <div className="subbox-1">
            <img src="riffuture-1.jpg" className="une" alt="riffuture" />
            <p>Why Riffutures invest in Abeokuta</p>
            <div className="line-1">
              <a
                href="https://tribuneonlineng.com/riffutures-to-invest-in-abeokuta-create-10000-millionaires-in-2024"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "5px" }}>Read more</span>
                <LuArrowRight style={{ lineHeight: "20px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="subbox-2">
            <img src="ruffuture-2.jpg" className="une-2" alt="riffuture" />
            <p>
              Rif Elite Global Alliance Report: The Future of Wealth Creation
            </p>
            <div className="line-2">
              <a
                href="https://tribuneonlineng.com/riffutures-to-invest-in-abeokuta-create-10000-millionaires-in-2024"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "5px" }}>Read more</span>
                <LuArrowRight style={{ lineHeight: "20px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="box-3">
          <div className="subbox-3">
            <img src="riffuture-1.jpg" className="une-3" alt="riffuture" />
            <p>Why Riffutures invest in Abeokuta</p>
            <div className="line-3">
              <a
                href="https://tribuneonlineng.com/riffutures-to-invest-in-abeokuta-create-10000-millionaires-in-2024"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "5px" }}>Read more</span>
                <LuArrowRight style={{ lineHeight: "20px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
