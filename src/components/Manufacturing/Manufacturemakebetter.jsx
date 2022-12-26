import React from 'react'
import "./Manufacturemakebetter.css"

export const Manufacturemakebetter = () => {

    const manufacturingbetterdatasecond=[
        {
            txt:"Which sources are you getting the most leads from",
        },
        {
            txt:"Which products are selling the best and which ones you need to stop manufacturing",
        },
        {
            txt:"who are your high-paying distributors/dealers",
        },

        {
            txt:"How many contracts are you winnig every year",
        },

        {
            txt:"which region or industry are you getting the most contracts from",
        },

        {
            txt:"How are your sales teams performing ?",
        },
    ]


  return (
    <div className='manufacturemakebettermainboxes'>
    <div className='manufacturemakebetterheadingtext'>
    <h3>Make better business decisions with valuable insights</h3>
    <h4>Real-time sales and marketing reports make it easy to identify bottlenecks and find reasons for lost deals.with manufacturing CRM like bottom funnel sales you can understand</h4>
    </div>
    <div className='manufacturingmakebettermappingbox'>{manufacturingbetterdatasecond.map((e)=>{
        return (
            <div className='manifacturingmakebetterindivisuallybox'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.377 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>

<p>{e.txt}</p>
            
            </div>
        )
    })}</div>
 
    <div className='manufacturesmakebetterimagebox'>
    <img src='Images/Manufacturing/44.png' alt='images' />
    </div>
    <div className='manufacturinglowerbannerinclude'>
    <h1>Get one step closer to your customers and win more business</h1>
    <p>with Bottom funnel, get complete end to end visibility into your distributors and retailer's journey.you also get to customize the essential data points you want to see upfront in the summary and highlights section.Using this information, you can br priactive in building better products, collaborating with different teams,targetting the right industries and tailoring your messaging accordingly.This not just helps boost your revenue but also creates an edge over your competitors by always staying two steps ahead in the game. </p>
    <div className='manufacturinglowerbannerincludeimage'>
    <img src='Images/Manufacturing/manufaturing-vector-animation.gif' alt='images' />
    </div>
    </div>


    </div>
  )
}
