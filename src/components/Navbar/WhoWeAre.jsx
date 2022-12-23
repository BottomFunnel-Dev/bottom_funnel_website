import React from "react";
import "./navbar.css";
import './whoWeAre.css'
import { useNavigate } from "react-router-dom";
import { company, whyBottom, process } from "../../Data/Navbar";
import { Link } from "react-router-dom";
export const WhoWeAre = ({ homeHoverIn, homeHoverOut,scroll }) => {
  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={homeHoverIn}
      onMouseLeave={homeHoverOut}
      className="aboutNavVisible"
      style={{ top: scroll ? "52px" : "83px" }}
    >
      <div className="aboutDropdownSection">
        <div className="aboutDropdownContent">
          <Link className="noStyle">
            <h5>Company</h5>
          </Link>
          <div className="listItems">
            {company.map((item, i) => (
              <div
              key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className="imageIconDivSection"
              >
                <div>
                  <img className="iconDivSection" src={item.navIcons} alt="" />
                </div>
                <Link onClick={homeHoverOut} to={item.path} className="linkP">
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="aboutDropdownContent">
          <Link className="noStyle">
            <h5>Why Bottom Funnel</h5>
          </Link>
          <div className="listItems">
            {whyBottom.map((item, i) => (
              <div
              key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className="imageIconDivSection"
              >
                <div>
                  <img className="iconDivSection" src={item.navIcons} alt="" />
                </div>
                <Link onClick={homeHoverOut} to={item.path} className="linkP">
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="aboutDropdownContent">
          <Link className="noStyle">
            <h5>Our Process</h5>
          </Link>
          <div className="listItems">
            {process.map((item, i) => (
              <div
              key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className="imageIconDivSection"
              >
                <div>
                  <img className="iconDivSection" src={item.navIcons} alt="" />
                </div>
                <Link onClick={homeHoverOut} to={item.path} className="linkP">
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
