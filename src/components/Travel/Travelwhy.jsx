import React from 'react'
import "./Travelwhy.css"

export default function Travelwhy() {
    return (
        <div className='sztravelwhysection'>
            <div className='sztravelsubdiv'>
                <div className='sztravelchooseimages'>
                    <img src="Images/Travel/travelpeople.png" />
                </div>
                <div className='sztravelchooseright'>
                  <div className='travelchooseheading'>
                        <h2>Why Choose Us</h2>
                        <p>Enjoy different experiences in every place you visit and discove new and affordable adventures of course.</p>
                    </div>
                     
                    <div className='travelboxes'>
                        <div className='travelchooseicons'>
                            <img src="Images/Travel/ontimedelivery.png" />
                        </div>
                        <div className='sztravelcustomer'> 
                        <h3>On time Delivery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    <div  className='travelboxes'>
                        <div className='travelchooseicons'>  <img src="Images/Travel/customerservice.png" /></div>
                        <div className='sztravelcustomer'> 
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div  className='travelboxes'>

                        <div className='travelchooseicons'><img src="Images/Travel/flexibility.png" /></div>
                        <div className='sztravelcustomer'> 
                        <h3>Flexibility </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div  className='travelboxes'>
                        <div className='travelchooseicons'><img src="Images/Travel/rating.png" /></div>
                            <div className='sztravelcustomer'> 
                        <h3> Customer Satisfaction  </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                  
                    </div>
                </div>
            </div>

        </div>
    )
}
