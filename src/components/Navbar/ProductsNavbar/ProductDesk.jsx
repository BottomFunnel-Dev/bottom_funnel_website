import React from 'react'
import './ProductSolutions.css'
import { Link } from 'react-router-dom'
import { productDesk } from '../../../Data/Navbar'
export const ProductDesk = ({ solDeskIn, solDeskOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solDeskIn}
      onMouseLeave={solDeskOut}
      className="serviceVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" ,top:"15%"}}
    >
      <div className="industryDropdown">
        <div className="industryContent">
          <div className="productSolutionListItems" style={{marginLeft:"8%"}}>
            {productDesk.map((item, i) => (
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
                  onClick={solDeskOut}
                  to={item.path}
                  className="linkP"
                >
                  <h5>{item.dropContent}</h5>
                  <p>{item.productText1}</p>
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
