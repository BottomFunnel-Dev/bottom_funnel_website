import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { OnlinePaymentAdminPannel } from './OnlinePaymentAdminPannel'
import { OnlinePaymentApplications } from './OnlinePaymentApplications'
import { OnlinePaymentAppSolutionBanner } from './OnlinePaymentAppSolutionBanner'
import { OnlinePaymentExclusive } from './OnlinePaymentExclusive'
import { OnlinePaymentWhyChoose } from './OnlinePaymentWhyChoose'
import { OnlinePMobileBrowser } from './OnlinePMobileBrowser'

export const OnlinePaymentAppSolution = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (

    <div>
      <OnlinePaymentAppSolutionBanner />
      <OnlinePaymentExclusive />
      <OnlinePaymentApplications />
      <OnlinePaymentAdminPannel />
      <OnlinePMobileBrowser />
      <OnlinePaymentWhyChoose />
    </div>
  )
}
