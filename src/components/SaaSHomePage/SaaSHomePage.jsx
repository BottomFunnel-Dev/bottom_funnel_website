import React from 'react'
import { SaaSBusiness } from './SaaSBusiness/SaaSBusiness'
import { SaaSIndustry } from './SaaSIndustry/SaaSIndustry'
import { TrySalesCrm } from './TrySalesCrm/TrySalesCrm'

import { SaaSHomePageBanner } from './SaaSHomePageBanner/SaaSHomePageBanner'
import { SaaSData } from './SaaSData/SaaSData'
import { MakeYourDeal } from './MakeYourDeal/MakeYourDeal'
import { SalesWorldwide } from './SalesWorldwide/SalesWorldwide'
import { SaaSAgency } from './SaaSAgency/SaaSAgency'

export const SaaSHomePage = () => {
  return (
    <div>
      <SaaSHomePageBanner/>
       <SaaSIndustry/> 
       <SaaSBusiness/>
       <TrySalesCrm/>

       <SaaSData/>
       <SaaSAgency/>
       <SalesWorldwide/>
       <MakeYourDeal/>
     
    </div>
  )
}
