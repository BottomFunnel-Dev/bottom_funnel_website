import React from "react";
import "./ProductFeature.css";
import { Link } from "react-router-dom";
import { productFeatures } from "../../../Data/Navbar";
export const ProductFeature = ({ solFeaIn, solFeaOut, scroll }) => {
  return (
    <div
      onMouseEnter={solFeaIn}
      onMouseLeave={solFeaOut}
      className="productFeatureMainDiv"
      style={{ top: scroll ? "6.5%" : "16%" }}
    >
      <div className="productFeatureListItems" style={{ width: "100%" }}>
        {productFeatures.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(`/${item.path}`);
              solHoverOut();
            }}
            className="productFeatureData"
          >
            <Link onClick={solFeaOut} to={item.path} className="productlinkP">
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        <button>View all features</button>
      </div>
    </div>
  );
};
