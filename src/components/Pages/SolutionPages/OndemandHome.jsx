import React from 'react'
import ExclusiveFeature from '../../OndemandHome/ExclusiveFeature'
import HomeServices from '../../OndemandHome/HomeServices'
import KeyFeatures from '../../OndemandHome/KeyFeatures'
import OndemandHero from '../../OndemandHome/OndemandHero'
import OndemandQuote from '../../OndemandHome/OndemandQuote'

const OndemandHome = () => {
  return (
    <div>
      <OndemandHero/>
      <OndemandQuote/>
      <HomeServices/>
      <ExclusiveFeature/>
      <KeyFeatures/>
    </div>
  )
}

export default OndemandHome
