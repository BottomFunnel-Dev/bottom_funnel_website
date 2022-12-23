import React from 'react'
import "./Services.css"

export default function Services() {
  return (
    <div className='servicescontainer'>
         <div> 
        <h1>Services</h1>
        <p>You take care of the video quality and we take care of everything else</p>
          </div>

     <div className='servicessubcontainer'> 
         <div >  
              <div className='uploaddiv'>
                <div className='uploadsubdiv'>
                    <div className='uploadflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/upload.png" /></div>  
                    <h4>Upload & Organize</h4>
                    </div>
                </div>
               
                <p>Upload and organize your files the right way to make them easy to find and use. </p>
              </div>
{/* 
            ////////2option///////////// */}
            
            <div className='monetizdiv'>
                <div className='monetizsubdiv'>
                    <div className='monetizflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/monetization.png" /></div>  
                    <h4>Monetization</h4>
                    </div>
                </div>
               
                <p>Monetization is the process of generating revenue from your content.</p>
              </div>

         </div>
          <div>
             <div className='uploaddiv'>
                <div className='uploadsubdiv'>
                    <div className='uploadflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/stream.png" /></div>  
                    <h4>Stream On-Demand</h4>
                    </div>
                </div>
               
                 <p>There's a new way to watch your favorite shows - on-demand.</p>
                </div>

                {/* 
            ////////2option///////////// */}
            
            <div className='monetizdiv'>
                <div className='monetizsubdiv'>
                    <div className='monetizflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/analytics.png" /></div>  
                    <h4>Analytics</h4>
                    </div>
                </div>
               
                <p>Analytics is the process of collecting and analyzing data to improve business performance.</p>
              </div>

          </div>
       <div> 
       <div className='uploaddiv'>
                <div className='uploadsubdiv'>
                    <div className='uploadflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/live.png" /></div>  
                    <h4>Streamm Live</h4>
                    </div>
                </div>
               
                 <p>Streamm Live is a new live streaming platform that lets you watch live streams of your favorite celebrities.</p>
                </div>

                {/* 
            ////////2option///////////// */}
            
            <div className='monetizdiv'>
                <div className='monetizsubdiv'>
                    <div className='monetizflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/devices.png" /></div>  
                    <h4>For all devices</h4>
                    </div>
                </div>
               
                <p>Make sure you are signing in to all the devices you use regularly. This will help keep your information safe and secure.</p>
              </div>

       </div>




        </div>
       
     </div>
  )
}
