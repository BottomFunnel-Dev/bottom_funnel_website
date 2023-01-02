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
  mountNavbar,
  unmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";

export const SalesPage = () => {
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


        
        <SalesPageBanner/>
        <Revenue/>
        <SaleSmarter/>
        <Opportunity/>
        
      
        < SalesWorldwide/>
        <MakeYourDeal/>
        
       

    </div>
  )
}
