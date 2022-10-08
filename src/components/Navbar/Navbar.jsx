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
  {
    dropContent: "About Us",
    navIcons: "Images/navbar/aboutImage/aboutus.png",
    path: "",
  },
  {
    dropContent: "Our Team",
    navIcons: "Images/navbar/aboutImage/ourteam.png",
    path: "",
  },
  {
    dropContent: "Career ",
    navIcons: "Images/navbar/aboutImage/career.png",
    path: "",
  },
  {
    dropContent: "Contact Us",
    navIcons: "Images/navbar/aboutImage/contactus.png",
    path: "",
  },
];
const whyBottom = [
  {
    dropContent: "Client Reviews",
    navIcons: "Images/navbar/aboutImage/clientreview.png",
    path: "",
  },
  {
    dropContent: "Our Clients",
    navIcons: "Images/navbar/aboutImage/ourclients.png",
    path: "",
  },
  {
    dropContent: "Awards and Memberships",
    navIcons: "Images/navbar/aboutImage/awards.png",
    path: "",
  },
  {
    dropContent: "Press and Media",
    navIcons: "Images/navbar/aboutImage/pressandmedia.png",
    path: "",
  },
];
const process = [
  {
    dropContent: "Our Development Process",
    navIcons: "Images/navbar/aboutImage/ourdevelopmentprocess.png",
    path: "",
  },
  {
    dropContent: "Engagement Models",
    navIcons: "Images/navbar/aboutImage/engagementmodels.png",
    path: "",
  },
  {
    dropContent: "Our Partners",
    navIcons: "Images/navbar/aboutImage/ourpartners.png",
    path: "",
  },
];

const webservice = [
  {
    dropContent: "PHP Development",
    navIcons: "Images/navbar/services/php.png",
    path: "",
  },
  {
    dropContent: "MERN Stack Development",
    navIcons: "Images/navbar/services/react.png",
    path: "",
  },
  {
    dropContent: "MEAN Stack Development",
    navIcons: "Images/navbar/services/angular.png",
    path: "",
  },
  {
    dropContent: "ASP.NET Development",
    navIcons: "Images/navbar/services/aspnet.png",
    path: "",
  },
  {
    dropContent: "Java Development",
    navIcons: "Images/navbar/services/javaimage.png",
    path: "",
  },
  {
    dropContent: "Python Development",
    navIcons: "Images/navbar/services/python.png",
    path: "",
  },
  {
    dropContent: "Ruby on Rails Development",
    navIcons: "Images/navbar/services/ruby.png",
    path: "",
  },
  {
    dropContent: "Golang Development",
    navIcons: "Images/navbar/services/golangimage.png",
    path: "",
  },
  {
    dropContent: "Javascript Development",
    navIcons: "Images/navbar/services/javascriptimage.png",
    path: "",
  },
];

