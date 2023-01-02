import React from 'react'
import { useState } from 'react';
import './telecommunicationsCustomerApp.css'

export const TelecommunicationsCustomerApp = () => {
  const [imageChange, setImageChange] = useState(
    "Images/Telecommunication/Customer-App/Default-model.png"
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const TelecommunicationsCustomerAppData = [
    {
      img: "Images/Telecommunication/Customer-App/Default-model.png",
      icon: "Images/Telecommunication/Icons/Rectangle34624094.png",
      title: "Recharge Your Prepaid Mobile Phone",
      para: "You can add money and choose a plan for your prepaid mobile phone. This way you can make more of your payments from one place.",
    },

    {
      img: "Images/Telecommunication/Customer-App/Default-model-1.png",
      icon: "Images/Telecommunication/Icons/Rectangle 34624094-1.png",
      title: "Pay Bills",
      para: "Bill payment is a facillity provided to the customer to make their utility payment online throughdigital banking. The cstomer has diffrent utility payments like Mobile bill, Water bill etc.",
    },

    {
      img: "Images/Telecommunication/Customer-App/Default-model.png",
      icon: "Images/Telecommunication/Icons/Rectangle-34624094-2.png",
      title: "Port Your Network",
      para: "Seamlessly move your current number from any mobile operator onto the any network with the MNP process online or in the nearest any Store to enjoy the ultimate network experiences on your current number itself.",
    },
  ];
  return (
    <div className="telecommunications-customer-app-container-main">

      <div className="telecommunications-customer-app-img-main-div-left">

        <div className="telecommunications-customer-app-img-frame-left">
          <img src={imageChange} alt="" />
        </div>
      </div>

      <div className='telecommunications-customer-app-box-main-div-right'>
            
            <div className="telecommunications-customer-app-title">
            <h1>Customer App</h1>
            </div>
        <div className="telecommunications-customer-app-box-content-div-right">
          {TelecommunicationsCustomerAppData.map((e) => {
            return (
              <div
                className="telecommunications-customer-app-cards-div-right"
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.img);
                }}
              >
                
                <div className='telecommunications-customer-app-text-div-right'>
                  <h3>{e.title}</h3>
                  <div className="telecommunications-customer-app-right-box-cards-icon">
                  <img src={e.icon} alt="" />
                </div>
                  <p>{e.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
