import React from 'react'
import FlowerDeliveryAdmin from './FlowerDeliveryAdmin'
import FlowerDeliveryBanner from './FlowerDeliveryBanner'
import FlowerDeliveryBannerbottom from './FlowerDeliveryBannerbottom'
import FlowerDeliveryDriver from './FlowerDeliveryDriver'
import FlowerDeliverylast from './FlowerDeliverylast'
import FlowerDeliveryPharmecy from './FlowerDeliveryPharmecy'
import { FlowerDeliveryService } from './FlowerDeliveryService'

const FlowerDelevry = () => {
  return (
    <div>
      <FlowerDeliveryBanner />
      <FlowerDeliveryService />
      <FlowerDeliveryPharmecy />
    <FlowerDeliveryDriver />
    <FlowerDeliveryAdmin />
    <FlowerDeliveryBannerbottom />
    <FlowerDeliverylast />
    </div>
  )
}

export default FlowerDelevry
