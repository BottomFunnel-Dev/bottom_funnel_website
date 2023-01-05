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
  
  return (
    <div
      onMouseEnter={() => serHoverIn()}
      onMouseLeave={() => serHoverOut()}
      className="productVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
      
    >

      
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
                  style={{height:"75px",width:"100%",marginTop:"0%", "--i": item.productHover}}
                >
                  <div>
                    <img
                      className="productLogoImages"
                      src={item.navIcons}
                      alt=""
                      style={{width:"90px",height:"60px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="productSaasRow" style={{width:"100%",marginLeft:"10%",marginTop:"0%"}}>
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
                  style={{height:"75px",width:"100%",marginTop:"0%","--i": item.productHover}}
                >
                  <div>
                    <img
                      className="productLogoImages"
                      src={item.navIcons}
                      alt=""
                      style={{width:"90px",height:"60px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="productSaasRow" style={{width:"100%",marginLeft:"10%",marginTop:"0%"}}>
                    <p style={{fontWeight:"500",fontSize:"14px"}}>{item.dropContent}</p>
                    <p style={{fontSize:"11px"}}>{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
            <Link to="newProductPage" onClick={serHoverOut} style={{textDecoration:"none"}}>
            <p
              className="viewAllButton"
            >
             View All Products
            </p>
            </Link>
          </div>

          <div className="productDropdownContent" style={{marginLeft:"3%",marginTop:"0%",  width: "25%"}}>
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
            <div className="listItems">
              {product4.map((item, i) => (
                <div
                key={i}
                  onClick={() => {
                    navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className="productimageIconDivSection saasHoveringData"
                  style={{marginTop: i==0?"0":"2%"}}
                >
                  
                  <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                      style={{width:"40px"}}
                    />
                  </div>
                  <Link onClick={serHoverOut} to={item.path} className="linkP">

                    <p style={{marginTop:"0%",marginLeft:"10%"}}>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>


          </div>


          <div className="productDropdownContent" style={{marginLeft:"3%",width:"25%"}}>
          <h5
              className="noStyleMain"
              onClick={() => {
                navigate(`web-development`);
                serHoverOut();
              }}
            > <img style={{height:"30px"}} src="Images/navbar/product/Features.png"/>
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

                  <Link onClick={serHoverOut} to={item.path} style={{ margin: "0"}} className="linkP">

                    <p style={{margin: "0",paddingLeft:"7%"}}>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>


          </div>


          <div className="productDropdownContent" style={{marginLeft:"1%",width:"25%"}}>
          
          <h5 style={{marginTop:"1%",color:"#ef4c23", marginLeft: "0"}}><img height="40px" src="Images/navbar/product/Neo.png"/>Bottom Funnel Neo</h5>
                    <p style={{marginLeft:"5%"}}>Leverage a flexible, end-to-end, AI-powered enterprise platform to unify customer experiences</p>
            <h5 style={{marginTop:"15%",color:"#ef4c23"}}><img src="Images/navbar/product/knowmore.png"/> Know more</h5>
                    <p>What's New?</p>
                    <p>Blog</p>
            


          </div>


        </div>
      


    </div>
  );
};
