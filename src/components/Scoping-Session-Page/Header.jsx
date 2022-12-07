import "../Scoping-Session-Page/header.css";

const Header = () => {
  return (
    <>
      <div className="RGmainContaier">
        <div className="RGheaderText">
          <h1 className="RGheaderTitle">Scoping Session</h1>

          <p className="RGheadertext">
            Unleash your product faster in the market cost-effectively by <br />{" "}
            conveying your breakthrough idea to us in an intensive <br />{" "}
            session.
          </p>

          <button className="RGheaderButton"> Get Started</button>
        </div>

        <div className="RGimageDiv">
          <img
            width="100%"
            src="Images/Scoping-Session-Page/Banners-&-Background/banner.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
