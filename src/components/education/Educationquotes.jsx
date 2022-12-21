import React from 'react'
import "./Educationquotes.css"

export default function Educationquotes() {
  return (
    <div className='productcontainer'>

        <div className='szproduct'>
        <div className='szproductleft'>
           <h1>Student Application</h1>
           <p> Enhance your students’ learning journey with an easy-to-understand education app.</p>
            <div className='quotesflex'>
              
              <div className='quotescircle'>
               <div  className="correct"><img src="Images/education/correct.png"/> </div> 
              </div>
              <p>Recorded/Live lectures and study notes </p>
            </div>

            {/* ///////////2//////// */}
            <div className='quotesflex'>
              <div className='quotescircle'>
                 <div   className="correct"><img src="Images/education/correct.png"/></div> 
                 
              </div>
              <p>Track course progress</p>
            </div>

            {/* /////////////3///////////// */}
             <div className='quotesflex'>
              <div className='quotescircle'>
                 <div  className="correct"><img src="Images/education/correct.png"/></div> 
                 
              </div>
              <p>Doubt discussion platform </p>
            </div>
            
        </div>

        <div className='szproductright'>

          <div> <img className="circletop"src="Images/EducationDev/liveLecture.png" /></div>
          {/* <div> <img className="szphone" src="Images/education/phone.png" /></div> */}
          {/* <div>   <img className="homepage" src="Images/education/homepage.png" /></div> */}
             
             
           
        </div>
        
        </div>

           {/* //////tab/////// */}

        <div className='szproduct'>
          <div className='szproductright'>
             <div className="szpolygon"> <img  src="Images/education/polygonimage.png" /></div> 
             <div  className='sztabletcase'>    <img  src="Images/EducationDev/attendanceProgress.png"/></div>
             {/* <div className="szteblateadmin"> <img src='Images/education/teblateadmin.png' /></div>     */}
        </div>
          <div className='szproductleft'>
            <h1>Tutor dashboard</h1>
            <p>Provide your tutor the ease to manage tutoring, connect with students, see their progress,etc. in one screen.</p>
            <div className='quotesflex'>
              <div className='quotescircle'>
               <div  className="correct"><img src="Images/education/correct.png"/> </div> 
                
                 
              </div>
              <p>Manage students’ attendance and progress </p>
            </div>

            {/* ///////////2//////// */}
            <div className='quotesflex'>
              <div className='quotescircle'>
                 <div   className="correct"><img src="Images/education/correct.png"/></div> 
                 
              </div>
              <p> Interact with students </p>
            </div>

            {/* /////////////3///////////// */}
             <div className='quotesflex'>
              <div className='quotescircle'>
                 <div  className="correct"><img src="Images/education/correct.png"/></div> 
                 
              </div>
              <p>Studying platform for revising before tutoring </p>
            </div>
            
        </div>
        </div>
        {/* ////////mobile/////// */}
         <div  className='szproduct'>
         <div className='szproductleft'>
          <h1>Admin panel</h1>
          <p>Manage all the activities of business from students to tutors to finance at one platform.</p>
            <div className='quotesflex'>
              <div className='quotescircle'>
               <div  className="correct"><img src="Images/education/correct.png"/> </div> 
                
                 
              </div>
              <p> Supervise all students and tutors </p>
            </div>

            {/* ///////////2//////// */}
            <div className='quotesflex'>
              <div className='quotescircle'>
                 <div   className="correct"><img src="Images/education/correct.png"/></div> 
                 
              </div>
              <p>Manage payments</p>
            </div>

            {/* /////////////3///////////// */}
             <div className='quotesflex'>
              <div className='quotescircle'>
                 <div  className="correct"><img src="Images/education/correct.png"/></div> 
                 
              </div>
              <p>Auto-generated analytical graphs</p>
            </div>
            
        </div>

        <div className='szproductright'>
          <div>
            {/* <img className="phonecase" src="Images/education/phone.png" /> */}
            <img className='landingimg' src="Images/EducationDev/Supervise.png"/>
            <img className="rectangleimg" src="Images/education/rectanglebox.png"/>
          </div>
        </div>

         </div>
 
        
    </div>
  )
}
