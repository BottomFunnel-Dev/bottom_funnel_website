import React from "react";
import './Reviews.css';
import Volkswagen from "../../ImageSection/Volkswagen.jpg"  
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function Reviews() {
    return (

        <div className="_SeoReviewsmaindiv">
            <div className="_SeoReviews1">
                <div className="_SeoCompanyRatings">
                    <img src="Images/seopages/clutch.png" alt="image" />
                    <div className="_SeoRatingStar">
                    <IconContext.Provider value={{ className: 'ratingIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoReviews1">
                <div className="_SeoCompanyRatings">
                    <img src="Images/seopages/Appfutura.png" alt="image" />
                    <div className="_SeoRatingStar">
                    <IconContext.Provider value={{ className: 'ratingIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>

                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className="_SeoReviews1">
                <div className="_SeoCompanyRatings">
                    <img src="Images/seopages/peopleperhour.png" alt="image" />
                    <div className="_SeoRatingStar">
                    <IconContext.Provider value={{ className: 'ratingIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoReviews1">
                <div className="_SeoCompanyRatings">
                    <img src="Images/seopages/goodfirms.png" alt="image" />
                    <div className="_SeoRatingStar">
                    <IconContext.Provider value={{ className: 'ratingIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            
        </div>
    )
}
export default Reviews