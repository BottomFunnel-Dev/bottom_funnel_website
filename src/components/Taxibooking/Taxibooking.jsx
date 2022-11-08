import React from 'react'
import Taxibookingadmin from './Taxibookingadmin'
import Taxibookingcontainer from './Taxibookingcontainer'
import Taxibuild from './Taxibuild'
import Taxicustomer from './Taxicustomer'
import Taxidrive from './Taxidrive'
import Taxioccasion from './Taxioccasion'
import Taxiourcycle from './Taxiourcycle'

export const Taxibooking = () => {
  return (
    <div>
        <Taxibookingcontainer/>
        <Taxioccasion/>
        <Taxibuild/>
        <Taxicustomer/>
        <Taxibookingadmin/>
        <Taxidrive/>
        <Taxiourcycle/>
    </div>
  )
}
