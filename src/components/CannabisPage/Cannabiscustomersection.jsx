import React from "react";
import "./Cannabiancustomer.css";

export default function Cannabiscustomersection() {
  return (
    <div className="Cannabiscustomersection">
      <div className="Cannabissubcustomer">
        <div className="Cannabissubcustomerleft">
          <div className="heartimage">
            <img src="Images/cannabisPhotos/heart.png" />
          </div>
          <div className="heartmobile">
            <img src="Images/cannabisPhotos/category.png" />
          </div>
        </div>
        <div className="Cannabissubcustomerright">
          <div>
            <h2>Customer App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ex labore, quia corrupti veniam fugiat quae beatae, aspernatur
              odio iste perferendis, dolor eaque ducimus architecto modi vel hic
              perspiciatis accusamus!
            </p>
            <button className="cannabiscustomerbtn">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
