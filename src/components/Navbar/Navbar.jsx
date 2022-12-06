import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import WhoWeAre from "./WhoWeAre";
import {
  discoverContent,
  discoverRightContent,
  designContent,
  scaleContent,
} from "../../Data/Navbar";
import {
  company,
  whyBottom,
  process,
  webservice,
  appservice,
  digitalmarket,
  trendingTech,
  industries,
  ondemand,
  backend,
  frontend,
  mobile,
  database,
  cms,
} from "../../Data/Navbar";
import { ImageCard } from "../particularComponents/ImageCardText/ImageCard";
import { ContactMain } from "../Contact/Contact";
import zIndex from "@mui/material/styles/zIndex";

import { useSelector } from "react-redux";
import { color } from "@mui/system";
import { useEffect } from "react";

export const NavbarMain = () => {
  const navigate = useNavigate();
  const [aboutH, setAboutH] = useState(false);
  const [solution, setSolution] = useState(false);
  const [service, setService] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [skill, setSkill] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [sidetoggle, setSidetoggle] = useState("Technologies");

  const navredux = useSelector((state) => state.navbar);

  const sideBar = [
    { sidename: "Discover" },
    { sidename: "Design" },
    { sidename: "Technologies" },
    { sidename: "Skills" },
    { sidename: "Scale" },
  ];

  const handleSide = (element) => {
    console.log(element);
    setSidetoggle(element);
  };

  const skillHoverIn = () => {
    setSkill(true);

    setNabvar(true);
  };

  const skillHoverOut = () => {
    setSolution(false);

    setSkill(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const solHoverIn = () => {
    setSolution(true);
    setNabvar(true);
  };

  const solHoverOut = () => {
    setSolution(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const serHoverIn = () => {
    setService(true);
    setNabvar(true);
  };

  const serHoverOut = () => {
    setService(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const homeHoverIn = () => {
    setAboutH(true);
    setNabvar(true);
  };

  const homeHoverOut = () => {
    setAboutH(false);
    if (window.scrollY === 0) {
      setNabvar(false);
    }
  };

  const blogHoverIn = () => {
    setNabvar(true);
  };

  const blogHoverOut = () => {
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const navBackground = () => {
    if (window.scrollY > 1) {
      setNabvar(true);
      setScroll(true);
    } else {
      setNabvar(false);
      setScroll(false);
    }
  };

  window.addEventListener("scroll", navBackground);

  useEffect(() => {
    console.log(navredux);
  }, [navredux]);

  return (
    <div>
      <ContactMain
        bgcolor={navbar ? "white" : "transparent"}
        textcolor={!navbar ? navredux.color : "black"}
      />
      <nav
        className={navbar ? "navbarSection active" : "navbarSection"}
        style={{
          top: scroll ? "0" : "40px",
        }}
      >
        <div className="logoSection">
          <Link to="/" className="logoText">
            <img
              src={
                navredux.logo && !navbar
                  ? "Images/navbar/whitelogobottom.png"
                  : "Images/navbar/blacklogo.png"
              }
              alt=""
            />
          </Link>
        </div>
        <input id="checkbox" type="checkbox" />
        <div id="bar">
          <label htmlFor="checkbox">
            <IconContext.Provider value={{ className: "bars" }}>
              <AiOutlineMenu />
            </IconContext.Provider>
          </label>
        </div>

        <div className="dropdownBar">
          <div>
            <li
              onMouseEnter={homeHoverIn}
              onMouseLeave={homeHoverOut}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              ABOUT
              {aboutH ? <WhoWeAre /> : ""}
            </li>
            <li
              onMouseEnter={solHoverIn}
              onMouseLeave={solHoverOut}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              SERVICES
            </li>
            <li
              onMouseEnter={serHoverIn}
              onMouseLeave={serHoverOut}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              SOLUTIONS
            </li>
            <li
              onMouseEnter={blogHoverIn}
              onMouseLeave={blogHoverOut}
              onClick={() => navigate("/Products")}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              PRODUCTS
            </li>
            <li
              onMouseEnter={skillHoverIn}
              onMouseLeave={skillHoverOut}
              onClick={() => navigate("/pricing")}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              PRICING
            </li>
            <li
              onMouseEnter={blogHoverIn}
              onMouseLeave={blogHoverOut}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              PORTFOLIO
            </li>
            <li
              onMouseEnter={blogHoverIn}
              onMouseLeave={blogHoverOut}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              BLOGS
            </li>
          </div>

          <button className="callToAction">Hire a Talent</button>
          <button className="callToAction">Apply as a Talent</button>
        </div>
      </nav>
      {aboutH ? (
        <div
          onMouseEnter={homeHoverIn}
          onMouseLeave={homeHoverOut}
          className="aboutNavVisible"
          style={{ top: scroll ? "75px" : "110px" }}
        >
          <div className="aboutDropdownSection">
            <div className="aboutDropdownContent">
              <Link className="noStyle">
                <h5>Company</h5>
              </Link>
              <div className="listItems">
                {company.map((item, i) => (
                  <div
                    onClick={() => {
                      navigate(`/${item.path}`);
                      homeHoverOut();
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
                    <Link
                      onClick={homeHoverOut}
                      to={item.path}
                      className="linkP"
                    >
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
                    onClick={() => {
                      navigate(`/${item.path}`);
                      homeHoverOut();
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
                    <Link
                      onClick={homeHoverOut}
                      to={item.path}
                      className="linkP"
                    >
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
                    onClick={() => {
                      navigate(`/${item.path}`);
                      homeHoverOut();
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
                    <Link
                      onClick={homeHoverOut}
                      to={item.path}
                      className="linkP"
                    >
                      <p>{item.dropContent}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {solution ? (
        <div
          onMouseEnter={solHoverIn}
          onMouseLeave={solHoverOut}
          className="solutionVisible"
          style={{ top: scroll ? "75px" : "110px" }}
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
                    solHoverOut();
                  }}
                >
                  Web Development
                </h5>

                <div className="listItems">
                  {webservice.map((item, i) => (
                    <div
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="serviceDropdownContent">
                <Link className="noStyle">
                  <h5>Mobile App Development</h5>
                </Link>
                <div className="listItems">
                  {appservice.map((item, j) => (
                    <div
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                      solHoverOut();
                    }}
                  >
                    Digital Marketing
                  </h5>
                </Link>
                <div className="listItems">
                  {digitalmarket.map((item, l) => (
                    // <Link
                    //   to={item.path}
                    //   onClick={solHoverOut}
                    //   className="servicesP"
                    // >
                    <div
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                <div className="discoverlefttop">
                  {discoverContent.map((item, index) => (
                    <ImageCard
                      key={index}
                      cardContent={item}
                      closeDisplay={solHoverOut}
                    />
                  ))}
                </div>
                <div className="discoverleftbottom">
                  <h3>
                    Learn more About{" "}
                    <span>
                      Our services <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </div>
              <div className="discoverright">
                {discoverRightContent.map((item, index) => (
                  <div key={index}>
                    <ImageCard cardContent={item} closeDisplay={solHoverOut} />
                    <h5 className="knowmore">
                      Know More <BsArrowRight />
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          )}
          {sidetoggle === "Design" && (
            <div className="discoverDropdown">
              <div className="discoverleft">
                <div className="discoverlefttop">
                  {designContent.map((item, index) => (
                    <ImageCard
                      key={index}
                      closeDisplay={solHoverOut}
                      cardContent={item}
                    />
                  ))}
                </div>
                <div className="discoverleftbottom">
                  <h3>
                    Learn more About{" "}
                    <span>
                      Our services <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </div>
              <div className="discoverright">
                {discoverRightContent.map((item, index) => (
                  <div key={index}>
                    <ImageCard cardContent={item} closeDisplay={solHoverOut} />
                    <h5 className="knowmore">
                      Know More <BsArrowRight />
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
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                      onClick={() => {
                        navigate(`/${item.path}`);
                        solHoverOut();
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
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
                    <ImageCard
                      key={index}
                      closeDisplay={solHoverOut}
                      cardContent={item}
                    />
                  ))}
                </div>
                <div className="discoverleftbottom">
                  <h3>
                    Learn more About{" "}
                    <span>
                      Our services <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </div>
              <div className="discoverright">
                {discoverRightContent.map((item, index) => (
                  <div key={index}>
                    <ImageCard cardContent={item} closeDisplay={solHoverOut} />
                    <h5 className="knowmore">
                      Know More
                      <BsArrowRight />{" "}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}

      {service ? (
        <div
          onMouseEnter={serHoverIn}
          onMouseLeave={serHoverOut}
          className="serviceVisible"
          style={{ top: scroll ? "75px" : "110px" }}
        >
          <div className="industryDropdown">
            <div className="industryContent">
              <Link className="noStyle">
                <h5>Industries We Serves</h5>
              </Link>
              <div className="industryListItems">
                {industries.map((item, i) => (
                  <div
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
                    <Link
                      onClick={serHoverOut}
                      to={item.path}
                      className="linkP"
                    >
                      <p>{item.dropContent}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="industryContent">
              <Link className="noStyle">
                <h5>On Demand Solutions</h5>
              </Link>
              <div className="industryListItems">
                {ondemand.map((item, i) => (
                  <div
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
                    <Link
                      onClick={serHoverOut}
                      to={item.path}
                      className="linkP"
                    >
                      <p>{item.dropContent}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* {skill ? (
        <div
          onMouseEnter={skillHoverIn}
          onMouseLeave={skillHoverOut}
          className="skillVisible"
          style={{ top: scroll ? "75px" : "110px" }}
        >

        </div>
      ) : null} */}
    </div>
  );
};
