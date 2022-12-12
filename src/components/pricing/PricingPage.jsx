import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";


import { PricingBanner } from "./PricingBanner/PricingBanner";
import { PricingOther } from "./PricingOther/PricingOther";
import { PricingTable } from "./PricingTable/PricingTable";




export const PricingPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <PricingBanner />
      <PricingOther />
      <PricingTable />
    </div>
  );
};
