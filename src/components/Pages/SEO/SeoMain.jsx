import React from "react";
import Downloadratecard from "../../SEO/Downloadcard/Downloadratecard";
import EnquiryNow from "../../SEO/EnquiryNow/EnquiryNow";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seosection from "../../SEO/SEO section/Seosection";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seostats from "../../SEO/Seostats/Seostats";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import StoriesSection from "../../StoriesSection/StoriesSection";
import ContectForm from "../../ContectForm/ContectForm";
import MainFooter from "../../FooterSection/MainFooter";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import { partnerData } from "../../../Data/SeopartnerData";

const SeoMain = () => {
  return (
    <div>
      <Seosection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={partnerData}  />
      <EnquiryNow />
      <SeoServices />
      <StoriesSection />
      <Seoexperts />
      <Seofaq />
      <Downloadratecard />
      <SeoblogSection />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default SeoMain;
