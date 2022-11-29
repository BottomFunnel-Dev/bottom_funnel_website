import React from 'react'
import Maketplacefooter from './Maketplacefooter'
import MarketPlaceAdmin from './MarketPlaceAdmin'
import { MarketplaceBanner } from './MarketplaceBanner'
import Marketplaceborder from './Marketplaceborder'
import MarketPlaceClients from './MarketPlaceClients'
import MarketplaceFreelancer from './MarketplaceFreelancer'

export const Marketplace = () => {
  return (
    <div>
    <MarketplaceBanner />
  <MarketplaceFreelancer />
  <MarketPlaceAdmin />
  <MarketPlaceClients />
  <Marketplaceborder />
  <Maketplacefooter />
    </div>
  )
}


