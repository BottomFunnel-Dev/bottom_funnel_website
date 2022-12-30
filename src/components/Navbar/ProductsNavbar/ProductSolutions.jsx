import React from "react";
import "./ProductSolutions.css";
import { Link } from "react-router-dom";
import { productSolution } from "../../../Data/Navbar";
export const ProductSolutions = ({ solHoverIn, solHoverOut, scroll }) => {
  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className="productSolutionsMainDiv"
      style={{ top: scroll ? "6.5%" : "16%" }}
    >
      <div className="productSolutionsListItems" style={{ width: "100%" }}>
        {productSolution.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(`/${item.path}`);
              solHoverOut();
            }}
            className="productSolutionsData"
          >
            <Link
              onClick={solHoverOut}
              to={item.path}
              style={{ cursor: "default" }}
              className="productlinkP"
            >
              <div>
                <h6>{item.dropContent}</h6> <span></span>
              </div>
              <p>{item.productText1}</p>
              <p>{item.productText2}</p>
            </Link>
          </div>
        ))}
        <button>All industries</button>
      </div>
    </div>
  );
};
