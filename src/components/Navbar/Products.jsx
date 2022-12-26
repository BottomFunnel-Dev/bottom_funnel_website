// import React from "react";
// import "./products.css";
// export const Products = ({productHoverIn,productHoverOut, scroll}) => {
//   return (
//     <div className="productNavVisible" onMouseEnter={productHoverIn} onMouseLeave={productHoverOut} style={{ top: scroll ? "75px" : "112px" }}>
//       <h1>Hello products dropdown</h1>
//     </div>
//   );
// };

import React, {useState} from "react";
import "./products.css";
import { Link } from "react-router-dom";
import {
  product1,
  product2,
  product3,
} from "../../Data/Navbar";
export const Products = ({ serHoverIn, serHoverOut, scroll, productMount }) => {
  const [sidetoggle, setSidetoggle] = useState("Technologies");

  const handleSide = (element) => {
    console.log(element);
    setSidetoggle(element);
  };

  return (
    <div
      onMouseEnter={serHoverIn}
      onMouseLeave={serHoverOut}
      className="solutionVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
      
    >

      {sidetoggle === "Technologies" && (
        <div className="productDropdownSection">
          <div className="productDropdownContent">
            {/* <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              Web Development
            </h5> */}

            <div className="">
              {product1.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="productDropdownContent">
            <div className="" >
              {product2.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="productDropdownContent">

            <div className="listItems">
              {product3.map((item, l) => (

                <div
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  key={l}
                  className="imageIconDivSection"
                >
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}


    </div>
  );
};
