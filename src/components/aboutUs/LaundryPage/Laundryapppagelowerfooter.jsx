import React from 'react'
import "./LaundryPage.css"

const Laundryapppagelowerfooter = () => {
  const Laundrywhydata = [
    {
      cardtitle: "100% Customzation",
      cardIcon: "Images/Marketplaceapp/icons/sett.png",
    },
    {
      cardtitle: "Highly Scalable",
      cardIcon: "Images/Marketplaceapp/icons/sett2.png",
    },
    {
      cardtitle: "Dedicated Support",
      cardIcon: "Images/Marketplaceapp/icons/sett3.png",
    },
    {
      cardtitle: "Global Solution",
      cardIcon: "Images/Marketplaceapp/icons/sett4.png",
    },
  ];

  return (
    <div style={{
      marginTop:"5%"
    }} className="laundrypagewhy">
      <div className="laundrypage-why">
        <h1>Why Choose Bottom Funnel As Your Laundry App Development Company?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi quod
          reiciendis totam minima pariatur. Maxime saepe officiis optio laborum
          quod quibusdam, qui libero, eaque assumenda, voluptatem eveniet a
          fuga?
        </p>
      </div>

      <div className="solutionsFeatures">
        {Laundrywhydata.map((item, index) => (
          <div key={index} className="whyCards">
            <div className="whycardIcon">
              {" "}
              <img src={item.cardIcon} alt="" />
            </div>

            <div className="solutionContent">
              <h5>{item.cardtitle}</h5>
              <p>{item.CardDescription}</p>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};


export default Laundryapppagelowerfooter

