import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SalesNavbar.css";
import { useSelector } from "react-redux";
import { SalesProduct } from "./SalesProduct";
import { SalesFeature } from "./SalesFeature";
import { SalesResources } from "./SalesResources";
import { SalesIndustries } from "./SalesIndustries";

export const SalesNavbar = ({ scroll }) => {
  const navigate = useNavigate();
  const [ProductSolution, setProductSolution] = useState(false);
  const [productfeature, setproductFeature] = useState(false);
  const [productresource, setproductResource] = useState(false);
  const [productdesk, setproductDesk] = useState(false);
  const [productnavbar, setproductNabvar] = useState(false);
  const navproductredux = useSelector((state) => state);

  const skillProductHoverIn = () => {
    setproductNabvar(true);
  };
  console.log(navproductredux)
  const skillProductHoverOut = () => {
    setProductSolution(false);

    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const serHoverIn = () => {
    setproductService(true);
    setproductNabvar(true);
  };

  const serHoverOut = () => {
    setproductService(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const solHoverIn = () => {
    setProductSolution(true);
    setproductNabvar(true);
  };

  const solHoverOut = () => {
    setProductSolution(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const solResIn = () => {
    setproductResource(true);
    setproductNabvar(true);
  };

  const solResOut = () => {
    setproductResource(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const saleProIn = () => {
    setproductDesk(true);
    setproductNabvar(true);
  };

  const saleProOut = () => {
    setproductDesk(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };
  const saleFeaIn = () => {
    setproductFeature(true);
    setproductNabvar(true);
  };

  const saleFeaOut = () => {
    setproductFeature(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  return (
    <div
      className="products-navbar"
      style={{
        top: scroll ? "0" : "65px",
        background: scroll ? "white" : "transparent",
      }}
    >
      <div className="deskLogo">
        <h5>Sales</h5>
      </div>
      <div className="deskList">
        <li
          onMouseEnter={saleProIn}
          onMouseLeave={saleProOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Products
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt=""
          />
        </li>

        <li
          onMouseEnter={saleFeaIn}
          onMouseLeave={saleFeaOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
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
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Pricing
        </li>

        <li
          onMouseEnter={solResIn}
          onMouseLeave={solResOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Resources{" "}
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt=""
          />
        </li>

        <li
          onMouseEnter={solHoverIn}
          onMouseLeave={solHoverOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Industries{" "}
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt="image"
          />
        </li>


        <li>Sign In</li>
        <button>Free Trial</button>
      </div>

      {/* service drop down section cde start */}

      {/* ProductSolutions drop down section code start */}
      {ProductSolution ? (
        <SalesIndustries
          solHoverIn={solHoverIn}
          solHoverOut={solHoverOut}
          scroll={scroll}
        />
      ) : null}

      {productresource ? (
        <SalesResources
          solResIn={solResIn}
          solResOut={solResOut}
          scroll={scroll}
        />
      ) : null}

      {productfeature ? (
        <SalesFeature
          saleFeaIn={saleFeaIn}
          saleFeaOut={saleFeaOut}
          scroll={scroll}
        />
      ) : null}

      {productdesk ? (
        <SalesProduct
          saleProIn={saleProIn}
          saleProOut={saleProOut}
          scroll={scroll}
        />
      ) : null}
    </div>
  );
};
