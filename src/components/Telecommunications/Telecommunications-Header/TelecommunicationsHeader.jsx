import React from 'react'
import './telecommunicationsHeader.css'

export const TelecommunicationsHeader = () => {
  return (
    <div className='telecommunications-header-container-main'>
    <div className='telecommunications-header-left-div'>
      <div className='telecommunications-header-title'>
        <h1>Custom Telecommunication Software Development</h1>
        <p>Telecommunication software  is used to organize and manage all aspects  of electronic data {"(text, voice, video etc.)"} exchange. A software development partner of T-Mobile, Orange, and Vibe with 17 years in telecom software development, ScienceSoft builds OSS, BSS, customised VoIP/IPTV software etc.</p>
        <button>Get Started</button>
      </div>
    </div>


    <div className='telecommunications-header-right-div-for-img'>
      <div className='telecommunications-header-right-img'>
        <img src="Images/Telecommunication/Background/Frame1.png" alt="" />
      </div>
    </div>
  </div>
  )
}
