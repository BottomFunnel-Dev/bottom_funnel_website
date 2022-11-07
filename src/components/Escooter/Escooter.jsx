import React from 'react'
import { EscooterAdmin } from './EscooterAdmin'
import Escooterbusiness from './Escooterbusiness'
import { Escooterhardware } from './Escooterhardware'
import Escootersection from './Escootersection'
import Escooterstealing from './Escooterstealing'
import Escooterthunder from './Escooterthunder'
import Keyarea from './Keyarea'

export default function Escooter() {
  return (
    <div>
        <Escootersection/>
        <Escooterbusiness/>
        <Escooterstealing/>
        <Escooterthunder/>
        <Keyarea/>
        <Escooterhardware/>
        <EscooterAdmin/>
    </div>
  )
}
