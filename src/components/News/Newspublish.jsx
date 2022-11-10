import React from "react";
import "./Newspublish.css";

export default function Newspublish() {
  const publish = [
    {
      img: "Images/News/target.png",
      h4: "Heavy personalization",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!",
    },
    {
      img: "Images/News/network.png",
      h4: "Social media integration",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!",
    },
    {
      img: "Images/News/ebook.png",
      h4: "Reader engagement techniques",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!",
    },
    {
      img: "Images/News/cloud.png",
      h4: "Offline view",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!",
    },
    {
      img: "Images/News/payment-method.png",
      h4: "Payment integrated",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!",
    },
    {
      img: "Images/News/location.png",
      h4: "Localization",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!",
    },
    {
      img: "Images/News/share.png",
      h4: "Social media sharing",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!",
    },
  ];
  return (
    <div className="newspublishdiv">
      <div className="funnelImage">
        <img src="Images/News/funnelleft.png" alt="" />
      </div>

      <div className="newspublishsub">
        {publish.map((item) => {
          return (
            <div>
              <div className="sznewspublish">
                <div className="sznewspublishimage">
                  <img src={item.img} />{" "}
                </div>
                <div className="newspublishhead">
                  <h4>{item.h4}</h4>{" "}
                </div>
              </div>
              <div className="newspara">
                <p>{item.p}</p>
              </div>
            </div>
          );
        })}

        {/* <div className='sznewspublishimage'> 
              <img src='Images/Politics/hand.png' />
           </div>
          <div className='newspublishhead'>     <h4>newspublish engagement</h4></div>      
         
           </div>
           <div className='volenterpara'> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem iste praesentium eligendi officiis. Est quia dolor rerum eligendi unde sunt voluptas quo cumque. Nemo aspernatur omnis expedita impedit quaerat!</p>
           </div> */}

        {/* </div> */}
      </div>
    </div>
  );
}
