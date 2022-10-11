import React from "react";
import "./Beautyandcare.css";

export default function Beautyandcare() {
  return (
    <div className="beautysection">
      <div className="beautycontainer">
        <div className="beautyleft">
          <h1 className="heading">
            BEAUTY AND SALON APP DEVELOPMENT SOLUTIONS
          </h1>
          <p>
            Beautify Your Business with An App!
            <br />
            Enhance your salon's customer experience with our cutting-edge
            beauty & salon app development.
          </p>
          <button className="btn"> Get Started</button>
        </div>
        <div className="mobile">
          <img
            width="95%"
            height="95%"
            src="Images/beautycare/beautymobile.png"
          />
        </div>
      </div>

      <div className="diversesection">
        <h1 className="diverseheading"> OUR EXCLUSIVE SERVICES </h1>

        <div className="diversesalon">
          <div className="hairsalon">
            <div className="salon-image">
              <img src="Images/beautycare/salonbook.png" />
            </div>
            <h1>Salon booking app devlopment</h1>
            <p>
              Making your customer’s salon appointment experience easier, faster
              and more accessible with our salon appointment app service.
            </p>
          </div>
          <div className="salonschduling">
            <div className="salon-image"><img src="Images/beautycare/Girl.png" /></div>
            <h1>Beauty salon application</h1>
            <p>
              Provide all kinds of services to you customer at one place with
              beauty salon application and unleash your full potential in the
              Beauty Industry.
            </p>
          </div>

          <div className="hairsalon">
            <div className="salon-image"><img src="Images/beautycare/hairsalon.png" /></div>
            <h1>Hair salon application</h1>
            <p>
              Make your customers more satisfied with your hair salon by
              providing them the ease to explore different hairstyles with our
              hair salon application.
            </p>
          </div>
          <div className="salonschduling">
            <div className="salon-image"><img src="Images/beautycare/comb.png" /></div>
            <h1>Salon schduling software</h1>

            <p>
             
              Get more people to come to your salon, with the app that makes
              booking appointments easier than ever before.
            </p>
          </div>

          {/* </div> */}

          {/* hair salon */}
          {/* <div className='diversehairsec'> */}
          <div className="hairsalon">
            <div className="salon-image"><img src="Images/beautycare/hire.png" /></div>
            <h1>Hair salon app devloper</h1>
            <p>
              Building a custom salon app is a breeze with our app developers.
              Turn your hair salon into a success with our efficient salon app
              developer team.
            </p>
          </div>
          <div className="salonschduling">
            <div className="salon-image"><img src="Images/beautycare/demand.png" /></div>
            <h1>On demand beauty service</h1>
            <p>
              {" "}
              The future of beauty is here! Our on-demand beauty service app
              provides customers with a range of services, enabling them to
              enjoy beauty at home.
            </p>
          </div>
        </div>
      </div>

      {/* discuss section */}

      <div className="discuss-section">
        <h1>Discuss your requirements with our experts today</h1>
        <button className="btn2"> Book a metting today</button>
      </div>

      {/* features-section */}

      <div className="features-section">
        <h1> Prominent features of the app</h1>
        <div className="features-container">
          <div className="featureswhite">
            <h1>In app offers and loyalties </h1>
            <p>
              Increase customer loyalty and engagement with exclusive in-app
              offers. through this app, give exclusive offers, discounts, and
              loyalty rewards that only your loyal customers will enjoy.{" "}
            </p>

            <h1>In app calling and chatting</h1>
            <p>
              Our salon and beauty app development solutions make it easy for
              users to contact their booked expert and schedule a call or chat
              session with your stylist or makeup artist directly from the app.
            </p>
          </div>
          <div className="featurepink">
            <h1>Online appointment</h1>
            <p>
              Customers can book, change and cancel appointments for any of the
              services offered on the app. With this feature, customers can
              avoid long queues and wait times for your services.
            </p>

            <h1>Live location tracking: </h1>
            <p>
              Customers can track the real time location of the beauty expert
              who will be coming to their home to give them services and get the
              salon’s exact location, where they have booked their appointment
            </p>
          </div>
          <div className="featureswhite">
            <h1>In-app payment</h1>
            <p>
              With In app payments, your customers can easily pay for your
              services with their smartphone or tablet instead of having to use
              traditional methods such as cash or credit cards.
            </p>

            <h1>Service list and prices</h1>
            <p>
              This feature will help you to keep up-to-date streamline pricing
              for each service you offer in the form of a list, as well as
              provide customers with more information about what they are paying
              for.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* solutionsection */}

      <div className="solution">
        <h1>Solution for your beauty app </h1>

        <div className="coustomer-main">
          <div className="customerapp">
            <h1 className="customer-heading">Customer app</h1>
            <p>
              Improve customer service with a customer app and website that
              provides services they can easily avail and manage on the go and
              can be easily accessed through both android/iOS, where they can
              make an appointment, track their service pro and manage or
              reschedule bookings with one convenient app.
            </p>
          </div>

          <div className="customerappimg">
            <img height="700px" src="Images/beautycare/solutionbeauty.png" />
          </div>

          {/* //////////    bussinesss container*/}
          {/* <div className='bussinesscontainer'> */}
          <div className="bussinessright">
            <img
              className="toprectangle"
              src="Images/beautycare/toprectangle.png"
            />
            <img
              className="admin"
              height="500px"
              src="Images/beautycare/adiminpannel.png"
            />
            <img
              className="rectangle"
              src="Images/beautycare/lastrectangle.png"
            />
          </div>
          <div className="bussinessleft">
            <h1 className="customer-heading">Buisnessn dashboards</h1>
            <p>
              We built this easy-to-use admin dashboard so that you can manage
              everything related to your business in one place. A single
              platform for all your beauty and salon services. From managing
              multiple users at a single screen to generating earnings and sales
              reports, we've thought of everything so that you don't have to!{" "}
            </p>
          </div>
          {/* </div> */}

          <div className="service">
            <h1 className="customer-heading">Service professional’s app</h1>
            <p>
              With service professional’s app, you can coordinate with your
              beauticians on daily appointments, reschedule and cancel right
              through the app. With advanced features, customized for in-venue
              and home-based clients, location tracking and live chat, this app
              is suited to help you organize your time efficiently while giving
              utmost satisfaction to your customers.
            </p>
          </div>

          <div className="serviceimg">
            <img
              className="servicemobile"
              height="700px"
              src="Images/beautycare/services.png"
            />
            <img className="box" src="Images/beautycare/box.png" />
          </div>
        </div>

        {/* ///////////////why section/// */}

        <div className="why">
          <h1>Why choose us?</h1>
          <div className="chose">
            <div>
              <h1>Quick response to you queries</h1>
              <p>
                We provide chat and voice assistance to solve all your queries
                within 48 hours.
              </p>
            </div>
            <div>
              <h1>Data security</h1>
              <p>
                We use end-to-end encryption and always keep backups to secure
                your data
              </p>
            </div>
            <div>
              <h1>Non-stop services</h1>
              <p>
                we provide 24/7 hours services so that your business activities
                keep running smoothly.
              </p>
            </div>
            <div>
              <h1>Creativity and innovation: </h1>
              <p>
                You can always expect most creative and innovative solutions
                from our company.
              </p>
            </div>
            <div>
              <h1>Updated technology</h1>
              <p>
                We use updated technologies to give you the latest tech services
                available in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
