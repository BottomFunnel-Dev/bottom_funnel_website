import React from 'react';
import { Reactnativeadvantages } from './Reactnativeadvantages';
import { Reactnativebenefits } from './Reactnativebenefits';
import { Reactnativedevelopment, Reactnativedevelopmentbanner } from './Reactnativedevelopmentbanner';
import { Reactnativeservices } from './Reactnativeservices';
import { Reactnativewhy } from './Reactnativewhy';

export const Reactnative = () => {
  return (
    <div className='_Reactnative'>
        <Reactnativedevelopmentbanner/>
        <Reactnativeservices/>
        <Reactnativebenefits/>
        <Reactnativeadvantages/>
        <Reactnativewhy/>
    </div>
  )
}
