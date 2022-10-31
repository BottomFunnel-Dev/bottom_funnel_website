import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import WhoWeAre from "./WhoWeAre";
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

export const NavbarMain = () => {
  const navigate = useNavigate();
  const [aboutH, setAboutH] = useState(false);
  const [solution, setSolution] = useState(false);
  const [service, setService] = useState(false);
  const [handleCat, setHandleCat] = useState(true);
  const [skill, setSkill] = useState(false);
  const [navbar, setNabvar] = useState(false);

  const skillHoverIn = () => {
    setSkill(true);
    setNabvar(true);
  };

  const skillHoverOut = () => {
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
    // setAboutH(true);
    setNabvar(true);
  };

  const blogHoverOut = () => {
    // setAboutH(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const navBackground = () => {
    if (window.scrollY > 1) {
      setNabvar(true);
    } else {
      setNabvar(false);
    }
  };

  window.addEventListener("scroll", navBackground);

  return (
    <div>
      <nav className={navbar ? "navbarSection active" : "navbarSection"}>
        <div className="logoSection">
          <Link to="/" className="logoText">
            <img
              src={
                navbar
                  ? "Images/navbar/orangelogobottom.png"
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
            <li onMouseEnter={homeHoverIn} onMouseLeave={homeHoverOut}>
              ABOUT
              {aboutH ? <WhoWeAre /> : ""}
            </li>
            <li onMouseEnter={solHoverIn} onMouseLeave={solHoverOut}>
              SERVICES
            </li>
            <li onMouseEnter={serHoverIn} onMouseLeave={serHoverOut}>
              SOLUTIONS
            </li>
            <li onMouseEnter={skillHoverIn} onMouseLeave={skillHoverOut}>
              SKILLS
            </li>
            <li
              onMouseEnter={blogHoverIn}
              onMouseLeave={blogHoverOut}
              onClick={() => navigate("/Products")}
            >
              PRODUCTS
            </li>
            <li onMouseEnter={blogHoverIn} onMouseLeave={blogHoverOut}>
              PORTFOLIO
            </li>
            <li onMouseEnter={blogHoverIn} onMouseLeave={blogHoverOut}>
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
        >
          <div className="dropdownSection">
            <div className="serviceDropdownContent">
              <Link className="noStyle">
                <h5>Web Development</h5>
              </Link>
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
              <Link to="digitalmarketing" className="noStyle">
                <h5>Digital Marketing</h5>
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
        </div>
      ) : null}
      {service ? (
        <div
          onMouseEnter={serHoverIn}
          onMouseLeave={serHoverOut}
          className="serviceVisible"
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
      {skill ? (
        <div
          onMouseEnter={skillHoverIn}
          onMouseLeave={skillHoverOut}
          className="skillVisible"
        >
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
                      skillHoverOut();
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
                      onClick={skillHoverOut}
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
                      skillHoverOut();
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
                      onClick={skillHoverOut}
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
                      skillHoverOut();
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
                      onClick={skillHoverOut}
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
                      skillHoverOut();
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
                      onClick={skillHoverOut}
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
                      skillHoverOut();
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
                      onClick={skillHoverOut}
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
      ,
    </div>
  );
};
