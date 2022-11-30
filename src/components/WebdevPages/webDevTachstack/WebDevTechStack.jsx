import React from "react";
import { useState } from "react";
import { StackGrid } from "./StackGrid";
import "./webDevTechStack.css";
export const WebDevTechStack = () => {
  // const [toggle, setToggle] = useState(0);
  // const [righttoggle, setrighttoggle] = useState(0);

  const initialData = {
    stackname: "Python",
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
  };

  const [stackdata, setStackdata] = useState(initialData);

  const techStackright = [
    {
      stackname: "Python",
      
      frameworks: [
        {
          stackName: "Django",
          stackImage: "Images/webdevmain/frameworkIcons/python/Django.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Bottle",
          stackImage: "Images/webdevmain/frameworkIcons/python/bottle.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Cherrypy",
          stackImage: "Images/webdevmain/frameworkIcons/python/cherrypy.png",
          alt: "cackphp.png",
        },
        {
          stackName: "Flask",
          stackImage: "Images/webdevmain/frameworkIcons/python/flask.png",
          alt: "cackphp.png",
        },
        {
          stackName: "WEB2PY",
          stackImage: "Images/webdevmain/frameworkIcons/python/web2py.png",
          alt: "cackphp.png",
        },
      ],
    },
    {
      stackname: "Ruby",
      frameworks: [
        {
          stackName: "Cuba",
          stackImage: "Images/webdevmain/frameworkIcons/ruby/cuba.png",
          alt: "cuba.png",
        },
        {
          stackName: "Hanami",
          stackImage: "Images/webdevmain/frameworkIcons/ruby/Hanami.png",
          alt: "Hanami.png",
        },
        {
          stackName: "Padrino",
          stackImage: "Images/webdevmain/frameworkIcons/ruby/padrino.png",
          alt: "padrino.png",
        },
        {
          stackName: "Rails",
          stackImage: "Images/webdevmain/frameworkIcons/ruby/rails.png",
          alt: "rails.png",
        },
        {
          stackName: "Roda",
          stackImage: "Images/webdevmain/frameworkIcons/ruby/roda.png",
          alt: "roda.png",
        },
        {
          stackName: "Sinatra",
          stackImage: "Images/webdevmain/frameworkIcons/ruby/sinatra.png",
          alt: "sintra.png",
        },
      ],
    },
    {
      stackname: "Golang",
      frameworks: [
        {
          stackName: "Echo",
          stackImage: "Images/webdevmain/frameworkIcons/golang/echo.png",
          alt: "echo.png",
        },
        {
          stackName: "Gin",
          stackImage: "Images/webdevmain/frameworkIcons/golang/gin.png",
          alt: "gin.png",
        },
        {
          stackName: "Gorilla",
          stackImage: "Images/webdevmain/frameworkIcons/golang/gorilla.png",
          alt: "gorilla.png",
        },
        {
          stackName: "Iris Golang",
          stackImage: "Images/webdevmain/frameworkIcons/golang/irisgolang.png",
          alt: "irisgolang.png",
        },
        {
          stackName: "Revel",
          stackImage: "Images/webdevmain/frameworkIcons/golang/revel.png",
          alt: "revel.png",
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

  const handleState = (idx, el) => {
    // setToggle(idx);
    setStackdata(el);
  };
  const handleRightState = (idx, el) => {
    // setrighttoggle(idx);
    setStackdata(el);
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
              onMouseEnter={() => {
                handleState(index, item);
              }}
              key={index}
            >
              {item.stackname}
            </button>
          ))}
        </div>

        <StackGrid gridData={stackdata} />

        <div className="techStack">
          {techStackright.map((rightitem, rightindex) => (
            <button
              // style={
              //   rightindex === toggle
              //     ? {
              //         background: "#ffe2da",
              //         borderLeft: "5px solid #ef4c23",
              //         color: "#ef4c23",
              //       }
              //     : {}
              // }
              onMouseEnter={() => {
                handleRightState(rightindex, rightitem);
              }}
              key={rightindex}
            >
              {rightitem.stackname}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
