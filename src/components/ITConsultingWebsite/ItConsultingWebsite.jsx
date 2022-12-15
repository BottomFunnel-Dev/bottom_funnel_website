import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import "./ItConsultingWebsite.css";
import { ItConsultingWebsiteBanner } from "./ItConsultingWebsiteBanner/ItConsultingWebsiteBanner";
import { ConsultingServices } from "./ConsultingServices/ConsultingServices";
import { ConsultingQuestion } from "./ConsultingQuestion/ConsultingQuestion";
import { ConsultingWhyChooseUs } from "./ConsultingWhyChooseUs/ConsultingWhyChooseUs";
import { OurProcess } from "./OurProcess/OurProcess";
import { ConsultingTechTools } from "./ConsultingTechTools/ConsultingTechTools";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import PlanProject from "../PlanProject/PlanProject";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const ItConsultingWebsite = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);
  return (
    <div>
      <ItConsultingWebsiteBanner />
      <ConsultingServices />
      <ConsultingQuestion />
      <ConsultingWhyChooseUs />
      <OurProcess />
      <ConsultingTechTools />

      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
