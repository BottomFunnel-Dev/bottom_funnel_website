import React from 'react';
import "./SelfServiceCustomerHelp.css";

export const SelfServiceCustomerHelp = () => {
    return (
        <div className='selfServicesCustomerHelpParentDiv'>
            <div className='selfServicesCustomerHelpInnerDiv'>
                <div className='selfServicesCustomerHelpContentDiv'>
                    <h1>
                        Let customers help each other
                    </h1>

                    <p>
                        Leverage past discussions to help new customers find answers on any topic, without any intervention
                        from your support system. 
                    </p>
                </div>
                <div className='selfServicesCustomerHelpImageDiv'>
                    <img src='/Images/SelfService/TwoThreeHead.png' alt='image' />
                </div>
            </div>
        </div>
    )
}
