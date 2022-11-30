// import React, { useState } from 'react'
// import "./MarketplaceBanner.css"

// const MarketplaceFreelancer = () => {

//     const [imageChange, setImageChange] = useState("Images/Marketplaceapp/Freelancerappcreen/Register.png")

//     const freelancerData = [
//         {
//             img: "/Images/Marketplaceapp/icons/Group339964.png",
//             Htxt: "Register Yourself",
//             stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
//             phone: "Images/Marketplaceapp/Freelancerappcreen/Register.png"
//         }, {
//             img: "/Images/Marketplaceapp/icons/Component44.png",
//             Htxt: "In App Chat",
//             stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
//             phone: "Images/Marketplaceapp/Freelancerappcreen/inappchat.png"
//         }, {
//             img: "/Images/Marketplaceapp/icons/Group339974.png",
//             Htxt: "Find Popular Jobs",
//             stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
//             phone: "Images/Marketplaceapp/Freelancerappcreen/FindPopularjobs.png"
//         }, {
//             img: "/Images/Marketplaceapp/icons/Group339973.png",
//             Htxt: "Easy Apply",
//             stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
//             phone: "Images/Marketplaceapp/Freelancerappcreen/Easyapply.png"
//         }

//     ]

//     const handleImageChange = (imagepath) => {
//         setImageChange(() => imagepath)

//     }


//     return (
//         <div className='marketplacefreelancermaindivnewbanner'>
//             <div className='marketplacefreelanceruppertxt'>
//                 <h1>Build A Freelancer Marketplace Like Upwork & Fiverr</h1>
//                 <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis.</h5>
//             </div>

//             <div className='freelancerflexbox'>
//                 <div className='freelancerflexboxleft'>
//                     <img className='imagefreelance1' src="/Images/Marketplaceapp/Bannersandbackgrounds/Component42.png" alt='image1' />
//                     <div className='freelancerflexboxleft2ndimage'>
//                         <img className='imagefreelance2'
//                             src={imageChange}
//                             alt='image2' />
//                         <div className='freelancerflexboxleft3rdimage'>
//                             <img className='imagefreelance3' src='/Images/Marketplaceapp/Bannersandbackgrounds/picture.png' alt='image2' />
//                         </div>

//                     </div>
//                 </div>


//                 <div className='freelancerflexboxright'>
//                     <h2>Freelancer Website & App</h2>
//                     <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris at tortor</h6>

//                     <div className='freelancermaindivright'>
//                         <img className='freelancermaindivrightindex0' src='/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0' />
//                         <img className='freelancermaindivrightindex2' src='/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0' />
//                         <div className='marketplacefreelance2ndchild'>
//                             {
//                                 freelancerData.map((e) => {
//                                     return (


//                                         <div className='flexboxfreelanceagainforbanner'>

//                                             <div className='imageboxflexboxinsiderimagefreelancer'
                                              
                                                
//                                                 key={
//                                                     e.Htxt
//                                                 }
//                                                 onMouseEnter={
//                                                     () => {
//                                                         console.log(e);
//                                                         handleImageChange(e.phone)
//                                                     }
//                                                 }
                                                
//                                                 ><img className='smalllogomarketplaceinnerfreelancer'
// style={{
    
//     margin:"3%"
// }}
//                                                     src={
//                                                         e.img
//                                                     }
//                                                     alt='' /></div>
//                                             <div className='imageboxflexboxinsidertextfreelancer'>
//                                                 <h4>{
//                                                     e.Htxt
//                                                 }</h4>
//                                                 <p>{
//                                                     e.stxt
//                                                 }</p>

//                                             </div>

//                                         </div>

//                                     )
//                                 })
//                             }</div>


//                     </div>


//                 </div>

//             </div>


//         </div>
//     )
// }

// export default MarketplaceFreelancer






import React from 'react'
import { useState } from 'react'
import "./MarketplaceFreelancer.css"

const MarketplaceFreelancer = () => {

    const [imageChange, setImageChange] = useState("Images/Marketplaceapp/Freelancerappcreen/Register.png")

        const freelancerData = [
            {
                img: "/Images/Marketplaceapp/icons/Group339964.png",
                Htxt: "Register Yourself",
                stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in ",
                phone: "Images/Marketplaceapp/Freelancerappcreen/Register.png"
            }, {
                img: "/Images/Marketplaceapp/icons/Component44.png",
                Htxt: "In App Chat",
                stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in ",
                phone: "Images/Marketplaceapp/Freelancerappcreen/inappchat.png"
            }, {
                img: "/Images/Marketplaceapp/icons/Group339974.png",
                Htxt: "Find Popular Jobs",
                stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in ",
                phone: "Images/Marketplaceapp/Freelancerappcreen/FindPopularjobs.png"
            }, {
                img: "/Images/Marketplaceapp/icons/Group339973.png",
                Htxt: "Easy Apply",
                stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in ",
                phone: "Images/Marketplaceapp/Freelancerappcreen/Easyapply.png"
            }
    
        ]

        const handleImageChange = (imagepath) => {
                    setImageChange(() => imagepath)
            
                }
            




  return (
    <div className='marketplacefreelancermainbox'>
    <div className='freelancerboxflexingmain'>



    
    <div className='freelancermarketboxleftflexing'>
   
    <div className='freelancerimagebox1'><img className='imagefreelance1' src="/Images/Marketplaceapp/Bannersandbackgrounds/Component42.png" alt='image1' /></div>
    <div className='freelancerimagebox2'> <img className='imagefreelance1' src={imageChange} alt='image2' /></div>
    <div  className='freelancerimagebox3'><img className='imagefreelance1' src='/Images/Marketplaceapp/Bannersandbackgrounds/picture.png' alt='image2' /></div>
    
    </div>
    
    <div className='freelancermarketboxrightflexing'>
    <div className='freelancertextboxrightdiv'>
    <h2>Freelancer Website & App</h2>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris at tortor</h6>
    </div>
    <div className='freelancerboxforspecialimagedotted'>
    
    <div className='dottedimage1'><img className='specialimg' src='Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0'  /></div>
    <div className='dottedimage2'><img className='specialimg' src='Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0'  /></div>
    
  <div className='afterdottedinnerflecboxfreelancer'>{freelancerData.map((e)=>{
return (
    <div className='flexboxdivfreelancer'
    key={e.Htxt} onMouseEnter={() => {
        console.log(e);
         handleImageChange(e.phone)
        }
         }
    
    
    >
    <div className='frelancerinsiderlogo'><img className='imagelogofree' src={e.img} /></div>
    <div className='frelancerinsidertxt'><h5>{e.Htxt}</h5>
    <p>{e.stxt}</p>
    
    </div>
    </div>


)
  })}
  
 
  
  
  
  </div>
    
  
    
    
    </div>
    
    </div>
      
    </div>
    </div>
  )
}

export default MarketplaceFreelancer

