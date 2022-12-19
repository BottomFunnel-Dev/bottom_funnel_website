import React from "react";
import "./KotlinSolutions.css";

export const KotlinSolutions = () => {
  return (
    <>
      <div className="kotlinSolutionsMainDiv">
        <div className="kotlinSolutionsheading">
          <h1> Our Kotlin App Development Solutions </h1>
          <p>
            We offer a wide range of services including app design, development
            and maintenance, so you can be sure your project will be handled
            with care from start to finish. We use latest techniques and tools
            to make your app look its absolute best, and we guarantee it'll be
            reliable and bug-free when it's finally released to the public. So
            come on board our train - we're leaving slow but steady!
          </p>
        </div>
        <div className="kotlinSolutionsContainerDiv">
          <div className="kotlinSolutionsBox">
            <div className="kotlinSolutionsContainerBoxes">
              <div className="kotlinSolutionsBoxIcon">
                <img
                  className="KotlinSolutionImage"
                  src="Images/Kotlin/Icons/platform 1.png"
                />
              </div>

              <div className="kotlinSolutionsBoxHeading">
                <h6>Custom Kotlin App Development</h6>
                <p>
                  We are experts in building custom-made apps for businesses.
                  With their guidance, you will be able to achieve greater
                  success and growth by creating an application that meets your
                  goals and expectations.
                </p>
              </div>

            </div>

            <div className="kotlinSolutionsContainerBoxes">
              <div className="kotlinSolutionsBoxIcon">
                <img
                  className="KotlinSolutionImage"
                  src="Images/Kotlin/Icons/platform 1-1.png"
                />
              </div>

              <div className="kotlinSolutionsBoxHeading">
                <h6>Prototyping</h6>
              </div>

              <div className="kotlinSolutionsBoxContent">
                <p>
                  {" "}
                  We use prototyping tools as much as possible. You see, they
                  not only save us time and money while prototyping new ideas,
                  but they also help us find bugs in our code faster and more
                  efficiently.
                </p>
              </div>

            </div>
            <div className="kotlinSolutionsContainerBoxes">
              <div className="kotlinSolutionsBoxIcon">
                <img
                  className="KotlinSolutionImage"
                  src="Images/Kotlin/Icons/ux-interface 2-1.png"
                />
              </div>

              <div className="kotlinSolutionsBoxHeading">
                <h6>Kotlin UI/UX Development</h6>
              </div>

              <div className="kotlinSolutionsBoxContent">
                <p>
                  We have got you covered with our bottom funnel kotlin app
                  development services! We have extensive experience with UI/UX
                  design, and our team is comprised of experts who understand
                  the importance of user experience.
                </p>
              </div>
            </div>

            <div className="kotlinSolutionsContainerBoxes">
              <div className="kotlinSolutionsBoxIcon">
                <img
                  className="KotlinSolutionImage"
                  src="Images/Kotlin/Icons/solution 2-1.png"
                />
              </div>

              <div className="kotlinSolutionsBoxHeading">
                <h6>Kotlin Migration Solutions</h6>
              </div>
              
              <div className="kotlinSolutionsBoxContent">
                <p>
                  Make the process of switching to Kotlin smooth by using our
                  services. We offer all kind of migration solutions including
                  bottom funnel, data enhancement or changing your application's
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
