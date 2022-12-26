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
  webservice,
  appservice,
  digitalmarket,
  trendingTech,
  discoverContent,
  designContent,
  designRightContent,
  discoverRightContent,
  backend,
  frontend,
  cms,
  mobile,
  database,
  scaleContent,
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
        <div className="dropdownSection" style={{border:"2px solid red"}}>
          <div className="serviceDropdownContent" style={{border:"2px solid brown"}}>
            {/* <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              Web Development
            </h5> */}

            <div className="listItems">
              {webservice.map((item, i) => (
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

          <div className="serviceDropdownContent" style={{border:"2px solid blue"}}>
            <h5
              className="noStyle"
              onClick={() => {
                serHoverOut();
              }}
            >
              Products
            </h5>

            <div className="listItems" style={{border:"2px solid red"}}>
              {appservice.map((item, i) => (
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

          <div className="serviceDropdownContent" style={{border:"2px solid red"}}>
            <Link to="Digital-marketing" className="noStyle">
              <h5
                onClick={() => {
                  serHoverOut();
                }}
              >
                Digital Marketing
              </h5>
            </Link>
            <div className="listItems">
              {digitalmarket.map((item, l) => (

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
                // </Link>
              ))}
            </div>
          </div>

        </div>
      )}

      {sidetoggle === "Discover" && (
        <div className="discoverDropdown">
          <div className="discoverleft">
            <div className="discoverlefttop">
              {discoverContent.map((item, index) => (
                <ImageCard
                  key={index}
                  cardContent={item}
                  closeDisplay={serHoverOut}
                />
              ))}
            </div>
            <div className="discoverleftbottom">
              <h3>
                Learn more About{" "}
                <span>
                  Our services <BsArrowRight />
                </span>
              </h3>
            </div>
          </div>
          <div className="discoverright">
            {discoverRightContent.map((item, index) => (
              <div key={index}>
                <ImageCard cardContent={item} closeDisplay={serHoverOut} />
                <h5 className="knowmore">
                  Know More <BsArrowRight />
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
      {sidetoggle === "Design" && (
        <div className="discoverDropdown">
          <div className="discoverleft">
            <div className="discoverlefttop">
              {designContent.map((item, index) => (
                <ImageCard
                  key={index}
                  closeDisplay={serHoverOut}
                  cardContent={item}
                />
              ))}
            </div>
            <div className="discoverleftbottom">
              <h3>
                Learn more About{" "}
                <span>
                  Our services <BsArrowRight />
                </span>
              </h3>
            </div>
          </div>
          <div className="discoverright">
            {designRightContent.map((item, index) => (
              <div key={index}>
                <ImageCard cardContent={item} closeDisplay={serHoverOut} />
                <h5 className="knowmore">
                  Know More <BsArrowRight />
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
