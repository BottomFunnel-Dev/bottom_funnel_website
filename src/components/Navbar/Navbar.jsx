import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { IoIosPeople } from "react-icons/io";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import WhoWeAre from "./WhoWeAre";
import NavServices from "./NavServices";
import NavIndustries from "./NavIndustries";

const company = [
  { dropContent: "About Us" },
  { dropContent: "Our Team" },
  { dropContent: "Career " },
  { dropContent: "Contact Us" },
];
const whyBottom = [
  { dropContent: "Client Reviews" },
  { dropContent: "Our Clients" },
  { dropContent: "Our Partners" },
  { dropContent: "Awards and Memberships" },
  { dropContent: "Press and Media" },
];
const process = [
  { dropContent: "Our Development Process" },
  { dropContent: "Engagement Models" },
  { dropContent: "Our Partners" },
];

const webservice = [
  {
    dropContent: "PHP Development",
    navIcons: "Images/navbar/services/php.png",
  },
  {
    dropContent: "MERN Stack Development",
    navIcons: "Images/navbar/services/react.png",
  },
  {
    dropContent: "MEAN Stack Development",
    navIcons: "Images/navbar/services/angular.png",
  },
  {
    dropContent: "ASP.NET Development",
    navIcons: "Images/navbar/services/ASP.png",
  },
  {
    dropContent: "Java Development",
    navIcons: "Images/navbar/services/JAVA.png",
  },
  {
    dropContent: "Python Development",
    navIcons: "Images/navbar/services/python.png",
  },
  {
    dropContent: "Ruby on Rails Development",
    navIcons: "Images/navbar/services/ruby.png",
  },
  {
    dropContent: "Golang Development",
    navIcons: "Images/navbar/services/GOLANG.png",
  },
  {
    dropContent: "Javascript Development",
    navIcons: "Images/navbar/services/JAVASCRIPT.png",
  },
];

const appservice = [
  {
    dropContent: "Andriod App Development",
    navIcons: "Images/navbar/services/andriod.png",
  },
  {
    dropContent: "IOS App Development",
    navIcons: "Images/navbar/services/IOS.png",
  },
  {
    dropContent: "Kotlin App Development",
    navIcons: "Images/navbar/services/KOTLIN.png",
  },
  {
    dropContent: "Flutter App Development",
    navIcons: "Images/navbar/services/flutter.png",
  },
  {
    dropContent: "React Native App Development",
    navIcons: "Images/navbar/services/react.png",
  },
  {
    dropContent: "Xamarian App Development",
    navIcons: "Images/navbar/services/xamarian.png",
  },
  {
    dropContent: "Ionic App Development",
    navIcons: "Images/navbar/services/ionic.png",
  },
  {
    dropContent: "Wearable App Development",
    navIcons: "Images/navbar/services/wearable.png",
  },
  { dropContent: "Mobile UI UX ", navIcons: "Images/navbar/services/mobileuxui.png" },
];
const digitalmarket = [
  {
    dropContent: "SEO Services",
    path: "seo",
    navIcons: "Images/navbar/services/seo.png",
  },
  {
    dropContent: "Local SEO Services",
    path: "local-seo",
    navIcons: "Images/navbar/services/localseo.png",
  },
  {
    dropContent: "SEM Services",
    path: "seo-sem",
    navIcons: "Images/navbar/services/sem.png",
  },
  {
    dropContent: "SMM Services",
    path: "seo-sem",
    navIcons: "Images/navbar/services/smm.png",
  },
  {
    dropContent: "PPC Management Services",
    path: "seo-ppc",
    navIcons: "Images/navbar/services/ppc.png",
  },
  {
    dropContent: "Guest Posting Services",
    path: "seo-guest-post",
    navIcons: "Images/navbar/services/guest.png",
  },
  {
    dropContent: "Link Building Services",
    path: "seo-link-building",
    navIcons: "Images/navbar/services/link.png",
  },
  { dropContent: "Email Marketing Services",navIcons: "Images/navbar/services/email.png", path: "" },
];
const trendingTech = [
  { dropContent: "Big Data Services" ,navIcons: "Images/navbar/services/bigdata.png",},
  { dropContent: "Blockchain Services",navIcons: "Images/navbar/services/blockchain.png" },
  { dropContent: "Machine Learning",navIcons: "Images/navbar/services/machinelearning.png" },
  { dropContent: "Artificial Intelligence" ,navIcons: "Images/navbar/services/ai.png"},
  { dropContent: "Data Analytics" ,navIcons: "Images/navbar/services/dataanalysis.png"},
  { dropContent: "Crypto currency Development",navIcons: "Images/navbar/services/crypto.png" },
  { dropContent: "Customised Web App Development",navIcons: "Images/navbar/services/customizedwebdev.png" },
  { dropContent: "Virtual Reality Development" ,navIcons: "Images/navbar/services/vr.png"},
  { dropContent: "Augmented Reality" ,navIcons: "Images/navbar/services/ar.png"},
  { dropContent: "NFT Development",navIcons: "Images/navbar/services/nft.png" },
  { dropContent: "IoT Development",navIcons: "Images/navbar/services/iot.png" },
  { dropContent: "StartUp Solutions" ,navIcons: "Images/navbar/services/startup.png"},
  { dropContent: "Enterprise Solutions" ,navIcons: "Images/navbar/services/enterprise.png"},
  { dropContent: "Metaverse Services" ,navIcons: "Images/navbar/services/guest.png"},
];

