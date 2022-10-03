import React from 'react'
import Stories from '../../StoriesSection/StoriesSection'
import SeoPPCAgency from '../../Seo PPC/SeoPPCAgency'
import SeoPPCblogs from '../../Seo PPC/SeoPPCblog'
import SeoPPCExperts from '../../Seo PPC/SeoPPCExperts'
import SeoPPCFaq from '../../Seo PPC/SeoPPCFaq'
import SeoPPCReviews from '../../Seo PPC/SeoPPCreviews'
import SeoPPCSection from '../../Seo PPC/SeoPPCSection'
import SeoPPCServices from '../../Seo PPC/SeoPPCServices'
import SeoPPCTrusted from '../../Seo PPC/SeoPPCTrustedCompanies'
import StoriesSection from '../../StoriesSection/StoriesSection'
import Downloadratecard from '../../Seo PPC/Downloadratecard'
import Seostats from '../../Seo PPC/Seostats'
import { SeoblogSection } from '../../SeoBlogs/Seoblogs'
import Reviews from '../../SEO/SeoReviews/Reviews'
import Seotrusted from '../../SEO/SeoTrustedCompanies/Seotrusted'
import Seoexperts from '../../SEO/Seo experts/Seoexperts'
import Seofaq from '../../SEO/SeoFaq/Seofaq'


const SeoPPC = () => {
  return (
    <div>
      <SeoPPCSection/>
        <Seostats/>
        <Reviews/>
<Seotrusted/>
        <SeoPPCServices/>
        <StoriesSection/>
        <Seoexperts/>
        <Seofaq/>
        <SeoblogSection/>
    </div>
  )
}

export default SeoPPC
