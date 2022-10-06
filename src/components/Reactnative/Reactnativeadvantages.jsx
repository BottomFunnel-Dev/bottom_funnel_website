import React from 'react'
import './Reactnativeadvantages.css';
import {FcDocument} from 'react-icons/fc';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiTwotoneSetting} from 'react-icons/ai';
import {GiPencilBrush} from 'react-icons/gi';
import {FaPencilRuler} from 'react-icons/fa';
import {IoIosPaper} from 'react-icons/io';
import {TbPlug} from 'react-icons/tb';
import {MdOutlineArchitecture} from 'react-icons/md'

export const Reactnativeadvantages = () => {
    return (
        <div className='_Reactnativeadvantagesmaindiv'>
            <div className='_Reactnativeadvantages'>
                <h1>Advantages of Using <i style={{ color: "#EF4C23" }}>React-Native</i> App Developement</h1>
            </div>
            <div className='_Reactnativeadvantages1'>
                <div className='_Reactnativepeach'>
                    <div className='_Reactnativelogotext'>
                        <span  className='_Reactnativehi'><HiOutlineDocumentText className='_Reactnativelogo'/></span>
                        <span className='_Reactnativeadtext'>Single Codebase and Reusable Code</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Reactnativegray'>
                <div className='_Reactnativelogotext'>
                        <span  className='_Reactnativehi'><IoIosPaper className='_Reactnativelogo'/></span>
                        <span className='_Reactnativeadtext'>Documentation</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Reactnativegray'>
                <div className='_Reactnativelogotext'>
                        <span  className='_Reactnativehi'><TbPlug className='_Reactnativelogo'/></span>
                        <span className='_Reactnativeadtext'>Third-Party Plugin Support</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Reactnativepeach'>
                <div className='_Reactnativelogotext'>
                        <span  className='_Reactnativehi'><AiTwotoneSetting className='_Reactnativelogo'/></span>
                        <span className='_Reactnativeadtext'>Pre-Built Components</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Reactnativepeach'>
                <div className='_Reactnativelogotext'>
                        <span  className='_Reactnativehi'><FaPencilRuler className='_Reactnativelogo'/></span>
                        <span className='_Reactnativeadtext'>Simple UI</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Reactnativegray'>
                <div className='_Reactnativelogotext'>
                        <span  className='_Reactnativehi'><MdOutlineArchitecture className='_Reactnativelogo'/></span>
                        <span className='_Reactnativeadtext'>Modular Architecture</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
            </div>
        </div>
    )
}
