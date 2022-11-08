 import React from 'react'
import Icecreamadminpanel from './Icecreamadminpanel'
import Icecreamcustomer from './Icecreamcustomer'
import { Icecreamdrive } from './Icecreamdrive'
import { Icecreamsection } from './Icecreamsection'
import { Icecreamsolution } from './Icecreamsolution'
 
 
 export const Icecream = () => {
   return (
     <div >
       <Icecreamsection/>
       <Icecreamsolution/>
       <Icecreamcustomer/>
       <Icecreamadminpanel/>
       <Icecreamdrive/>
     </div>
   )
 }
 