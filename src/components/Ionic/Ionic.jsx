import React from 'react';
import { Flutteradvantages, Ionicadvantages, Reactnativeadvantages } from './Ionicadvantages';
import { Flutterbenefits, Ionicbenefits, Reactnativebenefits } from './Ionicbenefits';
import { Flutterdevelopmentbanner, Ionicdevelopmentbanner, Reactnativedevelopment, Reactnativedevelopmentbanner } from './Ionicdevelopmentbanner';
import { Flutterservices, Ionicservices, Reactnativeservices } from './Ionicservices';
import { Flutterwhy, Ionicwhy, Reactnativewhy } from './Ionicwhy';

export const Ionic = () => {
  return (
    <div className='_Reactnative'>
        <Ionicdevelopmentbanner/>
        <Ionicservices/>
        <Ionicbenefits/>
        <Ionicadvantages/>
        <Ionicwhy/>
    </div>
  )
}
