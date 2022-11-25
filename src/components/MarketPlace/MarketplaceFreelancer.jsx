import React, {useState} from 'react'
import "./MarketplaceBanner.css"

const MarketplaceFreelancer = () => {

    const [imageChange, setImageChange] = useState("Images/Marketplaceapp/Freelancerappcreen/Register.png")

    const freelancerData = [
        {
            img: "/Images/Marketplaceapp/icons/Group339964.png",
            Htxt: "Register Yourself",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
            phone: "/Images/Marketplaceapp/Freelancerappcreen/Register.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Component44.png",
            Htxt: "In App Chat",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
            phone: "/Images/Marketplaceapp/Freelancerappcreen/inappchat.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Group339974.png",
            Htxt: "Find Popular Jobs",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
         phone: "/Images/Marketplaceapp/Freelancerappcreen/FindPopularjobs.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Group339973.png",
            Htxt: "Easy Apply",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris",
            phone: "/Images/Marketplaceapp/Freelancerappcreen/Easyapply.png"
        }

    ]

    const handleImageChange = (imagepath) => {
       setImageChange(() => imagepath)
       console.log(imagepath)
    }


    return (
        <div style={
            {marginTop: "5%"}
        }>
            <div className='marketplacefreelanceruppertxt'>
                <h1>Build A Freelancer Marketplace Like Upwork & Fiverr</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis.</h5>
            </div>

            <div className='freelancerflexbox'>
                <div className='freelancerflexboxleft'>
                    <img className='imagefreelance1' src="/Images/Marketplaceapp/Bannersandbackgrounds/Component42.png" alt='image1'/>
                    <div className='freelancerflexboxleft2ndimage'>
                        <img className='imagefreelance2' src={imageChange} alt='image2'/>
                        <div className='freelancerflexboxleft3rdimage'>
                            <img className='imagefreelance3' src='/Images/Marketplaceapp/Bannersandbackgrounds/picture.png' alt='image2'/>
                        </div>

                    </div>
                </div>


                <div className='freelancerflexboxright'>
                    <h2>Freelancer Website & App</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris at tortor</h6>

                    <div className='freelancermaindivright'>
                        <img className='freelancermaindivrightindex0' src='/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0'/>   
                        <img className='freelancermaindivrightindex2' src='/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0'/>
                        <div className='marketplacefreelance2ndchild' >
                            {
                            freelancerData.map((e) => {
                                return (

                                    
                                    <div className='flexboxfreelanceagain'
                                    
                                    key={e.Htxt} onMouseEnter={() => {
                                        console.log(e);
                                        handleImageChange(e.phone)
                                    }}
                                     >
                                        <div className='imageboxflexboxinsiderimage'><img className='smalllogomarketplaceinner'
                                        
                                                src={
                                                    e.img
                                                }
                                                alt=''/></div>
                                        <div className='imageboxflexboxinsidertext'
                                            >
                                            <h3>{
                                                e.Htxt
                                            }</h3>
                                            <p>{
                                                e.stxt
                                            }</p>

                                        </div>

                                    </div>

                                )
                            })
                        }</div>


                    </div>


                </div>

            </div>


        </div>
    )
}

export default MarketplaceFreelancer
