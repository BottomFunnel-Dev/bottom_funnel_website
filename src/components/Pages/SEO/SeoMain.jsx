import React from 'react'
import Downloadratecard from '../../SEO/Downloadcard/Downloadratecard'
import EnquiryNow from '../../SEO/EnquiryNow/EnquiryNow'
import Seoexperts from '../../SEO/Seo experts/Seoexperts'
import Seosection from '../../SEO/SEO section/Seosection'
import Seoagency from '../../SEO/Seoagency/Seoagency'
import Seoblogs from '../../SEO/SeoBlogs/Seoblogs'
import Seofaq from '../../SEO/SeoFaq/Seofaq'
import Reviews from '../../SEO/SeoReviews/Reviews'
import SeoLocalServices from '../../SEO/SeoServices/SeoServices'
import Seostats from '../../SEO/Seostats/Seostats'
import Trusted from '../../SEO/SeoTrustedCompanies/Seotrusted'
import { SeoblogSection } from '../../SeoBlogs/Seoblogs'
import StoriesSection from '../../StoriesSection/StoriesSection'
import Seotrusted from '../../SEO/SeoTrustedCompanies/Seotrusted'

const SeoMain = () => {
  return (
    <div>
      <Seosection/>
      <Seostats/>
      <Reviews/>
      <Seotrusted/>

      <EnquiryNow/>
      <SeoLocalServices/>
      <StoriesSection/>
      <Seoexperts/>
      <Seofaq/>
      <SeoblogSection/>
    </div>
  )
}

export default SeoMain
