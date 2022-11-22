import React from "react";
import "./OurAchievements.css";

export const OurAchievements = () => {
  return (
    <div className="OurAchievements-main">
      <div className="OurAchievements-content">
        <h1>
          Our <span>Achievements</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, et
          itaque. Excepturi, laborum quod repellendus placeat soluta a maiores
          consequuntur numquam. At ratione ab repudiandae iste obcaecati quam ad
          dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum
          blanditiis quidem nobis, eveniet, officia ipsa aperiam odit nisi
          laboriosam dolorem quas ad nam officiis consequatur placeat possimus.
          Numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          harum accusantium ipsam. Cum laudantium excepturi explicabo voluptatem
          commodi eaque voluptate accusamus vero optio molestiae, eos
          voluptatibus.
        </p>
        <button>Read More</button>
      </div>
      <div className="OurAchievements-image">
        <img
          src="Images/aboutusImage/our-achievements.png"
          alt="Our Achievement"
        />
      </div>
    </div>
  );
};
