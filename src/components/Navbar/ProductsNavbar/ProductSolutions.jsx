import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { industries, ondemand } from '../../Data/Navbar'
export const NavIndustries = ({ solHoverIn, solHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className="serviceVisible"
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >
      <div className="industryDropdown">
        <div className="industryContent">
          <Link className="noStyle">
            <h5>Industries We Serves</h5>
          </Link>
          <div className="industryListItems">
            {industries.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  solHoverOut();
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
                <Link
                  onClick={solHoverOut}
                  to={item.path}
                  className="linkP"
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="industryContent">
          <Link className="noStyle">
            <h5>On Demand Solutions</h5>
          </Link>
          <div className="industryListItems">
            {ondemand.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/${item.path}`);
                  solHoverOut();
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
                <Link
                  onClick={solHoverOut}
                  to={item.path}
                  className="linkP"
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
