import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  webservice,
  appservice,
  digitalmarket,
  trendingTech,
  discoverContent,
  designContent,
  designRightContent,
  discoverRightContent,
  backend,
  frontend,
  cms,
  mobile,
  database,
  scaleContent,
} from "../../Data/Navbar";
export const NavServices = ({ serHoverIn, serHoverOut, scroll, productMount }) => {
  const [sidetoggle, setSidetoggle] = useState("Technologies");

  const handleSide = (element) => {
    console.log(element);
    setSidetoggle(element);
  };

  const sideBar = [
    { sidename: "Discover" },
    { sidename: "Design" },
    { sidename: "Technologies" },
    { sidename: "Skills" },
    { sidename: "Scale" },
  ];

  return (
    <div
      onMouseEnter={serHoverIn}
      onMouseLeave={serHoverOut}
      className="solutionVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}

    >
      <div className="sideNav">
        {sideBar.map((item, index) => (
          <div
            key={item.sidename}
            className={sidetoggle === item.sidename ? "active-toggle" : ""}
            onMouseEnter={() => {
              handleSide(item.sidename);
            }}
          >
            <h6>{item.sidename}</h6>
          </div>
        ))}
      </div>
      {sidetoggle === "Technologies" && (
        <div className="dropdownSection">
          <div className="serviceDropdownContent">
            <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              Web Development
            </h5>

            <div className="listItems">
              {webservice.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="serviceDropdownContent">
            <h5
              className="noStyle"
              onClick={() => {
                navigate(`/mobile-app-development`);
                serHoverOut();
              }}
            >
              Mobile App Development
            </h5>

            <div className="listItems">
              {appservice.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="serviceDropdownContent">
            <Link to="Digital-marketing" className="noStyle">
              <h5
                onClick={() => {
                  serHoverOut();
                }}
              >
                Digital Marketing
              </h5>
            </Link>
            <div className="listItems">
              {digitalmarket.map((item, l) => (
                // <Link
                //   to={item.path}
                //   onClick={serHoverOut}
                //   className="servicesP"
                // >
                <div
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  key={l}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
                // </Link>
              ))}
            </div>
          </div>
          <div id="serviceDropContent" className="serviceDropdownContent">
            <Link className="noStyle">
              <h5>Trending Technologies</h5>
            </Link>
            <div className="trendListItems">
              {trendingTech.map((item, m) => (
                <div
                  key={m}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="trendImageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {sidetoggle === "Discover" && (
        <div className="discoverDropdown">
          <div className="discoverleft">
            {/* <div className="discoverlefttop">
              {discoverContent.map((item, index) => (
                <ImageCard
                  key={index}
                  cardContent={item}
                  closeDisplay={serHoverOut}
                />
              ))}
            </div> */}
            <div className="discoverleftbottom">
              <h3>
                Learn more About{" "}
                <span>
                Our services
                  {/* Our services <BsArrowRight /> */}
                </span>
              </h3>
            </div>
          </div>
          <div className="discoverright">
            {discoverRightContent.map((item, index) => (
              <div key={index}>
                {/* <ImageCard cardContent={item} closeDisplay={serHoverOut} /> */}
                <h5 className="knowmore">
                Know More
                  {/* Know More <BsArrowRight /> */}
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
      {sidetoggle === "Design" && (
        <div className="discoverDropdown">
          <div className="discoverleft">
            {/* <div className="discoverlefttop">
              {designContent.map((item, index) => (
                <ImageCard
                  key={index}
                  closeDisplay={serHoverOut}
                  cardContent={item}
                />
              ))}
            </div> */}
            <div className="discoverleftbottom">
              <h3>
                Learn more About{" "}
                <span>
                Our services
                  {/* Our services <BsArrowRight /> */}
                </span>
              </h3>
            </div>
          </div>
          <div className="discoverright">
            {designRightContent.map((item, index) => (
              <div key={index}>
                {/* <ImageCard cardContent={item} closeDisplay={serHoverOut} /> */}
                <h5 className="knowmore">
                Know More
                  {/* Know More <BsArrowRight /> */}
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
      {sidetoggle === "Skills" && (
        <div className="dropdownSection">
          <div className="backendDropdownContent">
            <Link className="noStyle">
              <h5>Backend</h5>
            </Link>
            <div className="backendlistItems">
              {backend.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="backendimageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="skillDropdownContent">
            <Link className="noStyle">
              <h5>Frontend</h5>
            </Link>
            <div className="listItems">
              {frontend.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="skillDropdownContent">
            <Link className="noStyle">
              <h5>Mobile</h5>
            </Link>
            <div className="listItems">
              {mobile.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="skillDropdownContent">
            <Link className="noStyle">
              <h5>DataBase</h5>
            </Link>
            <div className="listItems">
              {database.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="skillDropdownContent">
            <Link className="noStyle">
              <h5>CMS Frameworks</h5>
            </Link>
            <div className="listItems">
              {cms.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {sidetoggle === "Scale" && (
        <div className="discoverDropdown">
          <div className="discoverleft">
            <div className="discoverlefttop">
              {scaleContent.map((item, index) => (
                <image
                  key={index}
                  closeDisplay={serHoverOut}
                  cardContent={item}
                />
              ))}
            </div>
            <div className="discoverleftbottom">
              <h3>
                Learn more About{" "}
                <span>
                Our services
                  {/* Our services <BsArrowRight /> */}
                </span>
              </h3>
            </div>
          </div>
          <div className="discoverright">
            {discoverRightContent.map((item, index) => (
              <div key={index}>
                {/* <ImageCard cardContent={item} closeDisplay={serHoverOut} /> */}
                <h5 className="knowmore">
                  Know More
                  {/* <BsArrowRight />{" "} */}
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
