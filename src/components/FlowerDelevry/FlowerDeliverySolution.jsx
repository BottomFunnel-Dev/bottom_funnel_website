import React from 'react'
import { useState } from 'react'
import "./FlowerDeliverySolution.css"

const FlowerDeliverySolution = () => {

  const [imageChange, setImageChange] = useState("Images/Flowerdeliverypage/Easyregister.png")


  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)

  }


  const flowerdeliverysolutiondata = [

    {
      mimg: "Images/Flowerdeliverypage/Easyregister.png",
      htxt: "Easy Registration",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
    },

    {
      mimg: "Images/Flowerdeliverypage/DriverProfile.png",
      htxt: "Buy Flowers",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
    },

    {
      mimg: "Images/Flowerdeliverypage/Multiplepaymentoption.png",
      htxt: "Multiple Payment Options",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
    },

    {
      mimg: "Images/Flowerdeliverypage/Trackorder.png",
      htxt: "Tracking Details",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
    },





  ]




  return (
    <div className='flowerdeliverysolutionmainbox'>
      <div className='flowerdeliveryappsolutionboxfortext'>
        <h2>A SNEAK-PEEK OF OUR</h2>
        <h1>Flower Delivery App Solution</h1>
        <br></br>
        <button className='flowerdeliverysolutionbutton'>Get Started</button>
      </div>

      <div className='flowerdeliverysolutionflexbox'>

        <div className='flowerdeliverysolutionflexboxleft'>
          <h2>Customer App</h2>
          {flowerdeliverysolutiondata.map((el) => {
            return (
              <div className='flexboxingmappingdivleftforserviceflower'
                key={el.htxt} onMouseEnter={() => {

                  handleImageChange(el.mimg)
                }}



              ><h4>{el.htxt}</h4>
                <p>{el.stxt}</p>

              </div>
            )


          })}



        </div>





        <div className='flowerdeliverysolutionflexboxright'>

          <div className='flowerdeliverysolutionflexboxrightinnerimageone'>
            <img src='Images/Flowerdeliverypage/Rectangle4191.png' alt='image 1' />
          </div>



          <div className='flowerdeliverysolutionflexboxrightinnerimagetwo'>
            <img src={imageChange} alt='image 2' />

          </div>

        </div>



      </div>






    </div>
  )
}

export default FlowerDeliverySolution
