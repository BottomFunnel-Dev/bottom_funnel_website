import React from "react";
import "./SalesIndustries.css";
import { Link } from "react-router-dom";
import { salesIndustries } from "../../../Data/Navbar";
export const SalesIndustries = ({ saleIndIn, saleIndOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleIndIn}
      onMouseLeave={saleIndOut}
      className="saleIndustriesMainDiv"
      style={{ top: scroll ? "6.5%" : "16%" }}
    >
      <div className="saleIndustriesListItems" style={{ width: "100%" }}>
        {salesIndustries.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(`/${item.path}`);
              saleIndOut();
            }}
            className="saleIndustriesData"
          >
            <Link onClick={saleIndOut} to={item.path} className="productlinkP">
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        {/* <button>View all features</button> */}
      </div>
    </div>
  );
};
