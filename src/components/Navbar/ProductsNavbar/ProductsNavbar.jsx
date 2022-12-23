import React from "react";
import "./productsNavbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IconContext } from "react-icons";
export const ProductsNavbar = ({scroll}) => {
  return (
    <div className="products-navbar" style={{top: scroll? "0": "55px", background: scroll? "white": "transparent"}}>
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
        <li>Pricing</li>
        <li>Saas</li>
        <li>
          Solutions{" "}
          <img
            className="deskdownIcon"
            src="Images/Logos/downarrow.png"
            alt=""
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
    </div>
  );
};
