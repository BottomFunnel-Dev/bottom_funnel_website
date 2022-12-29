


import React from 'react'
import './ProductResources.css'
import { Link } from 'react-router-dom'
import { productResources } from '../../../Data/Navbar'
export const ProductResources = ({ solResIn, solResOut, scroll }) => {
  return (
    <div
      onMouseEnter={solResIn}
      onMouseLeave={solResOut}
      className="productResourceMainDiv"
      style={{ top: scroll? "6.5%" : "15%"}}
    >
          <div className="productResourceListItems" style={{width:"100%"}}>
            {productResources.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  solHoverOut();
                }}
                className="productResourceData"
              
              >
                <Link
                  onClick={solResOut}
                  to={item.path}
                  className="productlinkP"
                >
                  <p>{item.dropContent}</p>
                  {/* <p>{item.productText1}</p> */}
                </Link>
              </div>
            ))}
            <button>View all Resources</button>
          </div>
        </div>
  )
}

