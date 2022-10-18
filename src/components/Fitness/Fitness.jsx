import React from 'react'
import Brand from './Brand'
 
import { Fitnesscontainer } from './Fitnesscontainer'
import Fitnessexercise from './Fitnessexercise'
import FitnessFeature from './FitnessFeature'
import FitnessSolution from './FitnessSolution'
import FitnessStart from './FitnessStart'
import Fitnesswhy from './Fitnesswhy'

export const Fitness = () => {
  return (
    <div>
        <Fitnesscontainer/>
         <Brand/>
        <FitnessFeature/>
        <FitnessStart/>
        <Fitnessexercise/>
        <FitnessSolution/>
        <Fitnesswhy/>

    </div>
  )
}
