import React from "react";
import "./parallexsection.css";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
export const ParallexSection = () => {
  return (
    <div className="parallexaMainDiv">
      <div className="parallexInnerDiv">
        <MouseParallaxContainer
          className="parallax"
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          {/* <MouseParallaxChild
            factorX={0.6}
            factorY={0.1}
            className="mainparallexCont"
          /> */}
          <MouseParallaxChild
            style={{ position: "absolute", top: "400px", right: "200px" }}
            factorX={0.2}
            factorY={0.5}
          >
            <div className="">
              <img src="Images/navbar/services/angular.png" alt="" />
            </div>
          </MouseParallaxChild>

          <MouseParallaxChild
            style={{ position: "absolute", top: "400px", left: "200px" }}
            factorX={0.2}
            factorY={0.5}
          >
            <div>
              <img src="Images/navbar/services/php.png" alt="" />
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{ position: "absolute", top: "300px", left: "300px" }}
            factorX={0.2}
            factorY={0.5}
          >
            <div>
              <img src="Images/navbar/services/angular.png" alt="" />
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{ position: "absolute", top: "500px", left: "200px" }}
            factorX={0.2}
            factorY={0.5}
          >
            <div>
              <img src="Images/navbar/services/angular.png" alt="" />
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{ position: "absolute", top: "250px", left: "400px" }}
            factorX={0.2}
            factorY={0.5}
          >
            <div>
              <img src="Images/navbar/services/angular.png" alt="" />
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{ position: "absolute", top: "500px", left: "400px" }}
            factorX={0.2}
            factorY={0.5}
          >
            <div className="elmentDiv">
              <img src="Images/navbar/services/angular.png" alt="" />
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{ position: "absolute", top: "350px", left: "150px" }}
            factorX={0.2}
            factorY={0.5}
          >
            <div className="elmentDiv">
              <img src="Images/navbar/services/angular.png" alt="" />
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </div>
  );
};
