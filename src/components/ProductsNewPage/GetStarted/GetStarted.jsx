import React from 'react';
import "./GetStarted.css";

export const GetStarted = () => {
    return (
        <div className='productsGetStartedParentDiv'>
            <div className='productGetStartedInnerDiv'>
                <div className='productGetStartedContentDiv'>
                    <h2>
                        Ready to get started ?
                    </h2>

                    <p>
                        Join our community of 50,000+ companies of all sizes who use BottomFunnel Saas products to make
                        it fast and easy to delight their customers and employess.
                    </p>
                </div>
                <div className='productGetStartedImageDiv'>
                    <img src='/Images/ProductsPage/ReadytoStarted.png' alt='image'/>
                </div>
            </div>
        </div>
    )
}
