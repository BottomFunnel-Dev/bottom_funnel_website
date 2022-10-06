import React from 'react';
import './AndroidDevelopmentindustries.css'

export const AndroidDevelopmentindustries = () => {
    const info = [{
        industriesname: "Online Grocery",
        industriestext: "With the increasing competition, grocery business requires more than just a retail store..."
    },
    {
        industriesname: "Online Grocery",
        industriestext: "With the increasing competition, grocery business requires more than just a retail store..."
    },
    {
        industriesname: "Online Grocery",
        industriestext: "With the increasing competition, grocery business requires more than just a retail store..."
    },
    {
        industriesname: "Online Grocery",
        industriestext: "With the increasing competition, grocery business requires more than just a retail store..."
    },
    {
        industriesname: "Online Grocery",
        industriestext: "With the increasing competition, grocery business requires more than just a retail store..."
    },
    {
        industriesname: "Online Grocery",
        industriestext: "With the increasing competition, grocery business requires more than just a retail store..."
    }
    ]
    return (
        <div className='_AndroidDevelopmentindustriesmaindiv'>
            <h1>Industries We Cater</h1>
            <div className='_AndroidDevelopmentindustries'>
                {
                    info.map((items, i) => {
                        return (
                            <div className='_AndroidDevelopmentindustries1'>
                                       <h5>{items.industriesname}</h5> 
                                       <p>{items.industriestext}</p>
                                       <div>Read more</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )


}
