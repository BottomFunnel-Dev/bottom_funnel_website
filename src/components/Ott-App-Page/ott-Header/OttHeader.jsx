import React from 'react';
import '../ott-Header/ottHeader.css'

export const OttHeader = () => {

  const ServicesData = [
    {
      icon: "Images/ott-app/Frame-2.png",
      title: "Best Quality",
      para: "There's no doubt that streaming services are the future of entertainment. And when it comes to choosing a streaming service, you want one that offers the best quality content. That's why we're excited to recommend Our Ott Services."
    },

    {
      icon: "Images/ott-app/Group901189.png",
      title: "Fast Downloading",
      para: "There's nothing worse than waiting forever for a movie or TV show to download. But with our ott services, you can forget about those slow downloads. We offers some of the fastest speeds around, so you can start watching your favorite shows and movies right away."
    },

    {
      icon: "Images/ott-app/Group16.png",
      title: "Analytics Services",
      para: "The demand for analytics services on OTT platforms is constantly increasing. This is because more and more businesses are realising the importance of data-driven decision making. By utilising analytics services, businesses can gain valuable insights into their customers."
    },

    {
      icon: "Images/ott-app/Frame.png",
      title: "Data Optimization",
      para: "There are a number of ways to optimize data on an OTT platform. One way is to use data compression. This can help to reduce the amount of data that is needed to be transferred and stored. Another way is to use cache management."

    },

    {
      icon: "Images/ott-app/Group-1.png",
      title: "Regular Support",
      para: "One way to get regular support is to hire a dedicated support team. This team can provide you with 24/7 support, ensuring that your platform is always up and running."
    },

    {
      icon: "Images/ott-app/Frame-1.png",
      title: "Search Engine Optimization",
      para: "By understanding what keywords people are searching for on these platforms, you can ensure that your content is being seen by those who are most likely to be interested in it. In addition, you can also use keyword data to inform your paid search campaigns on these platforms."
    }

   
    
  ]
  return (
    <div className='testdiv'>
    <div className='ott-Header-Container-Main'>
        
        <div className='ott-Header-Left-Div'>

            <div className='ott-Header-Left-Text-Div'>

              <h1 className='redbn'>OTT App Solutions</h1>
              <p>OTT app solutions are one of the most popular and effective ways to reach your target audience. With so many people using smartphones and other mobile devices, it's important to have a presence on these platforms. OTT apps allow you to do just that, by providing a way for people to access your content on their mobile devices.</p>
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
