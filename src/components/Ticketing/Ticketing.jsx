import { SimplifiedTicketting } from "./SimplifiedTicketting/SimplifiedTicketting";
import { TicketingBanner } from "./TicketingBanner/TicketingBanner";
import { TicketingServices } from "./TicketingServices/TicketingServices";
import { TickettingInbox } from "./TickettingInbox/TickettingInbox";
import { TickettingStartTrials } from "./TickettingStartTrials/TickettingStartTrials";
import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import {
  mountNavbar,
  unmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";
import Revamping from "../revamping/Revamping";
import StoriesSection from "../StoriesSection/StoriesSection";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import ContectForm from "../ContectForm/ContectForm";
import { ProductsFooter } from "../ProductsNewPage/ProductsFooter/ProductsFooter";
import { CustomerTrust } from "../ProductsNewPage/CustomerTrust/CustomerTrust";

export const Ticketing = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(mountNavbar());
    return () => {
      dispatch(unmountNavbar())
    };
  }, []);

  return (
    <>
      <div>
         <TicketingBanner/>
         <SimplifiedTicketting/>
         <TickettingInbox/>
         <TicketingServices/>
         <TickettingStartTrials/>


     {/* Footer Section  */}
     
          <CustomerTrust/>

          <Revamping/>

          <StoriesSection/>

          <GetStarted/>

          <ContectForm/>

          <ProductsFooter/>

      </div>
    </>
  );
};
