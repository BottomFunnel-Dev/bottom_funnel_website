import React from 'react';
import './SeoDigitalmarketingindustries.css'
// import fitness from '../Images/fitness 2.jpg'
// import food from '../Images/food 3.jpg'
// import financial from '../Images/financial services 2.jpg'
import { useState } from 'react';
import { ListItemSecondaryAction } from '@mui/material';
export const SeoDigitalmarketingindustries = () => {
    const [condition ,setcond]=useState(false);
    const [num,setnum]=useState();

    const toggle=(i)=>{
        setnum(i)
        setcond(true)
    }
    const toggle1=(i)=>{
        setnum(i)
        setcond(false)
    }

    const arr1=[
        {
            image:'',
            services:"financial services",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi illo maiores maxime laudantium eveniet voluptatem esse nihil fugiat est repudiandae! Natus nostrum amet iusto similique cumque dolorum repellendus ullam totam"
        },
        {
            image:'',
            services:"financial services",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi illo maiores maxime laudantium eveniet voluptatem esse nihil fugiat est repudiandae! Natus nostrum amet iusto similique cumque dolorum repellendus ullam totam"
        },
        {
            image:'',
            services:"financial services",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi illo maiores maxime laudantium eveniet voluptatem esse nihil fugiat est repudiandae! Natus nostrum amet iusto similique cumque dolorum repellendus ullam totam"
        },
    ]
    return (
        <div className='_Seodmindustries'>
            <h1>INDUSTRIES WE HAVE SERVED</h1>
        <div className='_Seodmindustriesmaindiv'>
          {
          arr1.map((item,i)=>{
            return(<>
                <div className={condition && num==i ? '_Seodmindustriesimage1':'_Seodmindustriesimage'} onMouseEnter={()=>toggle(i)} onMouseLeave={()=>toggle1(i)}>
                   <img src={item.image}/>
                    <div className={condition && num==i ? '_Seodmindustriestext1'  :'_Seodmindustriestext'} onMouseEnter={()=>toggle(i)}>
                        {item.services}
                    </div>
                </div>
             
                </>
            )
          })
          }
        </div>
        </div>
    )
}
