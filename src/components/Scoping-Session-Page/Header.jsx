import "../Scoping-Session-Page/header.css";

const Header = () => {
  return (
    <>
      <div className="RGmainContaier">
        <div className="RGheaderText">
          <h1 className="RGheaderTitle">Scoping Session</h1>

          <p className="RGheadertext">
            Bottom Funnel is a marketing agency that specializes in conveying
            breakthrough ideas to the market cost-effectively. We understand
            your product inside out and will work tirelessly to make it a
            success.
          </p>

          <button className="RGheaderButton"> Get Started</button>
        </div>

        <div className="RGimageDiv">
          <img
            width="100%"
            src="Images/Scoping-Session/Banners-&-Background/Component77.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;