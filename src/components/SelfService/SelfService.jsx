import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import "./SelfService.css";
import { SelfServiceBanner } from './SelfServiceBanner/SelfServiceBanner';
import { AutomateOlly } from "./AutomateOlly/AutomateOlly";
import { SelfServiceContent } from "./SelfServiceContent/SelfServiceContent";
import { SelfServiceCustomerHelp } from "./SelfServiceCustomerHelp/SelfServiceCustomerHelp";
import { SelfServiceCustomerAnswer } from "./SelfServicesCustomerAnswers/SelfServiceCustomerAnswer";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import PlanProject from "../PlanProject/PlanProject";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { ProductsFooter } from "../ProductsNewPage/ProductsFooter/ProductsFooter";


import {
    mountNavbar,
    unmountNavbar,
  } from "../../Redux/ProductNavbar/ProductNavAction";
  
export const SelfService = () => {

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
            <SelfServiceBanner />

            <AutomateOlly />

            <SelfServiceCustomerAnswer />

            <SelfServiceContent />

            <SelfServiceCustomerHelp />

            <StoriesSection />
            <Industries />
            <PlanProject />
            <OndemandSection />
            <PortFolio />
            <SeoblogSection />
            <Revamping />
            <TextDropdown />
            <ContectForm />

            <ProductsFooter />
        </div>
    )
}
