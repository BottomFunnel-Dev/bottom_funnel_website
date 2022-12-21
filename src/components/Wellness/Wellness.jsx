import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import Wellnessadmin from "./Wellnessadmin";
import Wellnessconnect from "./Wellnessconnect";
import Wellnesscontainer from "./Wellnesscontainer";
import Wellnessdoctor from "./Wellnessdoctor";
import Wellnesshealthcare from "./Wellnesshealthcare";
import Wellnesspatient from "./Wellnesspatient";
import { WellnessPatient } from "./WellnessPatient/WellnessPatient";
import { WellnessDoctor } from "./WellnessDoctor/WellnessDoctor";
import { WellnessAdmin } from "./WellnessAdmin/WellnessAdmin";

export default function Wellness() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <Wellnesscontainer />
      <WellnessPatient/>
      <WellnessDoctor/>
      <WellnessAdmin/>
      <Wellnesshealthcare />
      {/* <Wellnessconnect />
      <Wellnesspatient />
      <Wellnessdoctor />
      <Wellnessadmin /> */}
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
