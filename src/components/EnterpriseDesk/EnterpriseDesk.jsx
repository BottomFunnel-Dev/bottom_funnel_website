import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { EnterpriseDeskBanner } from './EnterpriseDeskBanner';
import { EnterpriseEngage } from "./EnterpriseEngage";
import { EnterpriseDeskService } from "./EnterpriseDeskService";
import { CustomerTrust } from "../ProductsNewPage/CustomerTrust/CustomerTrust";
import Revamping from "../revamping/Revamping";
import StoriesSection from "../StoriesSection/StoriesSection";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import ContectForm from "../ContectForm/ContectForm";
import { ProductsFooter } from "../ProductsNewPage/ProductsFooter/ProductsFooter";


import {
  mountNavbar,
  unmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";

export const EnterpriseDesk = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(mountNavbar());
    return () => {
      dispatch(unmountNavbar())
    };
  }, []);
  
  return (
    <div>
        <EnterpriseDeskBanner/>
        <EnterpriseEngage/>
        <EnterpriseDeskService/>

        <CustomerTrust/>

        <Revamping/>

        <StoriesSection/>

        <GetStarted/>

        <ContectForm/>

        <ProductsFooter/>
    </div>
  )
}
