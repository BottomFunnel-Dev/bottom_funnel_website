
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import StoriesSection from "../StoriesSection/StoriesSection";
import Brand from "./Brand";
import Educationcontainer from "./Educationcontainer";
import Educationquotes from "./Educationquotes";
import Featuresection from "./Featuresection";
import Solutionsection from "./Solutionsection";
import Whychoose from "./Whychoose";
import { educationLogo } from "../../Data/SeopartnerData";


import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

export default function Educationpage() {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);


  return (
    <div>
      <Educationcontainer />
      <Trusted partnerLogo={educationLogo} />
      <Featuresection />
      <Educationquotes />
      <Solutionsection />
      <Whychoose />
      {/* <Brand /> */}
      <PlanProject />
      <StoriesSection />
      <Industries />
      <Revamping />
      <OndemandSection />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
