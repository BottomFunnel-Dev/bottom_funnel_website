import './Seotrusted.css';
import React from "react";
import Slider from "react-slick";
import tata from '../../ImageSection/Tata.jpg';
import hdfc from '../../ImageSection/HDFC.jpg';
import airtel from '../../ImageSection/Airtel.jpg';

const Trusted = () => {
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
    <div className='_SeoTrusted'>

        <div className="_SeoTrustedtext">
            Trusted By Global Brands
        </div>
        <div className='_SeoTrustedCarousel'>
            <Slider {...settings}>
                <div className='_Seobrandimg'>
                    <img src={tata} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={tata} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={tata} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_Seobrandimg'>
                    <img src={airtel} alt="image.jpg"/>  
                </div>
                
            </Slider>
        </div>
    </div>
    )
}
export default Trusted;