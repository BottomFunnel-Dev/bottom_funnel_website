import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import MiddleText from "../Scoping-Session-Page/MiddleText";
import MidImages from "../Scoping-Session-Page/MidImages";
import RoundIconsText from "../Scoping-Session-Page/RoundIconsText";
import Footer from "../Scoping-Session-Page/Footer";
import Header from "../Scoping-Session-Page/Header";

export const Scoping = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <Header />
      <MiddleText />
      <MidImages />
      <RoundIconsText />
      <Footer />
    </div>
  );
};
