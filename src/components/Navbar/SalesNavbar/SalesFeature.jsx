import React from "react";
import "./SalesFeature.css";
import { Link } from "react-router-dom";
import { salesFeatures } from "../../../Data/Navbar";
export const SalesFeature = ({ saleFeaIn, saleFeaOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleFeaIn}
      onMouseLeave={saleFeaOut}
      className="productFeatureMainDiv"
      style={{ top: scroll ? "6.5%" : "16%" }}
    >
      <div className="productFeatureListItems" style={{ width: "100%" }}>
        {salesFeatures.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(`/${item.path}`);
              saleFeaOut();
            }}
            className="productFeatureData"
          >
            <Link onClick={saleFeaOut} to={item.path} className="productlinkP">
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        <button>View all features</button>
      </div>
    </div>
  );
};
