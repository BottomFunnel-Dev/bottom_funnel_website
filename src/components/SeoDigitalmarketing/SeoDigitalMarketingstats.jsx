import React from 'react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
// import dm from '../Images/dm.jpg'
import './SeoDigitalmarketingstats.css'

export const SeoDigitalMarketingstats = () => {
    const[a,seta]=useState(0);
    const[b,setb]=useState(0);
    const[c,setc]=useState(0);
    const[d,setd]=useState(0);

    const { ref, inView } = useInView({
        threshold: 0
      });

      let count=0;
  
      const interval = setInterval(() => {
      count++;
        if (inView === true && count===1) 
        {
            if(a<=9)
            {
                seta(a+1);
            }
            if(b<90)
            {
                setb(b+1);
            }
            if(c<1500)
          {
                setc(c+10);
          }
          if(d<4000)
          {
                setd(d+100);
          }
        }
      }, 100);
    
      if (d===1500) {
        clearInterval(interval);
      }
      console.log(inView)
    return (
        <div className='_SeoDigitalMarketingmaindiv'>
            <div className='_SeoDigitalMarketingstats'>
                <h1 className='_SeoDigitalMarketingheading'>We’re not all talk, our work says it all</h1>
            </div>
            <div className='_SeoDigitalMarketing' inView={inView} ref={ref}>
                <div className='_SeoDigitalmarketingImage'>
                    <img src="Images/digitalmarketing.jpg"/>
                </div>
                <div className='_SeoDigitalMarketinginfo'>
                    <div className='_SeoDigitalMarketinginfo1'>
                        Media spend is something that we manage monthly for ads on different platforms and social networking sites.
                    </div>
                    <div className='_SeoDigitalMarketinginfo2'>
                       {a}$
                    </div>
                    <div className='_SeoDigitalMarketinginfo1'>
                        Media spend is something that we manage monthly for ads on different platforms and social networking sites.
                    </div>
                    <div className='_SeoDigitalMarketinginfo2'>
                        {b}$
                    </div>
                    <div className='_SeoDigitalMarketinginfo1'>
                        Media spend is something that we manage monthly for ads on different platforms and social networking sites.
                    </div>
                    <div className='_SeoDigitalMarketinginfo2'>
                        {c}$
                    </div>
                    <div className='_SeoDigitalMarketinginfo1'>
                        Media spend is something that we manage monthly for ads on different platforms and social networking sites.
                    </div>
                    <div className='_SeoDigitalMarketinginfo2'>
                        {d}$
                    </div>
                </div>
            </div>
        </div>
    )
}
