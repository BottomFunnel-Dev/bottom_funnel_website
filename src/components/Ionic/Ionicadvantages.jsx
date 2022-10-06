import React from 'react'
import './Ionicadvantages.css';
import {FcDocument} from 'react-icons/fc';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiTwotoneSetting} from 'react-icons/ai';
import {GiPencilBrush} from 'react-icons/gi';
import {FaPencilRuler} from 'react-icons/fa';
import {IoIosPaper} from 'react-icons/io';
import {TbPlug} from 'react-icons/tb';
import {MdOutlineArchitecture} from 'react-icons/md'

export const Ionicadvantages = () => {
    return (
        <div className='_Ionicadvantagesmaindiv'>
            <div className='_Ionicadvantages'>
                <h1>Advantages of Using <i style={{ color: "#EF4C23" }}>Ionic</i> App Developement</h1>
            </div>
            <div className='_Ionicadvantages1'>
                <div className='_Ionicpeach'>
                    <div className='_Ioniclogotext'>
                        <span  className='_Ionichi'><HiOutlineDocumentText className='_Ioniclogo'/></span>
                        <span className='_Ionicadtext'>Single Codebase and Reusable Code</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Ionicgray'>
                <div className='_Ioniclogotext'>
                        <span  className='_Ionichi'><IoIosPaper className='_Ioniclogo'/></span>
                        <span className='_Ionicadtext'>Documentation</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Ionicgray'>
                <div className='_Ioniclogotext'>
                        <span  className='_Ionichi'><TbPlug className='_Ioniclogo'/></span>
                        <span className='_Ionicadtext'>Third-Party Plugin Support</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Ionicpeach'>
                <div className='_Ioniclogotext'>
                        <span  className='_Ionichi'><AiTwotoneSetting className='_Ioniclogo'/></span>
                        <span className='_Ionicadtext'>Pre-Built Components</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Ionicpeach'>
                <div className='_Ioniclogotext'>
                        <span  className='_Ionichi'><FaPencilRuler className='_Ioniclogo'/></span>
                        <span className='_Ionicadtext'>Simple UI</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Ionicgray'>
                <div className='_Ioniclogotext'>
                        <span  className='_Ionichi'><MdOutlineArchitecture className='_Ioniclogo'/></span>
                        <span className='_Ionicadtext'>Modular Architecture</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
            </div>
        </div>
    )
}
