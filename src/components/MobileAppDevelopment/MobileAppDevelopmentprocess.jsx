import React from 'react'
import './MobileAppDevelopmentprocess.css'
import funnel from '../Images/bottomfunnel.png'
export const MobileAppDevelopmentprocess = () => {
  return (
    <div className='_MobileAppDevelopmentprocessmaindiv'>
      <h1>Work Methodology We Follow</h1>
      <div className='_MobileAppDevelopmentprocess'>
        <div className='_MobileAppDevelopmentprocess1'>
          <img src={funnel} />
        </div>
        <div className='_MobileAppDevelopmentprocessimage'>
          <div className='_MobileAppDevelopmentprocess11'>
            <h4>Strategy Consulting</h4>
            <p>We help you choose innovation by offering consulting and technology support by market understanding helps develop the success-oriented application for your firm.</p>
          </div>
          <div className='_MobileAppDevelopmentprocess11'>
            <h4>Ux & design</h4>
            <p>We help you choose innovation by offering consulting and technology support by market understanding helps develop the success-oriented application for your firm.</p>
          </div>
          <div className='_MobileAppDevelopmentprocess11'>
            <h4>Enginerring And Delivery</h4>
            <p>We help you choose innovation by offering consulting and technology support by market understanding helps develop the success-oriented application for your firm.</p>
          </div>
          <div className='_MobileAppDevelopmentprocess11'>
            <h4>QA And Optimisation</h4>
            <p>We help you choose innovation by offering consulting and technology support by market understanding helps develop the success-oriented application for your firm.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
