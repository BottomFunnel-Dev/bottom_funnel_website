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
      stxt: "The easiest way to ensure that customers register and complete their registration process is to use a registration form. "
    },

    {
      mimg: "Images/Flowerdeliverypage/DriverProfile.png",
      htxt: "Buy Flowers",
      stxt: " The customer opens the flower store website and browses through the available products. The customer selects the product they wish to buy and adds it to their cart."
    },

    {
      mimg: "Images/Flowerdeliverypage/Multiplepaymentoption.png",
      htxt: "Multiple Payment Options",
      stxt: "Technology we used which secure to pay online using any payment option The order is delivered to the customer.The store prepares and ships the order to the customer's."
    },

    {
      mimg: "Images/Flowerdeliverypage/Trackorder.png",
      htxt: "Tracking Details",
      stxt: "Yes, the customer can track their order using the Order Tracking feature available on the App. The customers have to enter their order number or mobile number to track their order."
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
