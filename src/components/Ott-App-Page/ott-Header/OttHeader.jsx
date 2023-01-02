import React from 'react';
import '../ott-Header/ottHeader.css'

export const OttHeader = () => {

  const ServicesData = [
    {
      icon: "Images/ott-app/Frame-2.png",
      title: "Best Quality",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "Images/ott-app/Group901189.png",
      title: "Fast Downloading",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "Images/ott-app/Group16.png",
      title: "Analytics Services",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "Images/ott-app/Frame.png",
      title: "Data Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"

    },

    {
      icon: "Images/ott-app/Group-1.png",
      title: "Regular Support",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "Images/ott-app/Frame-1.png",
      title: "Search Engine Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    }

   
    
  ]
  return (
    <div className='testdiv'>
    <div className='ott-Header-Container-Main'>
        
        <div className='ott-Header-Left-Div'>

            <div className='ott-Header-Left-Text-Div'>

              <h1 className='redbn'>OTT App Solutions</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro id est in sit! Velit consectetur suscipit, corrupti tenetur nontcliolectui dignissimos possimus, doloremque in minimabgrds ggue quae quia magnam reiciendis ab.</p>
              <button className='ott-header-button'>Get Started</button>
            </div>
        </div>

        <div className='ott-Header-Right-Div'>

            <div className='ott-Header-Right-frame-for-Image'>
              
              <div className='ott-Header-Right-Images-Div'>
                 <img className='ott-Header-Right-img1' src="Images/ott-app/moneyHeist.png" alt="" />
                 <img className='ott-Header-Right-img2' src="Images/ott-app/Group901188.png" alt="" />
                 <img  className='ott-Header-Right-img3'src="Images/ott-app/Group901187.png" alt="" />
              </div>
              
              
            </div>
        </div>
      




    </div>

     <div className='ott-Services-Container'>
        <div className='ott-Services-Container-2'>
             <div className='ott-Services-Title-Div'>
                        <h1>OTT App Services</h1>
                        <p>The best streaming platform with all the latest shows and best videos quality</p>
              </div>
              <button className='ott-Services-button'>Book a Meeting With Us Today</button>
              
          <div className='ott-Services-Content'>{ServicesData.map((e) => {
              return (
                
                   
                <div className='ott-Services-Boxes-Div'>
                    <div className='ott-Services-div-For-Flex-icon-Head'>
                      <div><img src={e.icon} alt="" /> </div>
                          <h3>{e.title}</h3>
                      </div>
                      <div className='ott-Services-lorem-para'>
                      <p >{e.para}</p>
                      </div>
                      
                   
                </div>
                
               
                
  
              )
            })}
          </div>
        </div>
      </div>
    </div>
   
  )
}
