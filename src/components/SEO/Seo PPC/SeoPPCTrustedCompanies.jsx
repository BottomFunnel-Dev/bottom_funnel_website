import './SeoPPCTrustedCompanies.css';
import React from "react";
import Slider from "react-slick";
import tata from '../Images/Tata.jpg';
import hdfc from '../Images/HDFC.jpg';
import airtel from '../Images/Airtel.jpg';
import Hindustan from '../Images/Hindustan.jpg';
import Google from "../Images/Google.jpg";
const SeoPPCTrusted = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 2500,
        variableWidth: true
    }
    return (
    <div className='_SeoPPCTrusted'>

        <div className="_SeoPPCTrustedtext">
            Trusted By Global Brands
        </div>
        <div className='_SeoPPCTrustedCarousel'>
            <Slider {...settings}>
                <div className='_SeoPPCbrandimg'>
                    <img src={tata} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                    <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={Hindustan} alt="image.jpg"/>  
                </div>
                <div  className='_SeoPPCbrandimg'>
                <img src={Google} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={Hindustan} alt="image.jpg"/>  
                </div>
            </Slider>
        </div>
    </div>
    )
}
export default SeoPPCTrusted;