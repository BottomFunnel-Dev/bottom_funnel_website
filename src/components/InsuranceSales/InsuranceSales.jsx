import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { CentricBusiness } from './CentricBusiness/CentricBusiness'
import { InsuranceAgency } from './InsuranceAgency/InsuranceAgency'
import { InsuranceProductivity } from './InsuranceProductivity/InsuranceProductivity'
import { InsuranceSalesBanner } from './InsuranceSalesBanner/InsuranceSalesBanner'
import { InsuranceSalesData } from './InsuranceSalesData/InsuranceSalesData'
import { InsuranceSalesScreens } from './InsuranceSalesScreens/InsuranceSalesScreens'
import { MakeYourDeal } from './MakeYourDeal/MakeYourDeal'
import { SalesWorldwide } from './SalesWorldwide/SalesWorldwide'
import { Spacialized } from './Spacialized/Spacialized'

import {
  salesmountNavbar,
  salesunmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";

export const InsuranceSales = () => {

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
        <InsuranceSalesBanner/>
        <CentricBusiness/>
        <InsuranceProductivity/>
        <Spacialized/>
        <InsuranceSalesData/>
        <InsuranceSalesScreens/>
        <InsuranceAgency/>
        <SalesWorldwide/>
        <MakeYourDeal/>
        

     
        
        
    </div>
  )
}
