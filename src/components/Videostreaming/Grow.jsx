import React from 'react'
import "./Grow.css"
export default function Grow() {
  return (
    <div className='grow' >
                 <h1>We help you grow</h1> 
            <div className='growdiv'>
        
                <div className='growmobile'>
                    <div className='growmobileimage'><img src="Images/Videostreaming/newmoviesimage.png" /></div>
                </div>
                <div className='growtext'>
                    <div> 
                    <h2>Best Shows</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque eos, tempore nesciunt atque consectetur facere necessitatibus nulla mollitia iure delectus autem consequuntur molestias iste voluptatum rem animi dolore est officia?</p>
                   <div className='szbtnget'><p>Get Started </p> <div className='szstarticon'> <img src="Images/Videostreaming/Arrow.png" /> </div> </div>
                   </div>
                </div>

                 
            </div>
    {/* //////////tab//////////// */}
            <div className='growdiv'>
                   
                   <div className='optimizetext'>
                          <div>
                             <h1>Optimized for growth </h1>
                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat incidunt laboriosam architecto non, velit repellendus iste sit officia neque, consequatur dolor necessitatibus ex tenetur iure nam corporis explicabo modi quibusdam?</p>
                             <div className='szbtnget'><p>Get Started </p> <div className='szstarticon'> <img src="Images/Videostreaming/Arrow.png" /> </div> </div>
                          </div>
                   </div>
                   <div className='optimizeimage'>
                      <div className='crown'><img src="Images/Videostreaming/tvapp.png" /></div>    
                   </div>
            </div>

            {/* //////////////////mobile/////////// */}

            <div className='growdiv'>
                    <div className='starwars'>
                         <div className='starwarimage'><img src="Images/Videostreaming/starwars.png" /></div> 
                    </div>

                    <div className='starwartext'>
                    <div>
                             <h1>Monetize your way</h1>
                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat incidunt laboriosam architecto non, velit repellendus iste sit officia neque, consequatur dolor necessitatibus ex tenetur iure nam corporis explicabo modi quibusdam?</p>
                             <div className='szbtnget'><p>Get Started </p> <div className='szstarticon'> <img src="Images/Videostreaming/Arrow.png" /> </div> </div>
                          </div>
                    </div>
                </div>


    </div>
  )
}
