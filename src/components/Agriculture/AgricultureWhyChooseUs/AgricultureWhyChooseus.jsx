import React from 'react';
import "./AgricultureWhyChooseUs.css";

export const AgricultureWhyChooseus = () => {
    return (
        <div className='agricultureWhyChooseUsParentDiv'>
            <div className='agricultureWhyChooseUsHeadingMainDiv'>
                <div className='agricultureWhyChooseUsHeading1'>
                    <h1> Why Choose
                        <span> Us </span>
                    </h1>
                </div>
                <div className='agricultureWhyChooseUsHeading2'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate perferendis at ad, repudiandae laborum eos molestias hic sint quaerat esse minima non libero eveniet deserunt quae quas sit recusandae?
                    </p>
                </div>
            </div>

            <div className='agricultureWhyChooseUsCardsMainDiv'>
                <div className='agricultureWhyChooseUsDataCardsDiv1'>
                    <div className='agricultureWhyChooseUsDataCardsSubDiv1'>
                        <div className='agricultureDataCardsSubHeadingDiv'>
                            <img src='/Images/Agriculture/Vector-1.png' alt='icon' />

                            <h2> Customer Satisfaction </h2>
                        </div>

                        <p>
                            Upload in bulk, organize content in categories, add custom filters & upload extras.
                        </p>
                    </div>
                    <div className='agricultureWhyChooseUsDataCardsSubDiv2'>
                        <div className='agricultureDataCardsSubHeadingDiv'>
                            <img src='/Images/Agriculture/Vector-2.png' alt='icon' />

                            <h2> Flexibility </h2>
                        </div>

                        <p>
                            Showcase your content in a beautiful on-demand video catalog.
                        </p>
                    </div>
                </div>

                <div className='agricultureWhyChooseUsDataCardsDiv1'>
                    <div className='agricultureWhyChooseUsDataCardsSubDiv1'>
                        <div className='agricultureDataCardsSubHeadingDiv'>
                            <img src='/Images/Agriculture/on time delivery.png' alt='icon' />

                            <h2> Deliver On Time </h2>
                        </div>

                        <p>
                            Offers subscription or one-time purchases. Accept credit cards & Paypal.
                        </p>
                    </div>
                    <div className='agricultureWhyChooseUsDataCardsSubDiv2'>
                        <div className='agricultureDataCardsSubHeadingDiv'>
                            <img src='/Images/Agriculture/StarLogo.png' alt='icon' />

                            <h2> Quality Assurance </h2>
                        </div>

                        <p>
                            Know what your audience likes & how your content is performing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
