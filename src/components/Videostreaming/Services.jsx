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
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>
{/* 
            ////////2option///////////// */}
            
            <div className='monetizdiv'>
                <div className='monetizsubdiv'>
                    <div className='monetizflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/monetization.png" /></div>  
                    <h4>Monetization</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

         </div>
          <div>
             <div className='uploaddiv'>
                <div className='uploadsubdiv'>
                    <div className='uploadflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/stream.png" /></div>  
                    <h4>Stream On-Demand</h4>
                    </div>
                </div>
               
                 <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
                </div>

                {/* 
            ////////2option///////////// */}
            
            <div className='monetizdiv'>
                <div className='monetizsubdiv'>
                    <div className='monetizflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/analytics.png" /></div>  
                    <h4>Analytics</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

          </div>
       <div> 
       <div className='uploaddiv'>
                <div className='uploadsubdiv'>
                    <div className='uploadflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/live.png" /></div>  
                    <h4>Streamm Live</h4>
                    </div>
                </div>
               
                 <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
                </div>

                {/* 
            ////////2option///////////// */}
            
            <div className='monetizdiv'>
                <div className='monetizsubdiv'>
                    <div className='monetizflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/devices.png" /></div>  
                    <h4>For all devices</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

       </div>




        </div>
       
     </div>
  )
}
