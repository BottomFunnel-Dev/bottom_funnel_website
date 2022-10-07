import React from "react";
import Downloadratecard from "../../Seo PPC/Downloadratecard";
import Seoblogs, { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import Seostats from "../../Seo PPC/Seostats";
import Seotrusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import SeoguestAgency from "../../Seoguest/SeoguestAgency";
import Seoguestbanner from "../../Seoguest/Seoguestbanner";
import SeoguestEnquiryNow from "../../Seoguest/SeoguestEnquiry";
import SeoguestExperts from "../../Seoguest/SeoguestExperts";
import SeoguestFaq from "../../Seoguest/SeoguestFaq";
import SeoguestReviews from "../../Seoguest/Seoguestreviews";
import SeoguestSection from "../../Seoguest/SeoguestSection";
import SeoguestServices from "../../Seoguest/SeoguestServices";
import SeoguestTrusted from "../../Seoguest/SeoguestTrustedCompanies";
import StoriesSection from "../../StoriesSection/StoriesSection";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";
import MainFooter from "../../FooterSection/MainFooter";

const Seoguest = () => {
  return (
    <div>
      <SeoguestSection />
      <Seostats />
      <Reviews />
      <Seotrusted />
      <SeoguestEnquiryNow />
      <SeoguestServices />
      <StoriesSection />
      <Seoexperts />
      <Seofaq />
      <SeoblogSection />
      <ContectForm/>
      <MainFooter/>
    </div>
  );
};

export default Seoguest;