const industries = [
  { dropContent: "Education",navIcons: "Images/navbar/industriesImage/education.png" },
  { dropContent: "Game Development" ,navIcons: "Images/navbar/industriesImage/gamedev.png"},
  { dropContent: "E-commerce",navIcons: "Images/navbar/industriesImage/ECOMMERCE.png" },
  { dropContent: "Video Streaming",navIcons: "Images/navbar/industriesImage/VIDEO STREAMING.png" },
  { dropContent: "Sports Betting" ,navIcons: "Images/navbar/industriesImage/sportsbetting.png"},
  { dropContent: "IOT Development",navIcons: "Images/navbar/industriesImage/iot.png" },
  { dropContent: "Fitness" ,navIcons: "Images/navbar/industriesImage/fitness.png"},
  { dropContent: "Dating",navIcons: "Images/navbar/industriesImage/DATING.png" },
  { dropContent: "Cryptocurrency" ,navIcons: "Images/navbar/industriesImage/crypto.png"},
  { dropContent: "Social Media",navIcons: "Images/navbar/industriesImage/social media.png" },
  { dropContent: "Logistics",navIcons: "Images/navbar/industriesImage/logistics.png" },
];
const ondemand = [
  { dropContent: "Food Delivery App",navIcons: "Images/navbar/industriesImage/FOODDELIVERY.png" },
  { dropContent: "On Demand Home Services" ,navIcons: "Images/navbar/industriesImage/ondemandhomeservices.png"},
  { dropContent: "Alcohol Delivery App",navIcons: "Images/navbar/industriesImage/alcohaldeliveryapp.png" },
  { dropContent: "Laundry Delivery",navIcons: "Images/navbar/industriesImage/laundry.png" },
  { dropContent: "Grocery Delivery App",navIcons: "Images/navbar/industriesImage/grocery.png" },
  { dropContent: "Beauty & Salon App" ,navIcons: "Images/navbar/industriesImage/beauty.png"},
  { dropContent: "Cannabis Delivery App" ,navIcons: "Images/navbar/industriesImage/cannabis.png"},
  { dropContent: "Marketplace Apps" ,navIcons: "Images/navbar/industriesImage/marketplace.png"},
  { dropContent: "Pickup & Delivery" ,navIcons: "Images/navbar/industriesImage/pickup.png"},
  { dropContent: "Pharmacy Delivery App" ,navIcons: "Images/navbar/industriesImage/pharmacy.png"},
  { dropContent: "Flower Delivery App",navIcons: "Images/navbar/industriesImage/flowerdelivery.png" },
  { dropContent: "Carpooling Apps",navIcons: "Images/navbar/industriesImage/carpooling.png" },
  { dropContent: "Taxi Booking App",navIcons: "Images/navbar/industriesImage/taxibooking.png" },
  { dropContent: "Tool Delivery App",navIcons: "Images/navbar/industriesImage/tool.png" },
  { dropContent: "Icecream Delivery App" ,navIcons: "Images/navbar/industriesImage/icecream.png"},
];
const backend = [
  { dropContent: "Node.js" ,navIcons: "Images/navbar/skills/nodejs.png"},
  { dropContent: ".NET" ,navIcons: "Images/navbar/skills/-net.png" },
  { dropContent: "PHP" ,navIcons: "Images/navbar/skills/php.png"},
  { dropContent: "Laravel" ,navIcons: "Images/navbar/skills/laravel.png"},
  { dropContent: "Python" ,navIcons: "Images/navbar/skills/python.png"},
  { dropContent: "Django" ,navIcons: "Images/navbar/skills/django.png"},
  { dropContent: "Flask" ,navIcons: "Images/navbar/skills/flask.png"},
  { dropContent: "MySQL",navIcons: "Images/navbar/skills/Mysql.png" },
  { dropContent: "Golang" ,navIcons: "Images/navbar/skills/GOLANG.png"},
];
const frontend = [
  { dropContent: "React.js" ,navIcons: "Images/navbar/skills/react.png"},
  { dropContent: "Angular" ,navIcons: "Images/navbar/skills/angular.png"},
  { dropContent: "Vue.js" ,navIcons: "Images/navbar/skills/vue js.png"},
  { dropContent: "Ember.js" ,navIcons: "Images/navbar/skills/emberjs.png"},
  { dropContent: "jQuery",navIcons: "Images/navbar/skills/jquery.png" },
  { dropContent: "Next.js" ,navIcons: "Images/navbar/skills/nextjs.png"},
  { dropContent: "TypeScript" ,navIcons: "Images/navbar/skills/typescript.png"},
];
const mobile = [
  { dropContent: "IOS" ,navIcons: "Images/navbar/skills/IOS.png"},
  { dropContent: "Android" ,navIcons: "Images/navbar/skills/andriod.png"},
  { dropContent: "React Native" ,navIcons: "Images/navbar/skills/react.png"},
  { dropContent: "Ionic",navIcons: "Images/navbar/skills/ionic.png" },
  { dropContent: "Java",navIcons: "Images/navbar/skills/JAVA.png" },
  { dropContent: "Flutter" ,navIcons: "Images/navbar/skills/flutter.png"},
  { dropContent: "Xamarin",navIcons: "Images/navbar/skills/xamarian.png" },
  { dropContent: "Swift",navIcons: "Images/navbar/skills/swift.png" },
  { dropContent: "Kotlin" ,navIcons: "Images/navbar/skills/KOTLIN.png"},
];

