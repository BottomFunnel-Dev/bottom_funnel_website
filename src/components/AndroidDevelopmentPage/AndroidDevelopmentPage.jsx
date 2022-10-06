import React from 'react'
import { AndroidDevelopmentindustries } from './AndroidDevelopmentindustries'
import { AndroidDevelopmentPagebanner } from './AndroidDevelopmentPagebanner'
import { AndroidDevelopmentPagewhy } from './AndroidDevelopmentPagewhy'
import { AndroidDevelopmentRelated } from './AndroidDevelopmentRelated'
import { AndroidDevelopmentServices } from './AndroidDevelopmentServices'

export const AndroidDevelopmentPage = () => {
  return (
    <div>
        <AndroidDevelopmentPagebanner/>
        <AndroidDevelopmentPagewhy/>
        <AndroidDevelopmentServices/>
        <AndroidDevelopmentindustries/>
        <AndroidDevelopmentRelated/>
    </div>
  )
}
