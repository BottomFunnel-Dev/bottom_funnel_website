import React from 'react'
import './ProductResources.css'
import { Link } from 'react-router-dom'
import { productResources } from '../../../Data/Navbar'
export const ProductResources = ({ solResIn, solResOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solResIn}
      onMouseLeave={solResOut}
      className="serviceVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" ,top:"15%"}}
    >
      <div className="industryDropdown">
        <div className="industryContent">
          <div className="productSolutionListItems">
            {productResources.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  solHoverOut();
                }}
                className="productSolutionData"
              >
                {/* <div>
                  <img
                    className="iconDivSection"
                    src={item.navIcons}
                    alt=""
                  />
                </div> */}
                <Link
                  onClick={solResOut}
                  to={item.path}
                  className="linkP"
                >
                  <p>{item.dropContent}</p>
                  {/* <p>{item.productText1}</p> */}
                  {/* <p>{item.productText2}</p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
