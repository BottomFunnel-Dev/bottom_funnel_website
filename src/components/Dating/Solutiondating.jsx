import React from 'react'
import "./Solutiondating.css"

export default function Solutiondating() {
  return (
   
    <div className='szdatingsolutiondiv'>
    <div> 
  <h1>solution</h1>
  <p>You take care of the video quality and we take care of everything else</p>
    </div>

    <div className='szdatingsolutionsubdiv'> 
       
    <div >  
        <div className='szupdatediv'>
              <h4>Update On Time</h4>
          <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
        </div>

        {/* 
      ////////2option///////////// */}
      
      <div className='szreminderdiv'>
              <h4>Reminders</h4>
          <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
        </div>

    </div>



    <div >  
        <div className='szupdatediv'>
           
              <h4>Social media Integration  </h4>
           
          <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
        </div>

        {/* 
      ////////2option///////////// */}
      
      <div className='szreminderdiv'>
              <h4>Push Notification</h4>
          <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
        </div>

    </div>


    <div >  
        <div className='szupdatediv'>
     
              <h4>Ratings</h4>
           
          <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
        </div>

        {/* 
      ////////2option///////////// */}
      
      <div className='szreminderdiv'>
              
              <h4>Live Chatting</h4>
          
         
          <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
        </div>

    </div>
    </div>
</div>
  )
}
