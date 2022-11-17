import React from 'react'
import { CarpoolingAction } from './CarpoolingAction'
import { CarpoolingBanner } from './CarpoolingBanner'
import { CarpoolingRide } from './CarpoolingRide'
import { CarpoolingSolutions } from './CarpoolingSolutions'
import { CarpoolingWhy } from './CarpoolingWhy'
import { PanelScreens } from './PanelScreens'

export const Carpooling = () => {
  return (
    <div>
        <CarpoolingBanner/>
        <CarpoolingRide/>
        <CarpoolingSolutions/>
        <CarpoolingAction/>
        <CarpoolingWhy/>
        <PanelScreens/>
    </div>
  )
}
