import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import Cannabisadmin from "./Cannabisadmin";
import Cannabiscontainer from "./Cannabiscontainer";
import Cannabiscustomersection from "./Cannabiscustomersection";
import Cannabisdrive from "./Cannabisdrive";
import Cannabisoverview from "./Cannabisoverview";
import Cannabissolution from "./Cannabissolution";
import { CannabisLogo } from "../../Data/SeopartnerData";

export default function Cannabis() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <Cannabiscontainer />
      <Trusted partnerLogo={CannabisLogo}/>
      <Cannabissolution />
      <Cannabisoverview />
      <Cannabiscustomersection />
      <Cannabisadmin />
      <Cannabisdrive />
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
  );
}
