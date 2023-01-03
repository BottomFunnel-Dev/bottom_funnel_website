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
     
    </div>
  )
}
