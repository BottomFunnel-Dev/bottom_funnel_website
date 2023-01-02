import React, { useState } from 'react'
import './ottSolutions.css'

export const OttSolutions = () => {

    const [imageChange,setImageChange] =useState("Images/ott-app/Group901187.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  


const OttSolutionsData = [

{
    img:"Images/ott-app/Group901188.png",
    head:"Home Screen",
    para:"Shows all the latest movies/ series available",

},

{
    img:"Images/ott-app/Group901187.png",
    head:"Search Window",
    para:"To search all your shows & movies",

},


{
    img:"Images/ott-app/Group901188.png",
    head:"Categories",
    para:"Separate categories for shows and movies",

},


{
    img:"Images/ott-app/Group901187.png",
    head:"Vide Screen",
    para:"The playing screen of the same",

},





]
  return (
    <div className="ott-solutions-Container-Main">

      <div className="ott-solutions-Heading">
        <h1>OTT App Solutions</h1>
        <p>The best Ott solutions you can get and what we offer</p>
      </div>
      
      
      <div className="ott-App-Container">
        <div className="ott-app-left-div">
          <div className="ott-app-left-div-Frame-For-Images">
            <img src={imageChange} alt="" />
          </div>
        </div>
        
        <div className="ott-app-right-div">
          
        <div className='ott-app-right-div-heading'>
                <h1>User Experience App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem in veniam nemo, minima quisquam ipsa esse nesciunt, nulla vero inventore quas hic modi ratione assumenda adipisci soluta eaque veritatis.</p>
            </div>
            
          {OttSolutionsData.map((e) => {
            return (
              <div
                    className="ott-app-right-div-For-cards"
                    key={e.head}
                    onMouseEnter={() => {
                    handleImageChange(e.img);
                    }} >
                    
                    <h3>{e.head}</h3>
                    <p>{e.para}</p>
             </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
