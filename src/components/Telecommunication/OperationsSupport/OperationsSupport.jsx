import React from 'react';
import "./OperationsSupport.css";

export const OperationsSupport = () => {
    return (

        <div className='operationSupportParentDiv'>
            <div className='oprationsSupportTopContentDiv'>
                <div className='operationsSupportHeadingDiv'>
                    <h1> Operations Support System (OSS)</h1>
                    <p> Science helps telcos ensure that their networks run like clockwork. </p>
                </div>

                <div className='operationsSupportImageDiv'>
                    <img className='orangeLine' src='/Images/Telecommunication/Orange Line.png' alt='image' />
                </div>
            </div>

            <div className='operationSupportServices'>
                <div className='operationServicesContentDiv'>
                    <h2> VoIP-based services </h2>

                    <ul>
                        With an extensive experience of delivering VoIP solutions, we create:

                        <li className='operationServicesContentDivList'>
                            Server-side applications for softswitches;
                        </li>

                        <li className='operationServicesContentDivList'>
                            Customized SIP-clients.
                        </li>

                        <li className='operationServicesContentDivList'>
                            Vonage;
                        </li>

                        <li className='operationServicesContentDivList'>
                            magicJack;
                        </li>

                        <li className='operationServicesContentDivList'>
                            Dialpad.
                        </li>
                    </ul>

                </div>

                <div className='operationServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage1.png' alt='image' />
                </div>
            </div>

            <div className='operationSupportServices'>
                <div className='operationServicesContentDiv'>
                    <h2> Monitoring </h2>

                    <ul>
                        Based on BMC Remedy or ServiceNow® platform, our customized solutions allow for managing multiple
                        operations effectively:


                        <li className='operationServicesContentDivList'>
                            Network resources inventory:
                        </li>

                        <li className='operationServicesContentDivList'>
                            Performance management;
                        </li>

                        <li className='operationServicesContentDivList'>
                            Fault management;
                        </li>

                        <li className='operationServicesContentDivList'>
                            Trouble ticketing;
                        </li>

                        <li className='operationServicesContentDivList'>
                            Fraud protection.
                        </li>
                    </ul>

                </div>

                <div className='operationServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage2.png' alt='image' />
                </div>
            </div>

            {/* <div className='operationSupportMonitoring'>
                <div className='operationMonitoringContentDiv'>
                    <h2> Monitoring </h2>

                    <ul>
                        Based on BMC Remedy or ServiceNow® platform, our customized solutions allow for managing multiple
                        operations effectively:

                        <li className='operationMonitoringContentDivList'>
                            Network resources inventory:
                        </li>

                        <li className='operationMonitoringContentDivList'>
                            Performance management;
                        </li>

                        <li className='operationMonitoringContentDivList'>
                            Fault management;
                        </li>

                        <li className='operationMonitoringContentDivList'>
                            Trouble ticketing;
                        </li>

                        <li className='operationMonitoringContentDivList'>
                            Fraud protection.
                        </li>
                    </ul>

                </div>

                <div className='operatioMonitoringImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage2.png' alt='image' />
                </div>
            </div> */}
        </div>
    )
}
