import React from "react";
import "./Ionicadvantages.css";
import { FcDocument } from "react-icons/fc";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { TbPlug } from "react-icons/tb";
import { MdOutlineArchitecture } from "react-icons/md";

export const Ionicadvantages = () => {
  return (
    <div className="_Ionicadvantagesmaindiv">
      <div className="_Ionicadvantages">
        <h1>
          Advantages of Using <i style={{ color: "#498aff" }}>Ionic</i> App
          Developement
        </h1>
      </div>
      <div className="_Ionicadvantages1">
        <div className="_Ionicpeach">
          <div className="_Ioniclogotext">
            <span className="_Ionichi">
              <HiOutlineDocumentText className="_Ioniclogo" />
            </span>
            <span className="_Ionicadtext">Developer-friendly</span>
          </div>
          <div>
            We have experience building custom apps, but leveraging Ionic's
            framework is easier and faster than starting each project from
            scratch.
          </div>
        </div>
        <div className="_Ionicgray">
          <div className="_Ioniclogotext">
            <span className="_Ionichi">
              <IoIosPaper className="_Ioniclogo" />
            </span>
            <span className="_Ionicadtext">Equipped with an entire suite</span>
          </div>
          <div>
            In addition to frameworks, the Ionic team is constantly testing,
            perfecting, and releasing new Ionic development APIs that work
            across platforms.
          </div>
        </div>
        <div className="_Ionicgray">
          <div className="_Ioniclogotext">
            <span className="_Ionichi">
              <TbPlug className="_Ioniclogo" />
            </span>
            <span className="_Ionicadtext">Front-end agnostic</span>
          </div>
          <div>
            Ionic 3 forces us to use Angular and restricts React, but that's a
            no-go. We have all heard these buzz words in the market, but before
            we say something about this let us understand something more.
          </div>
        </div>
        <div className="_Ionicpeach">
          <div className="_Ioniclogotext">
            <span className="_Ionichi">
              <AiTwotoneSetting className="_Ioniclogo" />
            </span>
            <span className="_Ionicadtext">
              Trusted by companies small and large
            </span>
          </div>
          <div>
            Ionic is a name that you probably have heard of these days, and for
            good reason. It's one of the most trusted names in marketing
            automation software and its powerful features make it ideal for any
            size business.
          </div>
        </div>
        <div className="_Ionicpeach">
          <div className="_Ioniclogotext">
            <span className="_Ionichi">
              <FaPencilRuler className="_Ioniclogo" />
            </span>
            <span className="_Ionicadtext">
              Fueled by a developer-centric community
            </span>
          </div>
          <div>
            Ionic is an open source platform, meaning the original source code
            is made freely available. And, because it's open source, the
            developer community has embraced helping each other, solving
            challenges, and sharing ideas.
          </div>
        </div>
        <div className="_Ionicgray">
          <div className="_Ioniclogotext">
            <span className="_Ionichi">
              <MdOutlineArchitecture className="_Ioniclogo" />
            </span>
            <span className="_Ionicadtext">Text-to-speech</span>
          </div>
          <div>
            Ionic is a powerful platform that allows you to build online
            experiences that are intuitive, engaging, and immersive. It has been
            used by leading brands like Lyft, GMail, and Apple.
          </div>
        </div>
      </div>
    </div>
  );
};
