import React from 'react'
import './ProductSolutions.css'
import { Link } from 'react-router-dom'
import { productSolution } from '../../../Data/Navbar'
export const ProductSolutions = ({ solHoverIn, solHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className="productSolutionsMainDiv"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" ,top:"15%"}}
    >
          <div className="productSolutionsListItems" style={{width:"100%",height:"300px"}}>
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
                  className="productlinkP"
                >
                  <h6>{item.dropContent}</h6>
                  <p>{item.productText1}</p>
                  <p>{item.productText2}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
  )
}
