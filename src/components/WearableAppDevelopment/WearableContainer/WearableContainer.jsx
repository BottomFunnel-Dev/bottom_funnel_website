import React from 'react'
import './WearableContainer.css';
import { FcApproval } from "react-icons/fc";

export const WearableContainer = () => {
  return (
    <div className='WearableContainer-maindiv'>
      <div className='wearablecompanydiv'>
        <h1>Wearable Mobile App Development Company </h1>
        <p>Bottom Funnel is a leading Wearable App Development Company Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Totam inventore saepe, provident excepturi maxime, obcaecati deserunt necessitatibus
          repellendus quia incidunt illum? Consequatur vitae in quaerat atque repellat architecto, aperiam deleniti?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quis quidem ipsa in. Facilis qui beatae tempore
          ipsa sit adipisci distinctio eveniet minima porro, similique veritatis temporibus commodi? Quia, ut.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aperiam perferendis nobis cum?
          Voluptatum omnis voluptate repellat reiciendis sunt
          aliquid fugiat nam architecto exercitationem cumque. Illo cumque dicta aperiam nemo?</p>
      </div>

      <div className='wearablegenerationdiv'>
        <h1> Next generation of wearable services for frontline, innovative business group</h1>
        <p> simply put,our core strength lie in the simplicity  Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis id dolorum ea, molestiae ipsum impedit dignissimos beatae sit
          nam assumenda error tempora nesciunt incidunt ullam vero et illo praesentium mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam, explicabo doloribus est reiciendis facilis consectetur voluptate assumenda impedit illo pariatur,
          quam sit corporis laboriosam adipisci. Fuga repellat nobis sed.</p>
      </div>
      <div className='wearableservice'>
        <h4> Service That We Offer</h4>
        <div className='wearableservicecard'>

          <div className='wearableservice-innercard' >
            <h5><FcApproval /> Wearable Solution Design </h5>
            <p>
              When we will be clear with your business needs, we will select the best software development technology to avoid any kind of hassle during the process.
            </p>
          </div>
          <div className='wearableservice-innercard' >
            <h5><FcApproval /> Wearable Device App Development </h5>
            <p>
              We are a wearable app development company that can help you bring your brand on devices that are poised to become more personal to an individual than a smartphone.
            </p>
          </div>

          <div className='wearableservice-innercard' >
            <h5> <FcApproval /> Multi-Platform Integration</h5>
            <p>
              We will help you with multi-platform integration support as per your respective platform and all the aspects will be implemented accordingly to the deadline given.
            </p>
          </div>


          <div className='wearableservice-innercard' >
            <h5><FcApproval /> Seamless Deployment</h5>
            <p>
              our app developers will plan the SDLC and execute the same as per the deadline given. We will ensure that agile development methods are followed to assist you with quality service.
            </p>
          </div>
        </div>
        <div><button className='wearablebannerbutton1'>Get Started</button></div>





      </div>

    </div>
  )
}
