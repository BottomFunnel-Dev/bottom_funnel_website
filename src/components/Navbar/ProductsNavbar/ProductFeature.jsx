import React from 'react'
import './ProductSolutions.css'
import { Link } from 'react-router-dom'
import { productFeatures } from '../../../Data/Navbar'
export const ProductFeature = ({ solFeaIn, solFeaOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solFeaIn}
      onMouseLeave={solFeaOut}
      className="serviceVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" ,top:"15%"}}
    >
      <div className="industryDropdown">
        <div className="industryContent">
          <div className="productSolutionListItems">
            {productFeatures.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  solHoverOut();
                }}
                className="productSolutionData"
              >

                <Link
                  onClick={solFeaOut}
                  to={item.path}
                  className="linkP"
                >
                  <p style={{marginTop:"5%"}}>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
