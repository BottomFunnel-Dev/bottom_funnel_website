import React from "react";
import "./Flutteradvantages.css";
import { FcDocument } from "react-icons/fc";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { TbPlug } from "react-icons/tb";
import { MdOutlineArchitecture } from "react-icons/md";

export const Flutteradvantages = () => {
  return (
    <div className="_Flutteradvantagesmaindiv">
      <div className="_Flutteradvantages">
        <h1>
          Advantages of Using <i style={{ color: "#EF4C23" }}>Flutter</i> App
          Developement
        </h1>
      </div>
      <div className="_Flutteradvantages1">
        <div className="_Flutterpeach">
          <div className="_Flutterlogotext">
            <span className="_Flutterhi">
              <HiOutlineDocumentText className="_Flutterlogo" />
            </span>
            <span className="_Flutteradtext">Develop applications quickly</span>
          </div>
          <div>
            Flurry has made it easier for you to develop the cross-platform app
            that runs on both Android and iOS with a single code base.
          </div>
        </div>
        <div className="_Fluttergray">
          <div className="_Flutterlogotext">
            <span className="_Flutterhi">
              <IoIosPaper className="_Flutterlogo" />
            </span>
            <span className="_Flutteradtext">
              Build your app at a lower cost
            </span>
          </div>
          <div>
            Bottom funnel is a native app development company that specializes
            in building world-class applications that are both user-friendly and
            efficient.
          </div>
        </div>
        <div className="_Fluttergray">
          <div className="_Flutterlogotext">
            <span className="_Flutterhi">
              <TbPlug className="_Flutterlogo" />
            </span>
            <span className="_Flutteradtext">Leverage easy plugins</span>
          </div>
          <div>
            Flutter is the new kid in town and has taken over. With so many
            amazing apps being created with the help of this framework, you can
            see why it's so loved by developers.
          </div>
        </div>
        <div className="_Flutterpeach">
          <div className="_Flutterlogotext">
            <span className="_Flutterhi">
              <AiTwotoneSetting className="_Flutterlogo" />
            </span>
            <span className="_Flutteradtext">Reduce testing efforts</span>
          </div>
          <div>
            The team uses cutting-edge tools like BDD and TDD, ensuring that
            quality assurance gets done right from day one.
          </div>
        </div>
        <div className="_Flutterpeach">
          <div className="_Flutterlogotext">
            <span className="_Flutterhi">
              <FaPencilRuler className="_Flutterlogo" />
            </span>
            <span className="_Flutteradtext">Simple UI</span>
          </div>
          <div>
            A user interface has a lot of moving parts, and they have to all
            come together in the company's image.
          </div>
        </div>
        <div className="_Fluttergray">
          <div className="_Flutterlogotext">
            <span className="_Flutterhi">
              <MdOutlineArchitecture className="_Flutterlogo" />
            </span>
            <span className="_Flutteradtext">Modular Architecture</span>
          </div>
          <div>
            With the hot-reload feature, developers can see code changes in real
            time. Imagine you found a bug while using an app, and with Flutter
            you can fix it immediately.
          </div>
        </div>
      </div>
    </div>
  );
};
