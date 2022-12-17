import React from 'react'
import { ServicesOffer } from './ServicesOffer'
import { SolutionFrame } from './SolutionFrame'
import { SolutionFrameTwo } from './SolutionFrameTwo'
import { TradingInvestingFooter } from './TradingInvestingFooter'
import {TradingInvestingHeader} from './TradingInvestingHeader'
import { WaysToGrow } from './WaysToGrow'
import { WhyChooseBF } from './WhyChooseBF'


export const TradingInvesting = () => {
  return (
    <div>
         <TradingInvestingHeader />
        <ServicesOffer />
        <WaysToGrow />
        <SolutionFrame />
        <SolutionFrameTwo />
        <WhyChooseBF /> 
        <TradingInvestingFooter />
       
       
    </div>
  )
}
