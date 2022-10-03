import React from 'react'
import Downloadratecard from '../Downloadcard/Downloadratecard'
import Seostats from '../Seostats/Seostats'
import Stories from '../StoriesSection/StoriesSection'
import SeoPPCAgency from './SeoPPCAgency'
import SeoPPCblogs from './SeoPPCblog'
import SeoPPCExperts from './SeoPPCExperts'
import SeoPPCFaq from './SeoPPCFaq'
import SeoPPCReviews from './SeoPPCreviews'
import SeoPPCSection from './SeoPPCSection'
import SeoPPCServices from './SeoPPCServices'
import SeoPPCTrusted from './SeoPPCTrustedCompanies'

export const SeoPPC = () => {
  return (
    <div>
        <SeoPPCSection/>
        <Seostats/>
        <SeoPPCReviews/>
        <SeoPPCTrusted/>
        <SeoPPCServices/>
        <Stories name={"Client Reviews"}/>
        <Downloadratecard/>
        <SeoPPCExperts/>
        <SeoPPCAgency/>
        <SeoPPCFaq/>
        <SeoPPCblogs/>
    </div>
  )
}
