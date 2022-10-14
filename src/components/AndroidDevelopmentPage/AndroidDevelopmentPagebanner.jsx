import React from "react";
import "./AndroidDevelopmentPagebanner.css";
export const AndroidDevelopmentPagebanner = () => {
  return (
    <div className="_AndroidDevelopmentbanner">
      <div className="androidText">
        <div>
          <h1>Android App Development Company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et
            unde molestiae adipisci non rerum, eveniet mollitia voluptate
            maiores suscipit, hic doloribus reiciendis recusandae facere,
            dignissimos provident. Ut, aliquid quasi in voluptates, sit libero
            nam eos harum vel velit esse!
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="androidHero">

       <div className="androidlogo"> <img src="Images/android/logo.png" alt="" /></div>
        <div className="phoneimage"><img className="phoneimage" src="Images/android/phone.png" alt="" /></div>
      </div>
    </div>
  );
};
