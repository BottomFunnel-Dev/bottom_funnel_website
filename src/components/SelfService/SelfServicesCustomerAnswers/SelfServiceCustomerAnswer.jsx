import React from 'react';
import "./SelfServiceCustomerAnswer.css";

export const SelfServiceCustomerAnswer = () => {
    return (
        <div className='selfServicesCustomerAnswerParentDiv'>
            <div className='selfServicesCustomerAnswerInnerDiv'>
                <div className='selfServicesCustomerAnswerContentDiv'>
                    <h1>
                        Help customers find answers from anywhere
                    </h1>

                    <p>
                        Take your knowledge base content to all channels your customers could possibly reach out to you on-
                        your website, mobile app, or even chat.
                    </p>
                    
                    <button> Explore Olly Ai </button>
                </div>
                <div className='selfServicesCustomerAnswerImageDiv'>
                    <img src='/Images/SelfService/HelpCustomer.png' alt='image' />
                </div>


            </div>

            <div className='selfServicesCustomerAnswerInnerDiv'>
                <div className='selfServicesCustomerAnswerImageDiv'>
                    <img src='/Images/SelfService/SocialLanguage.png' alt='image' />
                </div>

                <div className='selfServicesCustomerAnswerContentDiv'>
                    <h1>
                        Empower customers in multiple languages
                    </h1>

                    <p>
                        Support Desk's multilingual knowledge base supports 42 languages and makes it easy to run a global
                        support operation. Your team can manage tranlations with content versioning and approvals and measure
                        the perfromance of language-specific content.
                    </p>

                    <button> Learn More </button>
                </div>

            </div>
        </div>
    )
}
