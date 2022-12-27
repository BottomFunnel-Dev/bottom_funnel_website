import React from 'react'
import './EstateAgency.css'

export const EstateAgency = () => {
  return (
    <div className='EstateAgency-maindiv'>
        <h1>What else can Bottom Funnel Sales do for your real estate agency</h1>
        <div className='EstateAgency-innerdiv'>
        <div className='EstateAgency-carddiv'>
                <h4>Get rid of stack of life </h4>
                <div className='EstateAgency-carddivimage'>
                    <img src="Images/realestatesales/Documents-cuate.png" alt="image" />
                </div>
                <p>Record and manage all your files from within the CRM. Integrate with e-signing applications to send, sign, and manage all your agreements, paperless.</p>
            </div>
            <div className='EstateAgency-carddiv'>
                <h4>Stay Protected</h4>
                <div className='EstateAgency-carddivimage'>
                    <img src="Images/realestatesales/Secure data-cuate.png" alt="image" />
                </div>
                <p>Freshsales is built with security at heart to secure your data and provide high resilience. Additionally, role-based access allows you to restrict data access based on your employees' hierarchy or role.</p>
            </div>
            <div className='EstateAgency-carddiv'>
                <h4>Sand instant messages</h4>
                <div className='EstateAgency-carddivimage'>
                    <img src="Images/realestatesales/Email campaign-cuate.png" alt="image" />
                </div>
                <p>SMS is faster than an email and yet less intrusive than a phone call. Freshsales allows you to SMS your prospects and clients from within the CRM.</p>
            </div>

        </div>
        
     
    </div>
  )
}
