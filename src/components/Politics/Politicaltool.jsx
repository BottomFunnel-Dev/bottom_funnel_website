import React from 'react'
import "./Politicaltool.css"

export default function Politicaltool() {
  return (
    <div className='szpoliticaltool'>
        <div className='szpolicstoolhead'>
            <h1>Tools & frameworks that we use to make your Political app engaging</h1>
            </div> 
           <div className='szpoliticaltoolsub'> 
               <div className='szpoliticaltoolpara'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, provident facere id odio qui reprehenderit, unde fuga assumenda inventore excepturi nulla saepe. Aspernatur voluptatibus nam perspiciatis maiores quaerat temporibus quidem!</p>
                </div>
                <div className='szpoliticalimagesdiv'>
                      <div>
                        <div className='crossimg'><img src="Images/Politics/cross.png"/></div>
                        <p>Cross-plateform solution</p>
                      </div>

                      <div>
                        <div  className='crossimg'><img src="Images/Politics/blockchain.png"/></div>
                     <p>Blockchain</p>
                      </div>

                      <div>
                        <div  className='crossimg'><img src="Images/Politics/IoT.png"/></div>
                       <p>IoT</p>
                      </div>

                      <div>
                        <div  className='crossimg'><img src="Images/Politics/artificial-intelligence.png"/></div>
                    <p>Arificial Intelligence</p>
                      </div>
                </div>
          </div>
    </div>
  )
}
