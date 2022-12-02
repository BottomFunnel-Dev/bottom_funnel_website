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
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import Taxibookingadmin from "./Taxibookingadmin";
import Taxibookingcontainer from "./Taxibookingcontainer";
import Taxibuild from "./Taxibuild";
import Taxicustomer from "./Taxicustomer";
import Taxidrive from "./Taxidrive";
import Taxioccasion from "./Taxioccasion";
import Taxiourcycle from "./Taxiourcycle";

export const Taxibooking = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <Taxibookingcontainer />
      <Taxioccasion />
      <Taxibuild />
      <Taxicustomer />
      <Taxibookingadmin />
      <Taxidrive />
      <Taxiourcycle />

      <StoriesSection />
      <Industries />
      <Revamping />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <PlanProject />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
