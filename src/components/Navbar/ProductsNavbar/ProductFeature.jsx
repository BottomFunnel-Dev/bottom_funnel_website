import React from 'react'
import './ProductFeature.css'
import { Link } from 'react-router-dom'
import { productFeatures } from '../../../Data/Navbar'
export const ProductFeature = ({ solFeaIn, solFeaOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solFeaIn}
      onMouseLeave={solFeaOut}
      className="productFeatureMainDiv"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" ,top:"15%"}}
    >
          <div className="productFeatureListItems" style={{width:"100%",height:"300px"}}>
            {productFeatures.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  solHoverOut();
                }}
                className="productFeatureData"
              
              >
                <Link
                  onClick={solFeaOut}
                  to={item.path}
                  className="productlinkP"
                >
                  <p>{item.dropContent}</p>
                  {/* <p>{item.productText1}</p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
  )
}

