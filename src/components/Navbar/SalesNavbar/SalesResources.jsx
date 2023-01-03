import React from "react";
import "./SalesResources.css";
import { Link } from "react-router-dom";
import { salesResources } from "../../../Data/Navbar";
export const SalesResources = ({ saleResIn, saleResOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleResIn}
      onMouseLeave={saleResOut}
      className="saleResourceMainDiv"
      style={{ top: scroll ? "6.5%" : "16%" }}
    >
      <div className="saleResourceListItems" style={{ width: "100%" }}>
        {salesResources.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(`/${item.path}`);
              solHoverOut();
            }}
            className="saleResourceData"
          >
            <Link onClick={saleResOut} to={item.path} className="productlinkP">
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
