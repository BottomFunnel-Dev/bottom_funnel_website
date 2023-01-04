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
import { CustomerTrust } from "../ProductsNewPage/CustomerTrust/CustomerTrust";
import Revamping from "../revamping/Revamping";
import StoriesSection from "../StoriesSection/StoriesSection";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import ContectForm from "../ContectForm/ContectForm";
import { ProductsFooter } from "../ProductsNewPage/ProductsFooter/ProductsFooter";

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

      <CustomerTrust/>

      <Revamping/>

      <StoriesSection/>

      <GetStarted/>

      <ContectForm/>

      <ProductsFooter/>

    </div>
  );
};
