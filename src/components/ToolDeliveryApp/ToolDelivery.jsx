import React from 'react'
import TooDeliveryBanner from './TooDeliveryBanner'
import ToolDeliveryAdmin from './ToolDeliveryAdmin'
import ToolDeliveryCustomer from './ToolDeliveryCustomer'
import ToolDeliveryDriver from './ToolDeliveryDriver'
import ToolDeliveryFooter from './ToolDeliveryFooter'
import ToolDeliveryLowerBanner from './ToolDeliveryLowerBanner'
import ToolDeliveryService from './ToolDeliveryService'
import ToolDeliverysneak from './ToolDeliverysneak'


const ToolDelivery = () => {
  return (
    <div>
      <TooDeliveryBanner /> 
      <ToolDeliveryService />
      <ToolDeliverysneak />
      <ToolDeliveryCustomer />
      <ToolDeliveryDriver />
      <ToolDeliveryAdmin />
      <ToolDeliveryLowerBanner />
      <ToolDeliveryFooter />
     

    </div>
  )
}

export default ToolDelivery
