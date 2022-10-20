import React from "react";
import "./groceryFeatures.css";

const GroceryFeatures = () => {
  return (
    <div className="groceryFeatures">
      <h1>Key Features</h1>
      <div className="grocerycustomerApp">
        <div className="grocerycustomerImages">
          {/* <div className="backfeature">
            <img src="Images/ondemandHome/shape1.png" alt="" />
          </div> */}
          <div className="grocerycustomerphone">
            <img src="Images/grocery/shoppingbag.png" alt="" />
          </div>
        </div>
        <div className="groceryText">
          <h2>Customer App</h2>
          <div>
            <div className="grocerytextFeatures">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="groceryadminpanel">
        <div className="groceryadmintext">
          <h2>Admin panel</h2>
          <div>
            <div>
              <div className="grocerytextFeatures">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="groceryadminImage">
          {/* <div className="backadmin">
            <img src="Images/ondemandHome/shape2.png" alt="" />
          </div>
          <div className="backadmindown">
            <img src="Images/ondemandHome/shape2.png" alt="" />
          </div> */}
          <div className="groceryadminpanelimage">
            <img src="Images/grocery/adminpanel.png" alt="" />
          </div>
        </div>
      </div>

      <div className="groceryserviceApp">
        <div className="groceryserviceimage">
          {/* <div className="groceryserviceappback">
            <img src="Images/ondemandHome/shape3.png" alt="" />
          </div> */}
          <div className="groceryserviceappmobile">
            <img src="Images/grocery/deliveryapp.png" alt="" />
          </div>
        </div>
        <div className="groceryserviceapptext">
          <h2>Service professional’s app</h2>
          <div>
            <div>
              <div className="grocerytextFeatures">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryFeatures;
