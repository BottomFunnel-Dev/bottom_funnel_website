import React from 'react'
import FlowerDeliveryAdmin from './FlowerDeliveryAdmin'
import FlowerDeliveryBanner from './FlowerDeliveryBanner'
import FlowerDeliveryBannerbottom from './FlowerDeliveryBannerbottom'
import FlowerDeliveryDriver from './FlowerDeliveryDriver'
import FlowerDeliverylast from './FlowerDeliverylast'
import { FlowerDeliveryService } from './FlowerDeliveryService'
import FlowerDeliverySolution from './FlowerDeliverySolution'

const FlowerDelevry = () => {
  return (
    <div>
      <FlowerDeliveryBanner />
      <FlowerDeliveryService />
 <FlowerDeliverySolution />
    <FlowerDeliveryDriver />
    <FlowerDeliveryAdmin />
    <FlowerDeliveryBannerbottom />
    <FlowerDeliverylast />
    </div>
  )
}

export default FlowerDelevry
