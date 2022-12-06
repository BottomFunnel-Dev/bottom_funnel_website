import React from 'react'
import "./DigitaMarketWeOffers.css"


export const DigitaMarketWeOffers = () => {

    const digitalmarketweofferdata = [
        {
            numbering:"01",
            htxt:"SEO Service",
            stxt:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engine SEO targets unpaid traffic rather than direct trafic or paid trafic",
            logo:"Images/digitalmarket/Seo.png"
        },


        {
            numbering:"02",
            htxt:"Local SEO sERVICE",
            stxt:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engine SEO targets unpaid traffic rather than direct trafic or paid trafic",
            logo:"Images/digitalmarket/localseo 1.png"
        },



        {
            numbering:"03",
            htxt:"SEM Services",
            stxt:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engine SEO targets unpaid traffic rather than direct trafic or paid trafic",
            logo:"Images/digitalmarket/sem 1.png"
        },


        {
            numbering:"04",
            htxt:"PPC Management Services",
            stxt:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engine SEO targets unpaid traffic rather than direct trafic or paid trafic",
            logo:"Images/digitalmarket/ppc 1.png"
        },



        {
            numbering:"05",
            htxt:"Guest Posting Services",
            stxt:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engine SEO targets unpaid traffic rather than direct trafic or paid trafic",
            logo:"Images/digitalmarket/guest 1.png"
        },



        {
            numbering:"06",
            htxt:"Link Building Services",
            stxt:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engine SEO targets unpaid traffic rather than direct trafic or paid trafic",
            logo:"Images/digitalmarket/email 1.png"
        },



        {
            numbering:"07",
            htxt:"Email Marketing Services",
            stxt:"Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engine SEO targets unpaid traffic rather than direct trafic or paid trafic",
            logo:"Images/digitalmarket/link 1.png"
        },



    ]

  return (
    
    <div>
    <div className='weofferbesttextbox'>
    <h1>We Offers the Best Digital Marketing</h1>
    </div>
    <div className='digitalmarketingweoffersmainboxes'>{digitalmarketweofferdata.map((e)=>{
return (
    <div className= "marketplaceboxerflex">
    <div className='marketplacenumberingbox'>{e.numbering}</div>
    <div className='marketplaceiconbox'><img src= {e.logo} alt='icon' /></div>
    <div className='marketplacetxtbox'>
    <h4 className='colorred'>{e.htxt}</h4>
    <p>{e.stxt}</p>
    </div>
    <div><button className='digitalmarketingwhybutton'>Choose Service</button></div>
    </div>
)


    })}
   
   
    
    </div>

    </div>
  )
}

