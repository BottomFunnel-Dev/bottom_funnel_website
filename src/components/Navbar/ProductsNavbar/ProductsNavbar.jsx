import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./productsNavbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { NavServices } from "../NavServices";
import { NavIndustries } from "../NavIndustries";
import { ImageCard } from "../../particularComponents/ImageCardText/ImageCard";
import { ProductSolutions } from "./ProductSolutions";
import { ProductResources } from "./ProductResources";
import { ProductFeature } from "./ProductFeature";
import { ProductDesk } from "./ProductDesk";

export const ProductsNavbar = ({ scroll }) => {

  const navigate = useNavigate();
  const [ProductSolution, setProductSolution] = useState(false);
  const [productfeature, setproductFeature] = useState(false);
  const[productresource, setproductResource] = useState(false);
  const [productdesk, setproductDesk] = useState(false);
  const [productnavbar, setproductNabvar] = useState(false);
  const navproductredux = useSelector((state) => state.navbar);
  const productMount = useSelector((state) => state.mountNav);



  const skillProductHoverIn = () => {
    

    setproductNabvar(true);
  };

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

  const solDeskIn = () => {
    setproductDesk(true);
    setproductNabvar(true);
  };

  const solDeskOut = () => {
    setproductDesk(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };
  const solFeaIn = () => {
    setproductFeature(true);
    setproductNabvar(true);
  };

  const solFeaOut = () => {
    setproductFeature(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };


  useEffect(() => {
    console.log(productMount.navMount);
  }, [productMount]);


  return (
    <div className="products-navbar" style={{ top: scroll ? "0" : "65px", background: scroll ? "white" : "transparent" }}>

      {/* {!productMount.navMount && <ContactMain
        bgcolor={navbar ? "white" : "transparent"}
        textcolor={!navbar ? navredux.color : "black"}
      />} */}

      <div className="deskLogo">
        {/* <img src="Images/Logos/supportdesk.png" alt="support desk" /> */}
        <h5>Support Desk</h5>
      </div>

      <div className="deskList">
        <li
          onMouseEnter={solDeskIn}
          onMouseLeave={solDeskOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}>
          Desk Products
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt=""
          />
        </li>

        <li
          onMouseEnter={solFeaIn}
          onMouseLeave={solFeaOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}>
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
          onMouseEnter={serHoverIn}
          onMouseLeave={serHoverOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Saas
        </li>

        <li
          onMouseEnter={solHoverIn}
          onMouseLeave={solHoverOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}>
          Solutions{" "}
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt="image"
          />
        </li>

        <li
          onMouseEnter={solResIn}
          onMouseLeave={solResOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}>
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


      {/* ProductSolutions drop down section code start */}
      {ProductSolution ? (
        <ProductSolutions
          solHoverIn={solHoverIn}
          solHoverOut={solHoverOut}
          scroll={scroll}
          productMount={productMount}
        />

      ) : null}

{productresource ? (
        <ProductResources
          solResIn={solResIn}
          solResOut={solResOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

{productfeature ? (
        <ProductFeature
          solFeaIn={solFeaIn}
          solFeaOut={solFeaOut}
          scroll={scroll}
          productMount={productMount}
        />

      ) : null}

{productdesk ? (
        <ProductDesk
          solDeskIn={solDeskIn}
          solDeskOut={solDeskOut}
          scroll={scroll}
          productMount={productMount}
        />

      ) : null}

    </div>
  );
};
