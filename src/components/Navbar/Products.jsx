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
          <div className="productDropdownContent"   style={{marginLeft:"1%",width:"28%"}}>
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
                  className="imageIconDivSection"
                  style={{marginTop:"15px",height:"60px",width:"100%"}}
                >
                  <div>
                    <img
                      className="productLogoImages"
                      src={item.navIcons}
                      alt=""
                      style={{width:"80px",height:"50px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP" style={{width:"90%",marginLeft:"15%"}}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="productDropdownContent"   style={{marginLeft:"3%",width:"27%"}}>
          {/* <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              Platforms
            </h5> */}
            <div className="listItems" style={{marginTop:"12%",width:"100%"}}>
              {product2.map((item, l) => (

                <div
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  key={l}
                  className="imageIconDivSection"
                  style={{marginTop:"15px",height:"60px",width:"100%"}}
                >
                  <div>
                  <img
                      className="productLogoImages"
                      src={item.navIcons}
                      alt=""
                      style={{width:"80px",height:"50px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP" style={{width:"90%",marginLeft:"15%"}}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
            <Link to="newProductPage" style={{textDecoration:"none"}}>
            <h5
              className="viewAllButton"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              All Products
            </h5>
            </Link>
          </div>


          <div className="productDropdownContent" style={{marginLeft:"10%",marginTop:"0%",borderRight:"1px solid #ef4c23"}}>
            <div className="listItems" style={{marginTop:"25%"}}>
              {product4.map((item, i) => (
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


          <div className="productDropdownContent" style={{marginLeft:"1%",borderRight:"1px solid #ef4c23"}}>
          <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              PlatForms
            </h5>
            
            <div className="listItems" style={{marginTop:"10%"}}>
            {/* <h5> <img src=""/> Features</h5> */}
              {product3.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
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


          <div className="productDropdownContent" style={{marginLeft:"5%"}}>
          <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            >
              Features
            </h5> 
            
            <h5 style={{marginTop:"20%"}}>What's New?</h5>
                    <p>Know More</p>
                    <p>Blog</p>
            <div className="listItems" style={{marginTop:"10%"}}>
              {product4.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="imageIconDivSection"
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
