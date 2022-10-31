import React from 'react'
import Adminpannel from './Adminpannel'
import Customerapp from './Customerapp'
import Datingbrands from './Datingbrands'
import Datingcontainer from './Datingcontainer'
import Datingfeatures from './Datingfeatures'
import Datingmobile from './Datingmobile'
import Datingstart from './Datingstart'
import DatingWhy from './DatingWhy'
import Solutiondating from './Solutiondating'

export default function Dating() {
  return (
    <div> 
       <Datingcontainer/>
       <Datingbrands/>
       <Datingfeatures/>
       <Customerapp/>
       <Adminpannel/>
       <Datingmobile/>
       <Solutiondating/>
       <Datingstart/>
       <DatingWhy/>
    </div>
  )
}
