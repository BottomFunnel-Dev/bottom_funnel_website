import React from "react";
import "./homeServices.css";
import Slider from "react-slick";

const HomeServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const homeService = [
    {
      serviceimage: "Images/ondemandHome/carpenter.png",
      serviceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cumque facilis voluptatum, quisquam tempora ex error incidunt tempore laborum suscipit reprehenderit eius aliquam! In ullam pariatur assumenda",
      serviceName: "Carpenter",
    },
    {
      serviceimage: "Images/ondemandHome/cleaning.png",
      serviceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cumque facilis voluptatum, quisquam tempora ex error incidunt tempore laborum suscipit reprehenderit eius aliquam! In ullam pariatur assumenda",
      serviceName: " Cleaning",
    },
    {
      serviceimage: "Images/ondemandHome/washing.png",
      serviceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cumque facilis voluptatum, quisquam tempora ex error incidunt tempore laborum suscipit reprehenderit eius aliquam! In ullam pariatur assumenda",
      serviceName: "Beauty & Salon",
    },
    {
      serviceimage: "Images/ondemandHome/cleaning.png",
      serviceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cumque facilis voluptatum, quisquam tempora ex error incidunt tempore laborum suscipit reprehenderit eius aliquam! In ullam pariatur assumenda",
      serviceName: "Cleaning",
    },
    {
      serviceimage: "Images/ondemandHome/carpenter.png",
      serviceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cumque facilis voluptatum, quisquam tempora ex error incidunt tempore laborum suscipit reprehenderit eius aliquam! In ullam pariatur assumenda",
      serviceName: "Carpenter",
    },
    {
      serviceimage: "Images/ondemandHome/washing.png",
      serviceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cumque facilis voluptatum, quisquam tempora ex error incidunt tempore laborum suscipit reprehenderit eius aliquam! In ullam pariatur assumenda",
      serviceName: "Beauty & Salon",
    },
  ];

  return (
    <div className="ondemandHomeServices">
      <div>
        <Slider {...settings}>
          {homeService.map((item, i) => (
            <div key={i} className="homeServices">
              <div>
                <img src={item.serviceimage} alt="" />
                <h5>{item.serviceName}</h5>
                <p>{item.serviceDescription}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeServices;
