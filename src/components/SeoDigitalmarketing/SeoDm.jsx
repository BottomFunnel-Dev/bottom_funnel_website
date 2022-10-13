import React from 'react'
import { SeoDigitalmarketing } from './SeoDigitalmarketing'
import { SeoDigitalmarketingindustries } from './SeoDigitalmarketingindustries'
import SeoDigitalmarketingservices from './SeoDigitalmarketingservices'
import { SeoDigitalMarketingstats } from './SeoDigitalMarketingstats'
import  {Seodmwhy} from './Seodmwhy'

export const SeoDm = () => {
  return (
    <div>
    <SeoDigitalmarketing/>
    <SeoDigitalMarketingstats/>
    <SeoDigitalmarketingservices/>
    <Seodmwhy/>
    <SeoDigitalmarketingindustries/>
    </div>
  )
}
