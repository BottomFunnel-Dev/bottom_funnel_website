import React from 'react'
import { Scroller } from './Scroller/Scroller'
import { Usercentric } from './Usercentric/Usercentric'
import { WearableBanner } from './WearableBanner/WearableBanner'


import { WearableContainer } from './WearableContainer/WearableContainer'
import { WearablePartner } from './WearablePartner/WearablePartner'

export const WearableAppDevelopment = () => {
  return (
    <div>
        <WearableBanner/>
        
        <WearableContainer/>
        <Scroller/>
         <Usercentric/>
        <WearablePartner/>
        
        
    </div>
  )
}
