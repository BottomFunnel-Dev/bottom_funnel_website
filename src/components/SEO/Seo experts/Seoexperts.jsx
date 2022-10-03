import React, { useState } from "react";
import './Seoexperts.css'

export default function Seoexperts(){
    const [show,setshow] =useState(false);
    const [num,setnum]=useState();

const data=[{
    heading:"Have been at that road",
    content:"With years of profound experience, one of the most important things that we learned was - do not mess with SEO techniques and Search Engine Algorithms. We stand by that."
},
{
    heading:"A NO-NO to SEO malpractice",
    content:"With years of profound experience, one of the most important things that we learned was - do not mess with SEO techniques and Search Engine Algorithms. We stand by that."
},
{
    heading:"Have been at that road",
    content:"With years of profound experience, one of the most important things that we learned was - do not mess with SEO techniques and Search Engine Algorithms. We stand by that."
},
{
    heading:"Have been at that road",
    content:"With years of profound experience, one of the most important things that we learned was - do not mess with SEO techniques and Search Engine Algorithms. We stand by that."
},
{
    heading:"Have been at that road",
    content:"With years of profound experience, one of the most important things that we learned was - do not mess with SEO techniques and Search Engine Algorithms. We stand by that."
}
]

return(
        <div className="_Seoexpertsmaindiv">
            <h1>What's so special about our Seo Experts ?</h1>
              {  data.map((items,i)=>{
                    return(
                        <div key={i} className="_Seoinfodiv">
                            <div  className="_Seoinfodiv1">
                                <p key={i}>
                                    {items.heading}
                                </p>
                            </div>
                            <div className="_Seoinfodiv2">
                                <p key={i}>
                                    {items.content}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        <div>

        </div>
        </div> 
)

}