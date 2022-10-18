import React from "react";
import "./KeyFeatures.css";

const KeyFeatures = () => {
  return (
    <div className="keyfeatures">
      <h1>Key Features</h1>
      <div className="customerApp">
        <div className="customerImages">
          <div className="backfeature">
            <img src="Images/ondemandHome/shape1.png" alt="" />
          </div>
          <div className="customerphone">
            <img src="Images/ondemandHome/customerapp.png" alt="" />
          </div>
        </div>
        <div className="featureText">
          <div>
            <h2>Customer App</h2>
            <p>
              Improve customer service with a customer app and website that
              provides services they can easily avail at the comfort of their
              home go and can be easily accessed through both android/iOS, where
              they can make an appointment, track their service pro and manage
              or reschedule bookings with one convenient app.
            </p>
          </div>
        </div>
      </div>

      <div className="adminpanel">
        <div className="admintext">
          <div>
            <h2>Admin panel</h2>
            <p>
              We built this easy-to-use admin panel so that you can manage
              everything related to your business in one place. A single
              platform for all your on-demand home services. From managing
              multiple users at a single screen to generating earnings and sales
              reports, we've thought of everything so that you don't have to!
            </p>
          </div>
        </div>
        <div className="adminImage">
          <div className="backadmin">
            <img src="Images/ondemandHome/shape2.png" alt="" />
          </div>
          <div className="backadmindown">
            <img src="Images/ondemandHome/shape2.png" alt="" />
          </div>
          <div className="adminpanelimage">
            <img src="Images/ondemandHome/adminpanel.png" alt="" />
          </div>
        </div>
      </div>

      <div className="serviceApp">
        <div className="service-image">
          <div className="serviceappback">
            <img src="Images/ondemandHome/shape3.png" alt="" />
          </div>
          <div className="serviceappmobile">
            <img src="Images/ondemandHome/serviceprofessionalapp.png" alt="" />
          </div>
        </div>
        <div className="serviceapptext">
          <div>
            <h2>Service professional’s app</h2>
            <p>
              With service professional’s app, you can coordinate with your
              professionals on daily basis. You can also book, reschedule and
              cancel appointments right through the app. With advanced features,
              customized for your home-based clients like location tracking and
              live chat, this app is suited to help you organize your time
              efficiently while giving utmost satisfaction to your customers.
            </p>
          </div>
        </div>
      </div>

      <div className="serviceproviderpanel">
        <div className="serviceprovidertext">
          <div>
            <h2>Service provider panel</h2>
            <p>
              With the help of a powerful service provider panel, you can handle
              various types of bookings, and offer discounts, rewards etc. Add
              new coupons to your service provider panel and get instant
              notifications about it. With the help of in app analytics you will
              be able to determine your customer's behaviour so that you can
              gain more and more revenue.
            </p>
          </div>
        </div>

        <div className="serviceProviderImage">
          <div className="serviceproviderback">
            <img src="Images/ondemandHome/shape4.png" alt="" />
          </div>
          <div className="serviceprovideradminpanel">
            <img src="Images/ondemandHome/serviceproviderpanel.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
