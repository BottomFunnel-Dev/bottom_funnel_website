import React from "react";
import Getintouchcard from "../../SeoLink/Getintouch";
import Seostats from "../../SEO/Seostats/Seostats";
import Stories from "../../StoriesSection/StoriesSection";
import SeoLinkAgency from "../../SeoLink/SeoLinkAgency";
import SeoLinkblogs from "../../SeoLink/SeoLinkblog";
import SeoLinkEnquiryNow from "../../SeoLink/SeoLinkEnquiry";
import SeoLinkExperts from "../../SeoLink/SeoLinkExperts";
import SeoLinkFaq from "../../SeoLink/SeoLinkFaq";
import SeoLinkReviews from "../../SeoLink/SeoLinkreviews";
import SeoLinkSection from "../../SeoLink/SeoLinkSection";
import SeoLinkServices from "../../SeoLink/SeoLinkServices";
import SeoLinkTrusted from "../../SeoLink/SeoLinkTrustedCompanies";
import StoriesSection from "../../StoriesSection/StoriesSection";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seotrusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";
import MainFooter from "../../FooterSection/MainFooter";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { partnerlocalseoData } from "../../../Data/SeopartnerData";

export default function Seolink() {
  return (
    <div>
      <SeoLinkSection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={partnerlocalseoData} />
      <SeoLinkEnquiryNow />
      {/* <SeoLinkServices /> */}
      <SeoServices/>
      <StoriesSection />
      <Getintouchcard />
      <Seoexperts />
      <Seofaq />
      <SeoblogSection />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