const appservice = [
  {
    dropContent: "Andriod App Development",
    navIcons: "Images/navbar/services/andriod.png",
    path: "android",
  },
  {
    dropContent: "IOS App Development",
    navIcons: "Images/navbar/services/iosimage.png",
    path: "ios",
  },
  {
    dropContent: "Kotlin App Development",
    navIcons: "Images/navbar/services/kotlinimage.png",
    path: "",
  },
  {
    dropContent: "Flutter App Development",
    navIcons: "Images/navbar/services/flutter.png",
    path: "flutter",
  },
  {
    dropContent: "React Native App Development",
    navIcons: "Images/navbar/services/react.png",
    path: "reactnative",
  },
  {
    dropContent: "Xamarian App Development",
    navIcons: "Images/navbar/services/xamarian.png",
    path: "",
  },
  {
    dropContent: "Ionic App Development",
    navIcons: "Images/navbar/services/ionic.png",
    path: "ionic",
  },
  {
    dropContent: "Wearable App Development",
    navIcons: "Images/navbar/services/wearable.png",
    path: "",
  },
  {
    dropContent: "Mobile UI UX ",
    navIcons: "Images/navbar/services/mobileuxui.png",
    path: "",
  },
];
const digitalmarket = [
  {
    dropContent: "SEO Services",
    navIcons: "Images/navbar/services/seo.png",
    path: "seo",
  },
  {
    dropContent: "Local SEO Services",
    navIcons: "Images/navbar/services/localseo.png",
    path: "local-seo",
  },
  {
    dropContent: "SEM Services",
    navIcons: "Images/navbar/services/sem.png",
    path: "seo-sem",
  },
  {
    dropContent: "SMM Services",
    navIcons: "Images/navbar/services/smm.png",
    path: "seo-sem",
  },
  {
    dropContent: "PPC Management Services",
    navIcons: "Images/navbar/services/ppc.png",
    path: "seo-ppc",
  },
  {
    dropContent: "Guest Posting Services",
    navIcons: "Images/navbar/services/guest.png",
    path: "seo-guest-post",
  },
  {
    dropContent: "Link Building Services",
    navIcons: "Images/navbar/services/link.png",
    path: "seo-link-building",
  },
  {
    dropContent: "Email Marketing Services",
    navIcons: "Images/navbar/services/email.png",
    path: "",
  },
];
const trendingTech = [
  {
    dropContent: "Big Data Services",
    navIcons: "Images/navbar/services/bigdata.png",
    path: "",
  },
  {
    dropContent: "Blockchain Services",
    navIcons: "Images/navbar/services/blockchain.png",
    path: "",
  },
  {
    dropContent: "Machine Learning",
    navIcons: "Images/navbar/services/machinelearning.png",
    path: "",
  },
  {
    dropContent: "Artificial Intelligence",
    navIcons: "Images/navbar/services/ai.png",
    path: "",
  },
  {
    dropContent: "Data Analytics",
    navIcons: "Images/navbar/services/dataanalysis.png",
    path: "",
  },
  {
    dropContent: "Crypto currency Development",
    navIcons: "Images/navbar/services/crypto.png",
    path: "",
  },
  {
    dropContent: "Customised Web App Development",
    navIcons: "Images/navbar/services/customizedwebdev.png",
    path: "",
  },
  {
    dropContent: "Virtual Reality Development",
    navIcons: "Images/navbar/services/vr.png",
    path: "",
  },
  {
    dropContent: "Augmented Reality",
    navIcons: "Images/navbar/services/ar.png",
    path: "",
  },
  {
    dropContent: "NFT Development",
    navIcons: "Images/navbar/services/nft.png",
    path: "",
  },
  {
    dropContent: "IoT Development",
    navIcons: "Images/navbar/services/iot.png",
    path: "",
  },
  {
    dropContent: "StartUp Solutions",
    navIcons: "Images/navbar/services/startup.png",
    path: "",
  },
  {
    dropContent: "Enterprise Solutions",
    navIcons: "Images/navbar/services/enterprise.png",
    path: "",
  },
  {
    dropContent: "Metaverse Services",
    navIcons: "Images/navbar/services/guest.png",
    path: "",
  },
];

