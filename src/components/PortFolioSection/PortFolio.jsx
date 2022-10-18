import React, { useState } from "react";
import "./portfolio.css";
import Slider from "react-slick";
import { BsGlobe, BsApple, BsArrowRight } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { IconContext } from "react-icons";

const PortFolio = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    accessibility: false,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 1,
    pauseOnHover: false,
    // swipeToSlide:true,
    vertical: true,
    autoplay: true,

    // cssEase: "linear",
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
  };
  // "mainSlide"

  const portfolioData = [
    {
      leftimg: "Images/portfolio/yanbal2.png",
      rightImg: "Images/portfolio/yanbal1.png",
      title: "Yanbal",
      tagline: "The Finest Beauty Products",
      description: "",
      frontend: " React, jquery, Mordenizr",
      backend: " Java, ASP.NET,",
      database: " CloudFront",
    },
    {
      leftimg: "Images/portfolio/bbgroup.png",
      rightImg: "Images/portfolio/blueberrygroup.png",
      title: "BlueBerry Group",
      tagline: "Passion for Excellence ",
      description: "",
      frontend: " React, jquery, Javascript",
      backend: " PHP, Ruby on Rails,",
      database: " CloudFare works",
    },
    {
      leftimg: "Images/portfolio/blueberry2.png",
      rightImg: "Images/portfolio/blueberry1.png",
      title: "Blueberry Travels",
      tagline: "Travel Website",
      description: "",
      frontend: " Jquery, GSAP, Mordenizr",
      backend: " PHP, PHP7,",
      database: " Amazon Route 53",
    },

    {
      leftimg: "Images/portfolio/jambo2.png",
      rightImg: "Images/portfolio/jambo1.png",
      title: "Jambo Shoppe",
      tagline: "Online Shopping Brand",
      description: "",
      frontend: " Jquery,Bootstrap",
      backend: " Java",
      database: " CloudFront",
    },

    {
      leftimg: "Images/portfolio/roshi.png",
      rightImg: "Images/portfolio/roshi1.png",
      title: "Roshi",
      tagline: "Lorem ipsum dolor sit",
      description: "",
      frontend: " jquery, Bootstrap",
      backend: " ASP.NET MVC, ASP.NET,",
      database: " CloudFront",
    },
    {
      leftimg: "Images/portfolio/nextholidays2.png",
      rightImg: "Images/portfolio/nextholidays1.png",
      title: "Next Holidays",
      tagline: "Travel Website",
      description: "",
      frontend: " Angular, jquery",
      backend: " ASP.NET, ASP.NET MVC",
      database: " Cloudflare.js, CDN.js",
    },
    {
      leftimg: "Images/portfolio/oncart2.png",
      rightImg: "Images/portfolio/oncart1.png",
      title: "On-cart",
      tagline: "Smart Shopping App",
      description: "",
      frontend: " Angular, jquery, Mordenizr",
      backend: " PHP, ASP.NET,",
      database: " CloudFront, AJAX Libraries API",
    },
    {
      leftimg: "Images/portfolio/travelflap.png",
      rightImg: "Images/portfolio/travelflap1.png",
      title: "Travelflap",
      tagline: "Fly With Us",
      description: "",
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
    },
    {
      leftimg: "Images/portfolio/mukunda.png",
      rightImg: "Images/portfolio/mukunda1.png",
      title: "Mukunda",
      tagline: "Global Trading Company",
      description: "",
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
    },
    {
      leftimg: "Images/portfolio/spjbg.png",
      rightImg: "Images/portfolio/spj1.png",
      title: "SPJ Electronics",
      tagline: "Global Market Leader in Electrical Industry",
      description: "",
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
    },
  ];
  return (
    <div className="portfolioSection">
      <h1>Our Work</h1>
      <Slider {...settings}>
        {portfolioData.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex ? "mainSlide activeMainSlide" : "mainSlide"
            }
          >
            <div className="leftAnime">
              <img src={item.leftimg} alt="" />
              <span className="portfolioText">
                <h1>{item.title}</h1>
                <h6>{item.tagline}</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  tempora sed veritatis, explicabo ducimus quos suscipit
                  voluptatem odio tempore voluptas facere laborum minima quo?
                  Dolorem veniam tenetur non harum quibusdam. Culpa nihil
                  accusamus quaerat voluptatibus, iste consequuntur aut! Beatae
                  quisquam obcaecati labore at deserunt fuga, nostrum atque
                  temporibus rem quas.
                </p>

                <div className="weblinks">
                  <h5>Tech Stack</h5>
                  <span className="techstack">
                    <p>
                      <strong>Database:</strong> {item.database}
                    </p>
                    <p>
                      <strong>Backend:</strong>
                      {item.backend}
                    </p>
                    <p>
                      <strong>Frontend:</strong> {item.frontend}
                    </p>
                  </span>

                  <div className="appstore">
                    <span>Available On</span>

                    <IconContext.Provider value={{ className: "webIcon" }}>
                      <BsApple />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: "webIcon" }}>
                      <AiFillAndroid />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: "webIcon" }}>
                      <BsGlobe />
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="bottomfunnelBranding">
                  <img src="Images/navbar/whitebottom.png" alt="" />
                </div>
                <p className="tagline">
                  <i>Build Your Brand Presence</i>
                </p>

                <button className="casestudy">
                  View Case Study{" "}
                  <IconContext.Provider value={{ className: "casestudyIcon" }}>
                    <BsArrowRight />
                  </IconContext.Provider>
                </button>
              </span>
            </div>
            <div className="rightAnime">
              <img src={item.rightImg} alt="" />

              <span className="mobileImage"> </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortFolio;
