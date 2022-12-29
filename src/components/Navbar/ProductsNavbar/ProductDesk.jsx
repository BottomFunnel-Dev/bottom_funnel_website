import React from 'react'
import './ProductDesk.css'
import { Link } from 'react-router-dom'
import { productDesk } from '../../../Data/Navbar'
export const ProductDesk = ({ solDeskIn, solDeskOut, scroll }) => {
  return (
    <div
      onMouseEnter={solDeskIn}
      onMouseLeave={solDeskOut}
      className="productDeskMainDiv"
      style={{ top: scroll? "6.5%" : "15%"}}
    >
          <div className="productDeskListItems" style={{width:"100%",height:"300px"}}>
            {productDesk.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  solHoverOut();
                }}
                className="productDeskData"
              
              >
                <Link
                  onClick={solDeskOut}
                  to={item.path}
                  className="productlinkP"
                >
                  <h6>{item.dropContent}</h6>
                  <p style={{color:"black"}}>{item.productText1}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
  )
}
