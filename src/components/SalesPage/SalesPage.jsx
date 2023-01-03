import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { MakeYourDeal } from './MakeYourDeal/MakeYourDeal'
import { Opportunity } from './Opportunity/Opportunity'
import { Revenue } from './Revenue/Revenue'
import { SaleSmarter } from './SaleSmarter/SaleSmarter'
import { SalesPageBanner } from './SalesPageBanner/SalesPageBanner'
import { SalesWorldwide } from './SalesWorldwide/SalesWorldwide'
import { useDispatch } from "react-redux";

import {
  salesmountNavbar,
  salesunmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";
import { SalesNavbar } from "../Navbar/SalesNavbar";

export const SalesPage = () => {
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


        {/* <SalesNavbar/> */}
        <SalesPageBanner/>
        <Revenue/>
        <SaleSmarter/>
        <Opportunity/>
        
      
        < SalesWorldwide/>
        <MakeYourDeal/>
        
       

    </div>
  )
}