const industries = [
  {
    dropContent: "Education",
    navIcons: "Images/navbar/industriesImage/education.png",
    path: "",
  },
  {
    dropContent: "Game Development",
    navIcons: "Images/navbar/industriesImage/gamedev.png",
    path: "",
  },
  {
    dropContent: "E-commerce",
    navIcons: "Images/navbar/industriesImage/ecommerceimage.png",
    path: "",
  },
  {
    dropContent: "Video Streaming",
    navIcons: "Images/navbar/industriesImage/videostreaming.png",
    path: "",
  },
  {
    dropContent: "Sports Betting",
    navIcons: "Images/navbar/industriesImage/sportsbetting.png",
    path: "",
  },
  {
    dropContent: "IOT Development",
    navIcons: "Images/navbar/industriesImage/iot.png",
    path: "",
  },
  {
    dropContent: "Fitness",
    navIcons: "Images/navbar/industriesImage/fitness.png",
    path: "",
  },
  {
    dropContent: "Dating",
    navIcons: "Images/navbar/industriesImage/dateing.png",
    path: "",
  },
  {
    dropContent: "Cryptocurrency",
    navIcons: "Images/navbar/industriesImage/crypto.png",
    path: "",
  },
  {
    dropContent: "Social Media",
    navIcons: "Images/navbar/industriesImage/social media.png",
    path: "",
  },
  {
    dropContent: "Logistics",
    navIcons: "Images/navbar/industriesImage/logistics.png",
    path: "",
  },
];
const ondemand = [
  {
    dropContent: "Food Delivery App",
    navIcons: "Images/navbar/industriesImage/fooddeliveryimage.png",
    path: "food-delivery",
  },
  {
    dropContent: "On Demand Home Services",
    navIcons: "Images/navbar/industriesImage/ondemandhomeservices.png",
    path: "ondemandHomeServices",
  },
  {
    dropContent: "Alcohol Delivery App",
    navIcons: "Images/navbar/industriesImage/alcohol.png",
    path: "",
  },
  {
    dropContent: "Laundry Delivery",
    navIcons: "Images/navbar/industriesImage/laundry.png",
    path: "",
  },
  {
    dropContent: "Grocery Delivery App",
    navIcons: "Images/navbar/industriesImage/grocery.png",
    path: "",
  },
  {
    dropContent: "Beauty & Salon App",
    navIcons: "Images/navbar/industriesImage/beauty.png",
    path: "",
  },
  {
    dropContent: "Cannabis Delivery App",
    navIcons: "Images/navbar/industriesImage/cannabies.png",
    path: "",
  },
  {
    dropContent: "Marketplace Apps",
    navIcons: "Images/navbar/industriesImage/marketplace.png",
    path: "",
  },
  {
    dropContent: "Pickup & Delivery",
    navIcons: "Images/navbar/industriesImage/pickup.png",
    path: "",
  },
  {
    dropContent: "Pharmacy Delivery App",
    navIcons: "Images/navbar/industriesImage/pharmacy.png",
    path: "",
  },
  {
    dropContent: "Flower Delivery App",
    navIcons: "Images/navbar/industriesImage/flowerdelivery.png",
    path: "",
  },
  {
    dropContent: "Carpooling Apps",
    navIcons: "Images/navbar/industriesImage/carpooling.png",
    path: "",
  },
  {
    dropContent: "Taxi Booking App",
    navIcons: "Images/navbar/industriesImage/taxibooking.png",
    path: "",
  },
  {
    dropContent: "Tool Delivery App",
    navIcons: "Images/navbar/industriesImage/tool.png",
    path: "",
  },
  {
    dropContent: "Icecream Delivery App",
    navIcons: "Images/navbar/industriesImage/icecream.png",
    path: "",
  },
];
const backend = [
  {
    dropContent: "Node.js",
    navIcons: "Images/navbar/skills/nodejs.png",
    path: "",
  },
  { dropContent: ".NET", navIcons: "Images/navbar/skills/-net.png", path: "" },
  { dropContent: "PHP", navIcons: "Images/navbar/skills/php.png", path: "" },
  {
    dropContent: "Laravel",
    navIcons: "Images/navbar/skills/laravel.png",
    path: "",
  },
  {
    dropContent: "Python",
    navIcons: "Images/navbar/skills/python.png",
    path: "",
  },
  {
    dropContent: "Django",
    navIcons: "Images/navbar/skills/django.png",
    path: "",
  },
  {
    dropContent: "Flask",
    navIcons: "Images/navbar/skills/flask.png",
    path: "",
  },
  {
    dropContent: "MySQL",
    navIcons: "Images/navbar/skills/mysqlimage.png",
    path: "",
  },
  {
    dropContent: "Golang",
    navIcons: "Images/navbar/skills/golangimage.png",
    path: "",
  },
];
const frontend = [
  {
    dropContent: "React.js",
    navIcons: "Images/navbar/skills/react.png",
    path: "",
  },
  {
    dropContent: "Angular",
    navIcons: "Images/navbar/skills/angular.png",
    path: "",
  },
  {
    dropContent: "Vue.js",
    navIcons: "Images/navbar/skills/vue js.png",
    path: "",
  },
  {
    dropContent: "Ember.js",
    navIcons: "Images/navbar/skills/emberjs.png",
    path: "",
  },
  {
    dropContent: "jQuery",
    navIcons: "Images/navbar/skills/jquery.png",
    path: "",
  },
  {
    dropContent: "Next.js",
    navIcons: "Images/navbar/skills/nextjs.png",
    path: "",
  },
  {
    dropContent: "TypeScript",
    navIcons: "Images/navbar/skills/typescript.png",
    path: "",
  },
];
const mobile = [
  {
    dropContent: "IOS",
    navIcons: "Images/navbar/skills/iosimage.png",
    path: "",
  },
  {
    dropContent: "Android",
    navIcons: "Images/navbar/skills/android.png",
    path: "",
  },
  {
    dropContent: "React Native",
    navIcons: "Images/navbar/skills/react.png",
    path: "",
  },
  {
    dropContent: "Ionic",
    navIcons: "Images/navbar/skills/ionic.png",
    path: "",
  },
  {
    dropContent: "Java",
    navIcons: "Images/navbar/skills/javaimage.png",
    path: "",
  },
  {
    dropContent: "Flutter",
    navIcons: "Images/navbar/skills/flutter.png",
    path: "",
  },
  {
    dropContent: "Xamarin",
    navIcons: "Images/navbar/skills/xamarian.png",
    path: "",
  },
  {
    dropContent: "Swift",
    navIcons: "Images/navbar/skills/swift.png",
    path: "",
  },
  {
    dropContent: "Kotlin",
    navIcons: "Images/navbar/skills/kotlinimage.png",
    path: "",
  },
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
                  ? "Images/navbar/orangelogobottom.png"
                  : "Images/navbar/blacklogo.png"
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
                      <Link
                        onClick={homeHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={homeHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={homeHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="serviceDropdownContent">
                <h4>Digital Marketing</h4>
                <div className="listItems">
                  {digitalmarket.map((item, l) => (
                    // <Link
                    //   to={item.path}
                    //   onClick={solHoverOut}
                    //   className="servicesP"
                    // >
                    <div className="imageIconDivSection">
                      <div>
                        <img src={item.navIcons} alt="" />
                      </div>
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
                    </div>
                    // </Link>
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
                      <Link
                        onClick={solHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={serHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={serHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={skillHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={skillHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
                      <Link
                        onClick={skillHoverOut}
                        to={item.path}
                        className="linkP"
                      >
                        <p>{item.dropContent}</p>
                      </Link>
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
