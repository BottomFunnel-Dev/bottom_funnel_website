import React from "react";
import { useState } from "react";
import "./SocialMediaAdminPannel.css";

export const SocialMediaAdminPannel = () => {
  const socialmediadminpanneldata = [
    {
      logo: "Images/socialmedia/bannesbackground/Component41.png",
      image: "Images/socialmedia/Adminpanelscreens/dashboard.png",
      htxt: "Dashboard",
      stxt: "Dashboards are an effective way of visualizing and understanding data.",
    },

    {
      logo: "Images/socialmedia/bannesbackground/Group339972.png",
      image: "Images/socialmedia/Adminpanelscreens/Profile.png",
      htxt: "Profile Management",
      stxt: "It is used to create business profile, maintain it and manage users and groups.",
    },

    {
      logo: "Images/socialmedia/bannesbackground/Component43.png",
      image: "Images/socialmedia/Adminpanelscreens/Reorts.png",
      htxt: "Reports",
      stxt: "Reporting is a crucial part in any business, and we realize that.",
    },

    {
      logo: "Images/socialmedia/bannesbackground/icon.png",
      image: "Images/socialmedia/Adminpanelscreens/Inshigts.png",
      htxt: "Insights",
      stxt: "Social media is changing the way we think about marketing.",
    },
  ];

  const [imageChange, setImageChange] = useState(
    "Images/socialmedia/Adminpanelscreens/dashboard.png",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  return (
    <div className="socialmediaadminmainboxing">
      <div className="socialmedialeftboxafterflexing">
        <h2>Admin Dashboard</h2>
        <p>
          The Admin dashboard is a handy way to stay informed about Review Board
          projects, while also getting quick access to some server information
          and shortcuts. With a clear layout, this page makes it easy for you to
          find what you're looking for.
        </p>
        <div className="socialmediainsiderflexboxadminpannel">
          {socialmediadminpanneldata.map((e) => {
            return (
              <div
                className="socialmediaadminmaperbox"
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <div>
                  <img height="50px" src={e.logo} alt="logo" />
                </div>
                <div className="socialmeditxtmapperbox">
                  <h4>{e.htxt}</h4>
                  <p>{e.stxt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="afterflexingsocialmediarightbox">
        <img src={imageChange} alt="" />
      </div>
    </div>
  );
};
