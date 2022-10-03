import React from "react";
import Downloadratecard from "../../Seo PPC/Downloadratecard";
import Reviews from "../../SEO/SeoReviews/Reviews";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import SeoSEMAgency from "../../SeoSEM/SeoSEMAgency";
import SeoSEMblogs from "../../SeoSEM/SeoSEMblog";
import SeoSEMExperts from "../../SeoSEM/SeoSEMExperts";
import SeoSEMFaq from "../../SeoSEM/SeoSEMFaq";
import SeoSEMReviews from "../../SeoSEM/SeoSEMreviews";
import SeoSEMSection from "../../SeoSEM/SeoSEMSection";
import SeoSEMServices from "../../SeoSEM/SeoSEMServices";
import SeoSEMTrusted from "../../SeoSEM/SeoSEMTrustedCompanies";
import StoriesSection from "../../StoriesSection/StoriesSection";
import Seotrusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";

const SeoSEM = () => {
  return (
    <div>
      <SeoSEMSection />
      <Reviews />
      <Seotrusted />
      <SeoSEMServices />
      <StoriesSection />
      <Seoexperts />
      <Seofaq />
      <SeoblogSection />
    </div>
  );
};

export default SeoSEM;
