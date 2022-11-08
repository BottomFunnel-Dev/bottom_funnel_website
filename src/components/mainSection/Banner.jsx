import React from "react";
import "./banner.css";
import Slider from "react-slick";
const CompanyLogo = () => {
  var settings = {
    autoplay: true,
    dots: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const banner = [
    {
      title: "Mobile App Development",
      bannerImage: "Images/banner/app dev.gif",
      desc: "Connect to your customers in real time with the latest in mobile app development.",
    },
    {
      title: "Custom Software Development",
      bannerImage: "Images/banner/customsde.gif",
      desc: "Turn your company’s opportunities into realities with enterprise-level custom software development.",
    },
    {
      title: "Digital Marketing",
      bannerImage: "Images/banner/digitalmarketing.gif",
      desc: "Break through the noise and grow your business with the power of digital marketing",
    },
    {
      title: "Web Development",
      bannerImage: "Images/banner/web dev.gif",
      desc: "Developing websites that develop your business",
    },
    {
      title: "Software Product Development",
      bannerImage: "Images/banner/app dev.gif",
      desc: "Don’t settle for anything less, get the finest software product for you company.",
    },
  ];

  return (
    <div className="bannerSection">
      {/* <div className="curveImage"></div> */}

      <div className="bannerSlide">
        <Slider {...settings}>
          {banner.map((item, i) => (
            <div key={i} className="slideMainDiv">
              <div className="slideInnerContent">
                <div className="textContent">
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>Get Started</button>
                  </div>
                </div>
                <div className="imageContent">
                  <div className="imageInner">
                    <img src={item.bannerImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="slideMainDiv">
            <div className="slideInnerContent">
              <div className="textContent">
                <div>
                  <h1>App Development</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio commodi recusandae alias vero provident incidunt
                    sapiente nisi repellendus ut officiis?
                  </p>
                  <button>Get Started</button>
                </div>
              </div>
              <div className="imageContent">
                <div className="imageInner">
                  <img src="Images/image/1.png" alt="" />
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="slideMainDiv">
            <div className="slideInnerContent">
              <div className="textContent">
                <div>
                  <h1>App Development</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio commodi recusandae alias vero provident incidunt
                    sapiente nisi repellendus ut officiis?
                  </p>
                  <button>Get Started</button>
                </div>
              </div>
              <div className="imageContent">
                <div className="imageInner">
                  <img src="Images/image/1.png" alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default CompanyLogo;
