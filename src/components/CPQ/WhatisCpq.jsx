import React, { useState } from 'react'
import "./WhatisCpq.css"

export const WhatisCpq = () => {


    const [imageChange, setImageChange] = useState("Images/CPQ/surface leads-1.png")
const whatiscpqdata = [
    {
        htxt:"Bring your product catalog into your CRM",
        stxt:"Maintain an updated list of products available for sale and view all related information on the product page like SKU number, category, product validity, and more.",
        images:"Images/CPQ/surface leads-1.png",
    },

    {
        htxt:"Make product recall easier with images",
        stxt:"Add product image and description to help salespeople identify products easily and configure product validity to ensure the catalog is updated for use.",
        images:"Images/CPQ/surface leads.png",
    },

    {
        htxt:"Associate products with deals",
        stxt:"Add products to deals to automatically update the deal value based on selected products.",
        images:"Images/CPQ/sync document.png",
    },


]
const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)

 }

  return (
    <div className='whatiscpqmainboxes'>
    <div className='whatiscpqflexboxupper'>
    <div className='whatiscpqleftbox'>
    <h1>What is <span className='specialcolor'>CPQ</span> ?</h1>
    </div>
    <div className='whatiscpqrightbox'><p>CPQ stands for Configure, Price, Quote. With the CPQ add-on in Freshsales, sales teams can generate error-free documents—like invoices, quotes, onboarding documents, contracts, and more—in a few clicks. CPQ in Freshsales enables businesses to maintain an up-to-date product catalog that includes pricing information for products, right in the CRM. As a result, salespeople are equipped with current pricing when the time comes to send a quote or generate an invoice. Salespeople can send documents to prospects and customers right from the CRM and keep track of updates on the activity timeline.</p> </div>
    </div>

    <div className='whatiscpqsometextboxheader'><h1>Simplify inventory management within the CRM</h1></div>
<div className='whatiscpqinnerimageandouterimages'>
<div className='whatiscpqouterimageonlyboxes'>
<img src={imageChange} alt='images' />
</div>

</div>
<div className='cpqwhatisstatemanagementbox'>{whatiscpqdata.map((e)=>{
    return (
        <div className='cpqwhatisindivisuallydatamappingbox'
        key={e.htxt} onClick={() => {
          
            handleImageChange(e.images)
        }}
        
        ><div className='whatiscpqmappingboxh3'><h3>{e.htxt}</h3></div>
       <p>{e.stxt}</p>
        </div>
    )
})}</div>
    </div>
  )
}
