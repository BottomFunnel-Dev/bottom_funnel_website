import React from 'react'
import './Flutteradvantages.css';
import {FcDocument} from 'react-icons/fc';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiTwotoneSetting} from 'react-icons/ai';
import {GiPencilBrush} from 'react-icons/gi';
import {FaPencilRuler} from 'react-icons/fa';
import {IoIosPaper} from 'react-icons/io';
import {TbPlug} from 'react-icons/tb';
import {MdOutlineArchitecture} from 'react-icons/md'

export const Flutteradvantages = () => {
    return (
        <div className='_Flutteradvantagesmaindiv'>
            <div className='_Flutteradvantages'>
                <h1>Advantages of Using <i style={{ color: "#EF4C23" }}>Flutter</i> App Developement</h1>
            </div>
            <div className='_Flutteradvantages1'>
                <div className='_Flutterpeach'>
                    <div className='_Flutterlogotext'>
                        <span  className='_Flutterhi'><HiOutlineDocumentText className='_Flutterlogo'/></span>
                        <span className='_Flutteradtext'>Single Codebase and Reusable Code</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Fluttergray'>
                <div className='_Flutterlogotext'>
                        <span  className='_Flutterhi'><IoIosPaper className='_Flutterlogo'/></span>
                        <span className='_Flutteradtext'>Documentation</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Fluttergray'>
                <div className='_Flutterlogotext'>
                        <span  className='_Flutterhi'><TbPlug className='_Flutterlogo'/></span>
                        <span className='_Flutteradtext'>Third-Party Plugin Support</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Flutterpeach'>
                <div className='_Flutterlogotext'>
                        <span  className='_Flutterhi'><AiTwotoneSetting className='_Flutterlogo'/></span>
                        <span className='_Flutteradtext'>Pre-Built Components</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Flutterpeach'>
                <div className='_Flutterlogotext'>
                        <span  className='_Flutterhi'><FaPencilRuler className='_Flutterlogo'/></span>
                        <span className='_Flutteradtext'>Simple UI</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
                <div className='_Fluttergray'>
                <div className='_Flutterlogotext'>
                        <span  className='_Flutterhi'><MdOutlineArchitecture className='_Flutterlogo'/></span>
                        <span className='_Flutteradtext'>Modular Architecture</span>
                    </div>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae quidem corporis eveniet repellendus</div>
                </div>
            </div>
        </div>
    )
}
