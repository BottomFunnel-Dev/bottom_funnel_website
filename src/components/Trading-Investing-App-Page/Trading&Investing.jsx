import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { ServicesOffer } from './ServicesOffer'
import { SolutionFrame } from './SolutionFrame'
import { SolutionFrameTwo } from './SolutionFrameTwo'
import { TradingInvestingFooter } from './TradingInvestingFooter'
import { TradingInvestingHeader } from './TradingInvestingHeader'
import { WaysToGrow } from './WaysToGrow'
import { WhyChooseBF } from './WhyChooseBF'


export const TradingInvesting = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
      <TradingInvestingHeader />
      <ServicesOffer />
      <WaysToGrow />
      <SolutionFrame />
      <SolutionFrameTwo />
      <WhyChooseBF />
      <TradingInvestingFooter />


    </div>
  )
}
