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
  product4,
} from "../../Data/Navbar";
export const Products = ({ serHoverIn, serHoverOut, scroll, productMount }) => {
  const [sidetoggle, setSidetoggle] = useState("Technologies");

  const handleSide = (element) => {
    console.log(element);
    setSidetoggle(element);
  };

  return (
    <div
      onMouseEnter={() => serHoverIn()}
      onMouseLeave={() => serHoverOut()}
      className="productVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
      
    >

      {sidetoggle === "Technologies" && (
        <div className="productDropdownSection">
          <div className="productDropdownContent"   style={{marginLeft:"1%",width:"35%"}}>
            <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              SAAS
            </h5>

            <div className="listItems" style={{width:"100%"}}>
              {product1.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="productimageIconDivSection hoveringDiv"
                  style={{height:"90px",width:"100%",marginTop:"0%", "--i": item.productHover}}
                >
                  <div>
                    <img
                      className="productLogoImages"
                      src={item.navIcons}
                      alt=""
                      style={{width:"90px",height:"60px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="productlinkP" style={{width:"100%",marginLeft:"10%",marginTop:"0%"}}>
                    <p style={{fontWeight:"500",fontSize:"14px"}}>{item.dropContent}</p>
                    <p style={{fontSize:"11px"}}>{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="productDropdownContent"   style={{marginLeft:"4%",width:"35%",marginTop:"2%"}}>
            
            <div className="listItems" style={{width:"100%"}}>
              {product2.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="productimageIconDivSection hoveringDiv"
                  style={{height:"90px",width:"100%",marginTop:"0%","--i": item.productHover}}
                >
                  <div>
                    <img
                      className="productLogoImages"
                      src={item.navIcons}
                      alt=""
                      style={{width:"90px",height:"60px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="productlinkP" style={{width:"100%",marginLeft:"10%",marginTop:"0%"}}>
                    <p style={{fontWeight:"500",fontSize:"14px"}}>{item.dropContent}</p>
                    <p style={{fontSize:"11px"}}>{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
            <Link to="newProductPage" style={{textDecoration:"none"}}>
            <p
              className="viewAllButton"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
             View All Products
            </p>
            </Link>
          </div>

          <div className="productDropdownContent" style={{marginLeft:"10%",marginTop:"0%"}}>
          <h5
              className="noStyleMain"
              style={{marginLeft:"5%"}}
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              Platforms
            </h5>
            <div className="listItems" style={{marginTop:"10%"}}>
              {product4.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="productimageIconDivSection"
                  style={{marginTop:"8%"}}
                >
                  
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                      style={{width:"40px",height:"40px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">

                    <p style={{marginTop:"5%",marginLeft:"8%"}}>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>


          </div>


          <div className="productDropdownContent" style={{marginLeft:"3%",width:"25%"}}>
          <h5
              className="noStyleMain"
              // style={{marginLeft:"-8%",border:"2px solid red",marginRight:"15%"}}
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            > <img src="Images/navbar/product/Features.png"/>
              Features
            </h5>
            
            <div className="listItems" style={{marginTop:"5%",marginLeft:"7%"}}>
            {/* <h5> <img src=""/> Features</h5> */}
              {product3.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="productimageIconDivSection"
                >
                  
                  {/* <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div> */}

                  <Link onClick={serHoverOut} to={item.path} className="linkP">

                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>


          </div>


          <div className="productDropdownContent" style={{marginLeft:"1%",width:"25%"}}>
          
          <h5 style={{marginTop:"1%",color:"#ef4c23"}}><img src="Images/navbar/product/marketPlace.png"/>Bottom Funnel Neo</h5>
                    <p>Leverage a flexible, end-to-end, AI-powered enterprise platform to unify customer experiences</p>
            <h5 style={{marginTop:"15%",color:"#ef4c23"}}><img src="Images/navbar/product/knowmore.png"/> Know more</h5>
                    <p>What's New?</p>
                    <p>Blog</p>
            <div className="listItems" style={{marginTop:"10%"}}>
              {product4.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="productimageIconDivSection"
                >
                  
                  {/* <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div> */}
                  <Link onClick={serHoverOut} to={item.path} className="linkP">

                    {/* <p>{item.dropContent}</p> */}
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
