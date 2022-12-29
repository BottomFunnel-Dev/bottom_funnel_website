import React from 'react'

import { CentricBusiness } from './CentricBusiness/CentricBusiness'
import { InsuranceAgency } from './InsuranceAgency/InsuranceAgency'
import { InsuranceProductivity } from './InsuranceProductivity/InsuranceProductivity'
import { InsuranceSalesBanner } from './InsuranceSalesBanner/InsuranceSalesBanner'
import { InsuranceSalesData } from './InsuranceSalesData/InsuranceSalesData'
import { InsuranceSalesScreens } from './InsuranceSalesScreens/InsuranceSalesScreens'
import { MakeYourDeal } from './MakeYourDeal/MakeYourDeal'
import { SalesWorldwide } from './SalesWorldwide/SalesWorldwide'
import { Spacialized } from './Spacialized/Spacialized'

export const InsuranceSales = () => {
  return (
    <div>
        <InsuranceSalesBanner/>
        <CentricBusiness/>
        <InsuranceProductivity/>
        <Spacialized/>
        <InsuranceSalesData/>
        <InsuranceSalesScreens/>
        <InsuranceAgency/>
        <SalesWorldwide/>
        <MakeYourDeal/>
        

     
        
        
    </div>
  )
}
