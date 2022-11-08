import React from 'react'
import Logiccustomer from './Logiccustomer'
import Logicdrive from './Logicdrive'
 
import Logictransport from './Logictransport'
import Logisticadmin from './Logisticadmin'
import Logisticcontainer from './Logisticcontainer'
import Logisticwhy from './Logisticwhy'

export default function Logicstic() {
  return (
    <div>
        <Logisticcontainer/>
        <Logictransport/>
        <Logisticwhy/>
        <Logiccustomer/>
        <Logicdrive/>
        <Logisticadmin/>
    </div>
  )
}
