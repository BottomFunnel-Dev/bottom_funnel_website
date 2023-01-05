import React from "react";
import "./SalesProduct.css";
import { Link } from "react-router-dom";
import { salesProduct } from "../../../Data/Navbar";
export const SalesProduct = ({ saleProIn, saleProOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleProIn}
      onMouseLeave={saleProOut}
      className="saleProductMainDiv"
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className="saleProductListItems" style={{ width: "100%" }}>
        {salesProduct.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(`/${item.path}`);
              solHoverOut();
            }}
            className="saleProductData"
          >
            <img src={item.navIcons} alt="Product logo" />
            <Link
              onClick={saleProOut}
              style={{ width: "75%" }}
              to={item.path}
              className="productlinkP"
            >
              <h6>{item.dropContent}</h6>
              <p style={{ color: "black" }}>{item.productText1}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
