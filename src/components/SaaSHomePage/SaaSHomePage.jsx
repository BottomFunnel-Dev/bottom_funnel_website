import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { SaaSBusiness } from './SaaSBusiness/SaaSBusiness'
import { SaaSIndustry } from './SaaSIndustry/SaaSIndustry'
import { TrySalesCrm } from './TrySalesCrm/TrySalesCrm'

import { SaaSHomePageBanner } from './SaaSHomePageBanner/SaaSHomePageBanner'
import { SaaSData } from './SaaSData/SaaSData'
import { MakeYourDeal } from './MakeYourDeal/MakeYourDeal'
import { SalesWorldwide } from './SalesWorldwide/SalesWorldwide'
import { SaaSAgency } from './SaaSAgency/SaaSAgency'
import {
  salesmountNavbar,
  salesunmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";
import { CustomerTrust } from "../ProductsNewPage/CustomerTrust/CustomerTrust";
import Revamping from "../revamping/Revamping";
import StoriesSection from "../StoriesSection/StoriesSection";
import { GetStarted } from "../WebdevPages/webGetStartedCard/GetStarted";
import ContectForm from "../ContectForm/ContectForm";
import { ProductsFooter } from "../ProductsNewPage/ProductsFooter/ProductsFooter";

export const SaaSHomePage = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(salesmountNavbar());
    return () => {
      dispatch(salesunmountNavbar())
    };
  }, []);

  return (
    <div>
      <SaaSHomePageBanner/>
       <SaaSIndustry/> 
       <SaaSBusiness/>
       <TrySalesCrm/>

       <SaaSData/>
       <SaaSAgency/>
       <SalesWorldwide/>
       <MakeYourDeal/>
     
{/* <CustomerTrust/> */}

{/* <Revamping/> */}

<StoriesSection/>

<GetStarted/>

<ContectForm/>

<ProductsFooter/>
    </div>
  )
}
