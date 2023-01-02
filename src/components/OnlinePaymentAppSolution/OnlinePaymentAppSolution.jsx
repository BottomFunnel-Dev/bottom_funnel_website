import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { OnlinePaymentAdminPannel } from './OnlinePaymentAdminPannel'
import { OnlinePaymentApplications } from './OnlinePaymentApplications'
import { OnlinePaymentAppSolutionBanner } from './OnlinePaymentAppSolutionBanner'
import { OnlinePaymentExclusive } from './OnlinePaymentExclusive'
import { OnlinePaymentWhyChoose } from './OnlinePaymentWhyChoose'
import { OnlinePMobileBrowser } from './OnlinePMobileBrowser'
import PortFolio from "../PortFolioSection/PortFolio";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import PlanProject from "../PlanProject/PlanProject";
import OndemandSection from "../OnDemandSection/OndemandSection";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

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

      <PortFolio />
      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  )
}
