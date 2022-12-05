import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Ionicadvantages } from "./Ionicadvantages";
import { Ionicbenefits } from "./Ionicbenefits";
import { Ionicdevelopmentbanner } from "./Ionicdevelopmentbanner";
import { Ionicservices } from "./Ionicservices";
import { Ionicwhy } from "./Ionicwhy";
import { Helmet } from "react-helmet";

export const Ionic = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div className="_Reactnative">
      <Helmet>
        <title>Ionic Application Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Ionic is the most convenient and fastest way to develop native applications for mobile devices. Ionic Capacitor is a cross-platform native bridge that allows you to turn any web project into a native iOS or Android mobile application."
        />
      </Helmet>
      <Ionicdevelopmentbanner />
      <Ionicservices />
      <Ionicbenefits />
      <Ionicadvantages />
      <Ionicwhy />
    </div>
  );
};
