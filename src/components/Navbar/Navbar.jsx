import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { WhoWeAre } from "./WhoWeAre";

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

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NavServices } from "./NavServices";
import { NavIndustries } from "./NavIndustries";
import { Products } from "./Products";
import { ProductsNavbar } from "./ProductsNavbar/ProductsNavbar";

export const NavbarMain = () => {
  const navigate = useNavigate();
  const [aboutH, setAboutH] = useState(false);
  const [solution, setSolution] = useState(false);
  const [service, setService] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [product, setProduct] = useState(false);
  const [navbar, setNabvar] = useState(false);

  const navredux = useSelector((state) => state.navbar);
  const productMount = useSelector((state) => state.mountNav);

  // console.log(productMount)

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
  const productHoverIn = () => {
    setProduct(true);
    setNabvar(true);
  };

  const productHoverOut = () => {
    setProduct(false);
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
    console.log(productMount.navMount);
  }, [productMount]);


  return (
    <div>
     {!productMount.navMount && <ContactMain
        bgcolor={navbar ? "white" : "transparent"}
        textcolor={!navbar ? navredux.color : "black"}
      />}

      {productMount.navMount && <ProductsNavbar scroll={scroll}/>}

      <nav
        className={navbar ? "navbarSection active" : "navbarSection"}
        style={{
          top: scroll || productMount.navMount ? "0" : "30px",
          position: scroll && productMount.navMount ? "static": "fixed"
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
              alt="image"
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
            </li>

            <li
              onMouseEnter={serHoverIn}
              onMouseLeave={serHoverOut}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              SERVICES
            </li>

            <li
              onMouseEnter={solHoverIn}
              onMouseLeave={solHoverOut}
              style={{ color: navbar ? "black" : navredux.color }}
            >
              SOLUTIONS
            </li>

            <li
              onMouseEnter={productHoverIn}
              onMouseLeave={productHoverOut}
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

          <button
            className="callToAction"
            onClick={() => navigate("/hire-new-talent")}
          >
            Hire a Talent
          </button>
          <button
            className="callToAction"
            onClick={() => navigate("/Apply-new-talent")}
          >
            Apply as a Talent
          </button>
        </div>
      </nav>

      {/* about drop down section code start */}
      {aboutH ? (
        <WhoWeAre
          homeHoverIn={homeHoverIn}
          homeHoverOut={homeHoverOut}
          scroll={scroll}
          productMount={productMount}
          
        />
      ) : null}
      {/* about drop down section code end */}

      {/* service drop down section code start */}
      {service ? (
        <NavServices
          serHoverIn={serHoverIn}
          serHoverOut={serHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {/* service drop down section code end */}

      {/* solutions drop down section code start */}
      {solution ? (
        <NavIndustries
          solHoverIn={solHoverIn}
          solHoverOut={solHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}
      {/* {product ? (
        <Products productHoverIn={productHoverIn}  productHoverOut={productHoverOut} scroll={scroll}/>
      ) : null} */}

            {/* product drop down section code start */}
            {product ? (
        <Products
          serHoverIn={serHoverIn}
          serHoverOut={serHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      
    </div>
  );
};
