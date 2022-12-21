import React from "react";
import "./productsGrid.css";
import { useNavigate } from "react-router-dom";

export const ProductsGrid = () => {
  const navigate = useNavigate();
  return (
    <div className="RGflexMainContainer">
      <div className="RGofferTab">
        <h2>What we offer with our various products</h2>
      </div>

      <div className="RGflexContainer">
        {/* boxes */}

        <div className="RGdiv">
          <div className="RGfirstColumnsDivHead">
            <p className="RGtitlePTagFirstCols">Bottom Funnel Omnichannel</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless omichannel
            <br />
            service
          </p>

          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGsecondColumnsDivHead">
            <p className="RGtitlePTagSecondCols ">Bottom Funnel Support Desk</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless Support Desk
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button
              className="RGsignINButton"
              onClick={() => {
                navigate(`/funnel-desk`);
                
              }}
            >
              Sign in
            </button>
            <button className="RGfreeTrailButton" onClick={() => {
                navigate(`/product-enterprise`);
                
              }}>Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGthirdColumnsDivHead">
            <p className="RGtitlePTagThirdCols">Bottom Funnel Contact centre</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless Contact centre
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGfirstColumnsDivHead">
            <p className="RGtitlePTagFirstCols">Bottom Funnel Chat</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless Chat
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGsecondColumnsDivHead">
            <p className="RGtitlePTagSecondCols ">Bottom Funnel sales</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless sales
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGthirdColumnsDivHead">
            <p className="RGtitlePTagThirdCols">Bottom Funnel Sales Suite</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless service
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGfirstColumnsDivHead">
            <p className="RGtitlePTagFirstCols">Bottom Funnel Marketer</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless marketer
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGsecondColumnsDivHead">
            <p className="RGtitlePTagSecondCols ">Bottom Funnel Team</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless team
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>

        <div className="RGdiv">
          <div className="RGthirdColumnsDivHead">
            <p className="RGtitlePTagThirdCols">Bottom Funnel Service</p>
          </div>
          <p className="RGeffortlessParagraph">
            Delight your customer with effortless omichannel
            <br />
            service
          </p>
          <div className="RGbuttonsPannel">
            <button className="RGsignINButton">Sign in</button>
            <button className="RGfreeTrailButton">Free Trial</button>
          </div>
        </div>
      </div>
      <div className="RGtryNowTab">
        <p className="RGtryNowTabPtag">Try Our Free Products Now</p>
        <button className="RGtryNowTabButton">Try Now</button>
      </div>
    </div>
  );
};
