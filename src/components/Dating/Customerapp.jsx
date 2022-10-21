import React from 'react'
import "./Customerapp.css"

export default function Customerapp() {
  return (
    <div className='szcustomerappdiv'>
        <div className='szcustomerappdivflex'>
            <div className='szcustomermobile'>
                <div className='datingmobilebg'>
                    <img src="Images/Dating/mobilebackground.png"/> 
                </div>
                <div  className='datingphonecase'> 
                    <img src ="Images/Dating/phone.png" />
                </div>
                <div className='szcustomermobileimage'>
                    <img src="Images/Dating/home.png"/>
                </div>
            </div>
            <div className='szcustomerapptext'>
                <h2> Customer App</h2>
            <div className='datingtextbg'><img src="Images/Dating/customertextbg.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
       
       <div className='textsecond'>  
         <div className='datingtextbg'><img src="Images/Dating/customertextsecond.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
         </div>

          <div className='textthird'>
          <div className='datingtextbg'><img src="Images/Dating/customertextbg.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
          </div>

          <div className='textfourth'>  
         <div className='datingtextbg'><img src="Images/Dating/customertextsecond.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
         </div>
         
            </div>


        </div>
    </div>
  )
}
