import React from 'react'
import './MobileAppDevelopmentServices.css';
import Native from '../Images/Native apps.jpg';
import Hybrid from '../Images/hybrid.png';
import and from '../Images/and.png'
import ios from '../Images/iosapple.png';
import cross from '../Images/CrossPlatform.jpg'
export const MobileAppDevelopmentServices = () => {
    return (
        <div className='_MobileAppservice'>
            <div className='_MobileAppservicesmaindiv' style={{border:"x solid red"}}>
                <div className='_MobileAppservice1'>
                    <h1>Our Services</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eius consequatur iure quo consequuntur placeat quam, deleniti quas ratione quisquam? Soluta necessitatibus porro in non atque ullam. Blanditiis, ab rerum.</p>
                </div>
                <div className='_MobileAppservice2'>
                    <div className='_AppService'>
                        <div className='_AppService1'>
                            <img src={Native} />
                        </div>
                        <div className='_AppService2'>
                            <span>Native Apps</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident quas, atque officia, sint ea laborum possimus quam, excepturi quisquam autem. Deleniti odio fugiat ducimus, dolores dignissimos enim! Pariatur, reiciendis?</p>
                        </div>
                    </div>
                    <div className='_AppService'>
                        <div className='_AppService1'>
                            <img src={Hybrid} />
                        </div>
                        <div className='_AppService2'>
                            <span>Hybrid Apps</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit repellat ratione ea placeat saepe cupiditate doloremque, commodi officia? Eveniet iste enim laboriosam numquam ea, non blanditiis quis dolore debitis ut.</p>
                        </div>
                    </div>
                    <div className='_AppService3'>
                        <div className='_AppService4'>
                            <div className='_AppService41'>
                                <h4>Android Apps</h4>
                            </div>
                            <div className='_AppService42'>
                                <img src={and} />
                            </div>
                        </div>
                        <div className='_AppServicetext'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores autem fuga nesciunt quasi cumque veniam ipsum, sequi officia explicabo inventore, expedita voluptates at blanditiis. Cumque corrupti suscipit deleniti non architecto.</p>
                        </div>
                    </div>
                    <div className='_AppService3'>
                        <div className='_AppService4'>
                            <div className='_AppService41'>
                                <h4>IOS Apps</h4>
                            </div>
                            <div className='_AppService42'>
                                <img src={ios} />
                            </div>
                        </div>
                        <div className='_AppServicetext'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores autem fuga nesciunt quasi cumque veniam ipsum, sequi officia explicabo inventore, expedita voluptates at blanditiis. Cumque corrupti suscipit deleniti non architecto.</p>
                        </div>
                    </div>
                    <div className='_AppService3'>
                        <div className='_AppService4'>
                            <div className='_AppService41'>
                                <h4>Cross Platform Apps </h4>
                            </div>
                            <div className='_AppService42'>
                                <img src={cross} />
                            </div>
                        </div>
                        <div className='_AppServicetext'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores autem fuga nesciunt quasi cumque veniam ipsum, sequi officia explicabo inventore, expedita voluptates at blanditiis. Cumque corrupti suscipit deleniti non architecto.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
