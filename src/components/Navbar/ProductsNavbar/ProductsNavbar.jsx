import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./productsNavbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { NavServices } from "../NavServices";
import { NavIndustries } from "../NavIndustries";

export const ProductsNavbar = ({ scroll }) => {

  const navigate = useNavigate();
  const [ProductSolution, setProductSolution] = useState(false);
  const [service, setService] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const navredux = useSelector((state) => state.navbar);
  const productMount = useSelector((state) => state.mountNav);



  const skillProductHoverIn = () => {
    // setSkill(true);

    setNabvar(true);
  };

  const skillProductHoverOut = () => {
    setProductSolution(false);

    setSkill(false);
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

  const solHoverIn = () => {
    setProductSolution(true);
    setNabvar(true);
  };

  const solHoverOut = () => {
    setProductSolution(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };



  useEffect(() => {
    // console.log(productMount.navMount);
  }, [productMount]);


  return (
    <div className="products-navbar" style={{ top: scroll ? "0" : "65px", background: scroll ? "white" : "transparent" }}>
      <div className="deskLogo">
        {/* <img src="Images/Logos/supportdesk.png" alt="support desk" /> */}
        <h5>Support Desk</h5>
      </div>

      <div className="deskList">
        <li>
          Desk Products
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt=""
          />
        </li>

        <li>
          Features{" "}
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt=""
          />
        </li>

        <li
          onMouseEnter={skillProductHoverIn}
          onMouseLeave={skillProductHoverOut}
          onClick={() => navigate("/pricing")}
          style={{ color: navbar ? "black" : navredux.color }}
        >
          Pricing
        </li>

        <li
          onMouseEnter={serHoverIn}
          onMouseLeave={serHoverOut}
          style={{ color: navbar ? "black" : navredux.color }}
        >
          Saas
        </li>

        <li
          onMouseEnter={solHoverIn}
          onMouseLeave={solHoverOut}
          style={{ color: navbar ? "black" : navredux.color }}>
          Solutions{" "}
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt="image"
          />
        </li>

        <li>
          Resources{" "}
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt=""
          />
        </li>
        <li>Sign In</li>
        <button>Free Trial</button>
      </div>


      {/* service drop down section code start */}
      {service ? (
        <NavServices
          serHoverIn={serHoverIn}
          serHoverOut={serHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {/* ProductSolutions drop down section code start */}
      {ProductSolution ? (
        <NavIndustries
          solHoverIn={solHoverIn}
          solHoverOut={solHoverOut}
          scroll={scroll}
          productMount={productMount}
        />

      ) : null}
    </div>
  );
};
