import React from "react";
import { useState } from "react";
import "./webDevTechStack.css";
export const WebDevTechStack = () => {
  const [toggle, setToggle] = useState(0);
  const [toggleright, setToggleright] = useState(false);
  const techStackright = [
    {
      stackname: "PHP",
      frameworks: [
        {
          stackName: "cakephp",
          stackImage: "Images/webdevmain/frameworkIcons/php/cackphp.png",
          alt: "cackphp.png",
        },
        {
          stackName: "CodeIgniter",
          stackImage: "Images/webdevmain/frameworkIcons/php/Codeigniter.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Laravel",
          stackImage: "Images/webdevmain/frameworkIcons/php/Laravel.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Phppixie",
          stackImage: "Images/webdevmain/frameworkIcons/php/phpixie.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Slim",
          stackImage: "Images/webdevmain/frameworkIcons/php/Slim.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Symfony",
          stackImage: "Images/webdevmain/frameworkIcons/php/Symfony.png",
          alt: "Symfony.png",
        },
        {
          stackName: "Yii",
          stackImage: "Images/webdevmain/frameworkIcons/php/Yii.png",
          alt: "Yii.png",
        },
        {
          stackName: "Zend",
          stackImage: "Images/webdevmain/frameworkIcons/php/zend.png",
          alt: "zend.png",
        },
      ],
    },
    {
      stackname: "MERN",
      frameworks: [
        {
          stackName: "MongoDB",
          stackImage: "Images/webdevmain/frameworkIcons/mern/mongodb.png",
          alt: "mongodb.png",
        },
        {
          stackName: "Express",
          stackImage: "Images/webdevmain/frameworkIcons/mern/express.png",
          alt: "express.png",
        },
        {
          stackName: "React",
          stackImage: "Images/webdevmain/frameworkIcons/mern/react.png",
          alt: "react.png",
        },
        {
          stackName: "Node",
          stackImage: "Images/webdevmain/frameworkIcons/mern/nodejs.png",
          alt: "node.png",
        },
      ],
    },
    {
      stackname: "MEAN",
      frameworks: [
        {
          stackName: "MongoDB",
          stackImage: "Images/webdevmain/frameworkIcons/mean/mongodb.png",
          alt: "mongodb.png",
        },
        {
          stackName: "Express",
          stackImage: "Images/webdevmain/frameworkIcons/mean/express.png",
          alt: "express.png",
        },
        {
          stackName: "React",
          stackImage: "Images/webdevmain/frameworkIcons/mean/Angular.png",
          alt: "react.png",
        },
        {
          stackName: "Node",
          stackImage: "Images/webdevmain/frameworkIcons/mean/node.png",
          alt: "node.png",
        },
      ],
    },
    {
      stackname: "ASP.NET",
      frameworks: [
        {
          stackName: "Angular.js",
          stackImage: "Images/webdevmain/frameworkIcons/asp/Angularjs.png",
          alt: "Angularjs.png",
        },
        {
          stackName: ".NET 4.5",
          stackImage: "Images/webdevmain/frameworkIcons/asp/net.png",
          alt: "net.png",
        },
        {
          stackName: "MVC",
          stackImage: "Images/webdevmain/frameworkIcons/asp/mvc.png",
          alt: "mvc.png",
        },
        {
          stackName: "WCF",
          stackImage: "Images/webdevmain/frameworkIcons/asp/wcf.png",
          alt: "wcf.png",
        },
      ],
    },
    {
      stackname: "JAVA",
      frameworks: [
        {
          stackName: "Grails",
          stackImage: "Images/webdevmain/frameworkIcons/java/Grails.png",
          alt: "Grails.png",
        },
        {
          stackName: "GWT",
          stackImage: "Images/webdevmain/frameworkIcons/java/gwt.png",
          alt: "gwt.png",
        },
        {
          stackName: "Hibernate",
          stackImage: "Images/webdevmain/frameworkIcons/java/hibernate.png",
          alt: "hibernate.png",
        },
        {
          stackName: "JSF",
          stackImage: "Images/webdevmain/frameworkIcons/java/jsf.png",
          alt: "jsf.png",
        },
        {
          stackName: "play",
          stackImage: "Images/webdevmain/frameworkIcons/java/play.png",
          alt: "play.png",
        },
        {
          stackName: "Quarkus",
          stackImage: "Images/webdevmain/frameworkIcons/java/Quarkus.png",
          alt: "Quarkus.png",
        },
        {
          stackName: "Spring",
          stackImage: "Images/webdevmain/frameworkIcons/java/Spring.png",
          alt: "Spring.png",
        },
      ],
    },
  ];
  const techStackleft = [
    {
      stackname: "PHP",
      frameworks: [
        {
          stackName: "cakephp",
          stackImage: "Images/webdevmain/frameworkIcons/php/cackphp.png",
          alt: "cackphp.png",
        },
        {
          stackName: "CodeIgniter",
          stackImage: "Images/webdevmain/frameworkIcons/php/Codeigniter.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Laravel",
          stackImage: "Images/webdevmain/frameworkIcons/php/Laravel.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Phppixie",
          stackImage: "Images/webdevmain/frameworkIcons/php/phpixie.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Slim",
          stackImage: "Images/webdevmain/frameworkIcons/php/Slim.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Symfony",
          stackImage: "Images/webdevmain/frameworkIcons/php/Symfony.png",
          alt: "Symfony.png",
        },
        {
          stackName: "Yii",
          stackImage: "Images/webdevmain/frameworkIcons/php/Yii.png",
          alt: "Yii.png",
        },
        {
          stackName: "Zend",
          stackImage: "Images/webdevmain/frameworkIcons/php/zend.png",
          alt: "zend.png",
        },
      ],
    },
    {
      stackname: "MERN",
      frameworks: [
        {
          stackName: "MongoDB",
          stackImage: "Images/webdevmain/frameworkIcons/mern/mongodb.png",
          alt: "mongodb.png",
        },
        {
          stackName: "Express",
          stackImage: "Images/webdevmain/frameworkIcons/mern/express.png",
          alt: "express.png",
        },
        {
          stackName: "React",
          stackImage: "Images/webdevmain/frameworkIcons/mern/react.png",
          alt: "react.png",
        },
        {
          stackName: "Node",
          stackImage: "Images/webdevmain/frameworkIcons/mern/nodejs.png",
          alt: "node.png",
        },
      ],
    },
    {
      stackname: "MEAN",
      frameworks: [
        {
          stackName: "MongoDB",
          stackImage: "Images/webdevmain/frameworkIcons/mean/mongodb.png",
          alt: "mongodb.png",
        },
        {
          stackName: "Express",
          stackImage: "Images/webdevmain/frameworkIcons/mean/express.png",
          alt: "express.png",
        },
        {
          stackName: "React",
          stackImage: "Images/webdevmain/frameworkIcons/mean/Angular.png",
          alt: "react.png",
        },
        {
          stackName: "Node",
          stackImage: "Images/webdevmain/frameworkIcons/mean/node.png",
          alt: "node.png",
        },
      ],
    },
    {
      stackname: "ASP.NET",
      frameworks: [
        {
          stackName: "Angular.js",
          stackImage: "Images/webdevmain/frameworkIcons/asp/Angularjs.png",
          alt: "Angularjs.png",
        },
        {
          stackName: ".NET 4.5",
          stackImage: "Images/webdevmain/frameworkIcons/asp/net.png",
          alt: "net.png",
        },
        {
          stackName: "MVC",
          stackImage: "Images/webdevmain/frameworkIcons/asp/mvc.png",
          alt: "mvc.png",
        },
        {
          stackName: "WCF",
          stackImage: "Images/webdevmain/frameworkIcons/asp/wcf.png",
          alt: "wcf.png",
        },
      ],
    },
    {
      stackname: "JAVA",
      frameworks: [
        {
          stackName: "Grails",
          stackImage: "Images/webdevmain/frameworkIcons/java/Grails.png",
          alt: "Grails.png",
        },
        {
          stackName: "GWT",
          stackImage: "Images/webdevmain/frameworkIcons/java/gwt.png",
          alt: "gwt.png",
        },
        {
          stackName: "Hibernate",
          stackImage: "Images/webdevmain/frameworkIcons/java/hibernate.png",
          alt: "hibernate.png",
        },
        {
          stackName: "JSF",
          stackImage: "Images/webdevmain/frameworkIcons/java/jsf.png",
          alt: "jsf.png",
        },
        {
          stackName: "play",
          stackImage: "Images/webdevmain/frameworkIcons/java/play.png",
          alt: "play.png",
        },
        {
          stackName: "Quarkus",
          stackImage: "Images/webdevmain/frameworkIcons/java/Quarkus.png",
          alt: "Quarkus.png",
        },
        {
          stackName: "Spring",
          stackImage: "Images/webdevmain/frameworkIcons/java/Spring.png",
          alt: "Spring.png",
        },
      ],
    },
  ];

  const handleState = (element) => {
    console.log(element);
    setToggle(element);
    setToggleright(true);
  };

  return (
    <div className="webDevStack">
      <div className="devStackText">
        <h1>
          Robust <span>Technologies</span> we use for Web Development
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          laudantium quasi rerum error, dicta exercitationem recusandae tempora
          ducimus inventore libero!
        </p>
      </div>

      <div className="textStack">
        <div className="techStack">
          {techStackleft.map((item, index) => (
            <button
              style={
                index === toggle
                  ? {
                      background: "#ffe2da",
                      borderLeft: "5px solid #ef4c23",
                      color: "#ef4c23",
                    }
                  : {}
              }
              onMouseEnter={() => {
                handleState(index);
              }}
              key={index}
            >
              {item.stackname}
            </button>
          ))}
        </div>
        <div className="stackGrid">
          {techStackleft[toggle].frameworks.map((el, idx) => (
            <div className="stackframeworkCard" key={idx}>
              <div className="stackIcon">
                <img src={el.stackImage} alt={el.alt} />
              </div>
              <h6>{el.stackName}</h6>
            </div>
          ))}
        </div>  

        <div className="techStack">
          <button>PYTHON</button>
          <button>RUBY</button>
          <button>GOLANG</button>
          <button>JAVASCRIPT</button>
        </div>
      </div>
    </div>
  );
};
