import React from 'react'
import './ProductResources.css'
import { Link } from 'react-router-dom'
import { productSolution } from '../../../Data/Navbar'
export const ProductResources = ({ solHoverIn, solHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className="serviceVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" ,top:"15%"}}
    >
      <div className="industryDropdown">
        <div className="industryContent">
          <div className="productSolutionListItems">
            {productSolution.map((item, i) => (
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
                  onClick={solHoverOut}
                  to={item.path}
                  className="linkP"
                >
                  <h5>{item.dropContent}</h5>
                  <p>{item.productText1}</p>
                  <p>{item.productText2}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
