import React from 'react'
import { Iphonedevelopmentpage } from './Iphonedevelopmentpage'
import { IphoneDevelopmentRelated } from './IphoneDevelopmentRelated'
import { Iphonedevelopmentservices } from './Iphonedevelopmentservices'
import { Iphonedevelopmentwhy } from './Iphonedevelopmentwhy'
import { IphoneDevelopmentwork } from './IphoneDevelopmentwork'

export const Iphonepage = () => {
  return (
    <div>
        <Iphonedevelopmentpage/>
        <Iphonedevelopmentwhy/>
        <Iphonedevelopmentservices/>
        <IphoneDevelopmentwork/>
        <IphoneDevelopmentRelated/>
    </div>
  )
}
