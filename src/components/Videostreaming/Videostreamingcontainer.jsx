import React from "react";

export default function Videostreamingcontainer() {
  return (
    <div className="videocontainer">
      <div className="videosub">
        <div className="videoleft">
          <div className="videopara">
            <h1>Reach more people in real time</h1>
            <p>
              Being a business owner is not an easy thing. You have to take care
              of every single aspect of your business, and that can be
              exhausting at times. We are for whose things.
            </p>
            <button className="trailbtn">Start Free Trail</button>
          </div>
        </div>
        <div className="videoimages">
          <div className="videomac">
            {" "}
            <img src="Images/Videostreaming/iMac.png" />
          </div>
          <div className="videomobile">
            {" "}
            <img src="Images/Videostreaming/Homescreen.png" />
          </div>
        </div>
      </div>

      <div className="videobottomdiv">
        <div className="szbottomimages">
          {" "}
          <img src="Images/Videostreaming/tv.png" />
        </div>
        <div className="szbottomimages">
          {" "}
          <img src="Images/Videostreaming/androidtv.png" />
        </div>
        <div className="szbottomimages">
          {" "}
          <img src="Images/Videostreaming/watch.png" />{" "}
        </div>
        <div className="szbottomimages">
          {" "}
          <img src="Images/Videostreaming/iPhone.png" />{" "}
        </div>
        <div className="szbottomimages">
          {" "}
          <img src="Images/Videostreaming/android.png" />{" "}
        </div>
      </div>
    </div>
  );
}
