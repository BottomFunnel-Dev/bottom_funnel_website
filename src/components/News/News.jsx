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
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import Newspublish from "./Newspublish";
import Newstrategy from "./Newstrategy";
import { newsLogo } from "../../Data/SeopartnerData";
import { Helmet } from "react-helmet";
import { Newsintro } from "./Newsintro";
import { Newspaper } from "./Newspaper";
import { Newsfeature } from "./Newsfeature";

export default function News() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>News app development | Bottom Funnel</title>
        <meta
          name="description"
          content="Boost your News business with Bottom Funnel's News app development services that offer intuitive software and app development solutions to clients around the globe"
        />
      </Helmet>
      <Newsintro />
      <Trusted partnerLogo={newsLogo} />
      <Newspaper />
      <Newsfeature />
      <Newspublish />
      <Newstrategy />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PlanProject />
      <Revamping />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
