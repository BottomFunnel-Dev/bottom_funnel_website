import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { CollaboratinTeamwork } from "./CollaboratinTeamwork/CollaboratinTeamwork";
import { CollaborationAbout } from "./CollaborationAbout/CollaborationAbout";
import { CollaborationBanner } from "./CollaborationBanner/CollaborationBanner";
import { CollaborationMidBanner } from "./CollaborationMidBanner/CollaborationMidBanner";
import { CollaborationOffers } from "./CollaborationOffers/CollaborationOffers";
import "./CollaborationPage.css";

import {
  mountNavbar,
  unmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";

export const CollaborationPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(mountNavbar());
    return () => {
      dispatch(unmountNavbar())
    };
  }, []);
  
  return (
    <div className="CollaborationPage-container">
      <CollaborationBanner />
      <CollaboratinTeamwork />
      <CollaborationAbout />
      <CollaborationOffers />
      <CollaborationMidBanner />
    </div>
  );
};
