import React from "react"
import { AdminPannelComp } from "./AdminPannelComp.jsx"
import { CarRentalFooter } from "./CarRentalFooter.jsx"
import { CarRentalHeader } from "./CarRentalHeader"
import { ChooseUsComp } from "./ChooseUsComp.jsx"
import { CustomerAppComp } from "./CustomerAppComp.jsx"
import { FeaturesComp } from "./FeaturesComp.jsx"
import { GreyBoxComponent } from "./GreyBoxComponent"
import { RenterAppComp } from "./RenterAppComp"



export const CarRental = () => {
  return (

    <div>
        <CarRentalHeader />
        <FeaturesComp />
        <GreyBoxComponent />
        <RenterAppComp />
        <AdminPannelComp />
        <CustomerAppComp />
        <ChooseUsComp />
        <CarRentalFooter />

    </div>
  )
}
