import React from "react";
import "./groceryBanner.css";

const GroceryBanner = () => {
  return (
    <div className="grocerybanner">
      <div className="groceryText">
        <div>
          <h1>Grocery App Solutions</h1>
          <p>
            Provide services to your customers at the comfort of their home with
            an app! Boost efficiency and drive more business with our
            industry-leading on demand home services app development services.
          </p>
          <button>Get Started </button>
        </div>
      </div>
      <div className="groceryImage">
        {/* <img src="Images/grocery/banner.png" alt="" /> */}
        <div className="mainPhone"><img src="Images/grocery/banner.png" alt="" /></div>
        <div className="groceryback"></div>
        <div className="zomatoimg"><img src="Images/grocery/zomato.png" alt="" /></div>
        <div className="dunzoimg"><img src="Images/grocery/dunzo.png" alt="" /></div>
        <div className="dealimg"><img src="Images/grocery/dealshare.png" alt="" /></div>
        <div className="bundleimg"><img src="Images/grocery/bundle.png" alt="" /></div>
        <div className="blinkitimg"><img src="Images/grocery/blinkit.png" alt="" /></div>
        <div className="jumiaimg"><img src="Images/grocery/jumia.png" alt="" /></div>
      </div>
    </div>
  );
};

export default GroceryBanner;