const Navbar = () => {
  const [aboutH, setAboutH] = useState(false);
  const [solution, setSolution] = useState(false);
  const [service, setService] = useState(false);
  const [handleCat, setHandleCat] = useState(true);
  const [skill, setSkill] = useState(false);
  const [navbar, setNabvar] = useState(false);

  const transition = useTransition(aboutH, {
    from: { x: 0, y: -40, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -40, opacity: 0 },
  });
  const transitionSol = useTransition(solution, {
    from: { x: 0, y: -40, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -40, opacity: 0 },
  });
  const serTransition = useTransition(service, {
    from: { x: 0, y: -40, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -40, opacity: 0 },
  });
  const skillTransition = useTransition(skill, {
    from: { x: 0, y: -40, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -40, opacity: 0 },
  });

  const skillHoverIn = () => {
    setSkill(true);
    setNabvar(true);
  };
  const skillHoverOut = () => {
    setSkill(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };
  const solHoverIn = () => {
    setSolution(true);
    setNabvar(true);
  };
  const solHoverOut = () => {
    setSolution(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };
  const serHoverIn = () => {
    setService(true);
    setNabvar(true);
  };
  const serHoverOut = () => {
    setService(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };
  const homeHoverIn = () => {
    setAboutH(true);
    setNabvar(true);
  };
  const homeHoverOut = () => {
    setAboutH(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };
  const blogHoverIn = () => {
    // setAboutH(true);
    setNabvar(true);
  };
  const blogHoverOut = () => {
    // setAboutH(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const handleCategory = () => {
    handleCat ? setHandleCat(false) : setHandleCat(true);
  };

  const navBackground = () => {
    if (window.scrollY > 1) {
      setNabvar(true);
    } else {
      setNabvar(false);
    }
  };
  window.addEventListener("scroll", navBackground);
  return (
    <div>
      <nav className={navbar ? "navbarSection active" : "navbarSection"}>
        <div className="logoSection">
          <Link to="/" className="logoText">
            <img
              src={
                navbar
                  ? "Images/navbar/orangebottom.png"
                  : "Images/navbar/whitebottom.png"
              }
              alt=""
            />
          </Link>
        </div>
        <input id="checkbox" type="checkbox" />
        <div id="bar">
          <label htmlFor="checkbox">
            <IconContext.Provider value={{ className: "bars" }}>
              <AiOutlineMenu />
            </IconContext.Provider>
          </label>
        </div>

        <div className="dropdownBar">
          <li onMouseEnter={homeHoverIn} onMouseLeave={homeHoverOut}>
            ABOUT
            {aboutH ? <WhoWeAre /> : ""}
          </li>
          <li onMouseEnter={solHoverIn} onMouseLeave={solHoverOut}>
            SERVICES
          </li>
          <li onMouseEnter={serHoverIn} onMouseLeave={serHoverOut}>
            INDUSTRIES
          </li>
          <li onMouseEnter={skillHoverIn} onMouseLeave={skillHoverOut}>
            SKILLS
          </li>
          <li onMouseEnter={blogHoverIn} onMouseLeave={blogHoverOut}>
            PRODUCTS
          </li>
          <li onMouseEnter={blogHoverIn} onMouseLeave={blogHoverOut}>
            PORTFOLIO
          </li>
          <li onMouseEnter={blogHoverIn} onMouseLeave={blogHoverOut}>
            BLOGS
          </li>

          <button className="callToAction">Hire a Talent</button>
          <button className="callToAction">Apply as a Talent</button>
        </div>
      </nav>

      {transition((style, item) =>
        item ? (
          <animated.div
            onMouseEnter={homeHoverIn}
            onMouseLeave={homeHoverOut}
            className="aboutNavVisible"
            style={style}
          >
            <div className="aboutDropdownSection">
              <div className="aboutDropdownContent">
                <h4>Company</h4>
                <div className="listItems">
                  {company.map((item, i) => (
                  <div className="imageIconDivSection">
                  <div>
                    <img src={item.navIcons} alt="" />
                  </div>
                  <p>{item.dropContent}</p>
                </div>
                  ))}
                </div>
              </div>
              <div className="aboutDropdownContent">
                <h4>Why Bottom Funnel</h4>
                <div className="listItems">
                  {whyBottom.map((item, i) => (
                    <div className="imageIconDivSection">
                    <div>
                      <img src={item.navIcons} alt="" />
                    </div>
                    <p>{item.dropContent}</p>
                  </div>
                  ))}
                </div>
              </div>
              <div className="aboutDropdownContent">
                <h4>Our Process</h4>
                <div className="listItems">
                  {process.map((item, i) => (
                    <div className="imageIconDivSection">
                    <div>
                      <img src={item.navIcons} alt="" />
                    </div>
                    <p>{item.dropContent}</p>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}

      {transitionSol((style, item) =>
        item ? (
          <animated.div
            onMouseEnter={solHoverIn}
            onMouseLeave={solHoverOut}
            className="solutionVisible"
            style={style}
          >
            <div className="dropdownSection">
              <div className="serviceDropdownContent">
                <h4>Web Development</h4>
                <div className="listItems">
                  {webservice.map((item, i) => (
                    <div className="imageIconDivSection">
                      <div>
                        <img src={item.navIcons} alt="" />
                      </div>
                      <p>{item.dropContent}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="serviceDropdownContent">
                <h4>App Development</h4>
                <div className="listItems">
                  {appservice.map((item, j) => (
                    <div className="imageIconDivSection">
                      <div>
                        <img src={item.navIcons} alt="" />
                      </div>
                      <p>{item.dropContent}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="serviceDropdownContent">
                <h4>Digital Marketing</h4>
                <div className="listItems">
                  {digitalmarket.map((item, l) => (
                    <Link
                      to={item.path}
                      onClick={solHoverOut}
                      className="servicesP"
                    >
                      <div className="imageIconDivSection">
                        <div>
                          <img src={item.navIcons} alt="" />
                        </div>
                        <p>{item.dropContent}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div id="serviceDropContent" className="serviceDropdownContent">
                <h4>Trending Technologies</h4>
                <div className="trendListItems">
                  {trendingTech.map((item, m) => (
                    <div className="trendImageIconDivSection">
                      <div>
                        <img src={item.navIcons} alt="" />
                      </div>
                      <p>{item.dropContent}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}

      {serTransition((style, item) =>
        item ? (
          <animated.div
            onMouseEnter={serHoverIn}
            onMouseLeave={serHoverOut}
            className="serviceVisible"
            style={style}
          >
            <div className="industryDropdown">
              <div className="industryContent">
                <h4>Industries We Serves</h4>
                <div className="industryListItems">
                  {industries.map((item, i) => (
                    <div className="imageIconDivSection">
                    <div>
                      <img src={item.navIcons} alt="" />
                    </div>
                    <p>{item.dropContent}</p>
                  </div>
                  ))}
                </div>
              </div>
              <div className="industryContent">
                <h4>On Demand Solutions</h4>
                <div className="industryListItems">
                  {ondemand.map((item, i) => (
                    <div className="imageIconDivSection">
                    <div>
                      <img src={item.navIcons} alt="" />
                    </div>
                    <p>{item.dropContent}</p>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}



      {skillTransition((style, item) =>
        item ? (
          <animated.div
            onMouseEnter={skillHoverIn}
            onMouseLeave={skillHoverOut}
            className="skillVisible"
            style={style}
          >
            <div className="dropdownSection">
              <div className="serviceDropdownContent">
                <h4>Backend</h4>
                <div className="listItems">
                  {backend.map((item, i) => (
                    <div className="imageIconDivSection">
                    <div>
                      <img src={item.navIcons} alt="" />
                    </div>
                    <p>{item.dropContent}</p>
                  </div>
                  ))}
                </div>
              </div>
              <div className="serviceDropdownContent">
                <h4>Frontend</h4>
                <div className="listItems">
                  {frontend.map((item, j) => (
                   <div className="imageIconDivSection">
                   <div>
                     <img src={item.navIcons} alt="" />
                   </div>
                   <p>{item.dropContent}</p>
                 </div>
                  ))}
                </div>
              </div>
              <div className="serviceDropdownContent">
                <h4>mobile</h4>
                <div className="listItems">
                {mobile.map((item, j) => (
                   <div className="imageIconDivSection">
                   <div>
                     <img src={item.navIcons} alt="" />
                   </div>
                   <p>{item.dropContent}</p>
                 </div>
                  ))}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Navbar;
