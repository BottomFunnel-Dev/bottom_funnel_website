import React from "react";
import { ClientBanner } from "./ClientBanner/ClientBanner";
import { ClientEmpower } from "./ClientEmpower/ClientEmpower";
import { ClientTrust } from "./ClientTrust/ClientTrust";
import "./OurClient.css";
import { OurClientbrand } from "./OurClientbrand/OurClientbrand";

export const OurClient = () => {
  const branddata = {
    title: "Brands",
    cardsData: [
      {
        name: "Atlassian",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/atlassian.png",
      },
      {
        name: "Box",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/box-com.png",
      },
      {
        name: "Databricks",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/databricks-com.png",
      },
      {
        name: "Dropbox",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/dropbox.png",
      },
      {
        name: "Slack",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/slack-com.png",
      },
      {
        name: "Postman",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/postman.png",
      },
    ],
  };

  const startupdata = {
    title: "Start Ups",
    cardsData: [
      {
        name: "GitHub",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/github.png",
      },
      {
        name: "Invision",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/invision.png",
      },
      {
        name: "Lucid",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/lucid.png",
      },
      {
        name: "Miro",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/miro.png",
      },
      {
        name: "OneTrust",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/onetrust.png",
      },
      {
        name: "pendo",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/pendo.png",
      },
    ],
  };

  const enterprisedata = {
    title: "Enterprises",
    cardsData: [
      {
        name: "Entrata",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/entrata.png",
      },
      {
        name: "Rapyd",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/rapyd.png",
      },
      {
        name: "Webflow",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/Webflow.png",
      },
      {
        name: "Mambu",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/Mambu.png",
      },
      {
        name: "Shippo",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/shippo.png",
      },
      {
        name: "Socure",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam nulla ratione, eaque veniam atque deleniti eos provident, esse facilis quisquam numquam hic voluptate dolorem, mollitia quia optio! Itaque, voluptatibus!",
        image: "Images/ourclientPhotos/CompanyLogo/socure.png",
      },
    ],
  };

  return (
    <div style={{ color: "#393939" }}>
      <ClientBanner />
      <ClientEmpower />
      <OurClientbrand data={branddata} />
      <OurClientbrand data={startupdata} />
      <OurClientbrand data={enterprisedata} />
      <ClientTrust />
    </div>
  );
};
