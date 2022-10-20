import React from 'react'
import "./Featuresection.css"

export default function Featuressection() {
  return (
    <div className='szvideofeature'>
          <div> 
        <h1>Features</h1>
        <p>You take care of the video quality and we take care of everything else</p>
          </div>
  
          <div className='szfeaturesubcontainer'> 
             
          <div >  
              <div className='updatediv'>
                <div className='updatesubdiv'>
                    <div className='updateflexdiv'> <div className='updateimg'><img src="Images/Videostreaming/update.png" /></div>  
                    <h4>Update On Time</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

              {/* 
            ////////2option///////////// */}
            
            <div className='reminderdiv'>
                <div className='remindersubdiv'>
                    <div className='reminderflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/reminder.png" /></div>  
                    <h4>Reminders</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

          </div>



          <div >  
              <div className='updatediv'>
                <div className='updatesubdiv'>
                    <div className='updateflexdiv'> <div className='updateimg'><img src="Images/Videostreaming/integration.png" /></div>  
                    <h4>Social media Integration  </h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

              {/* 
            ////////2option///////////// */}
            
            <div className='reminderdiv'>
                <div className='remindersubdiv'>
                    <div className='reminderflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/notification.png" /></div>  
                    <h4>Push Notification</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

          </div>


          <div >  
              <div className='updatediv'>
                <div className='updatesubdiv'>
                    <div className='updateflexdiv'> <div className='updateimg'><img src="Images/Videostreaming/rating.png" /></div>  
                    <h4>Ratings</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

              {/* 
            ////////2option///////////// */}
            
            <div className='reminderdiv'>
                <div className='remindersubdiv'>
                    <div className='reminderflexdiv'> <div className='uploadimg'><img src="Images/Videostreaming/chatting.png" /></div>  
                    <h4>Live Chatting</h4>
                    </div>
                </div>
               
                <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
              </div>

          </div>
          </div>
    </div>
  )
}
