import React from "react";
import "./banner.css";
import Slider from "react-slick";
const CompanyLogo = () => {
  var settings = {
    // autoplay: true,
    dots:false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    // vertical:true,
    // fade: true,
    // arrows: true,
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

  return (
    <div className="bannerSection">
      <div className="curveImage"></div>

      <div className="bannerSlide">
        <Slider {...settings}>
          <div className="slideMainDiv">
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
          </div>
          <div className="slideMainDiv">
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
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CompanyLogo;
