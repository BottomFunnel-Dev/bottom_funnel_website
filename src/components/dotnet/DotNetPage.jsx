import React from "react";
import { DotNetBanner } from "./DotNetBanner";
import { DotNetBookCall } from "./DotNetBookCall";
import { DotNetDescription } from "./DotNetDes";
import { DotNetRemarkable } from "./DotNetRemarkable";
import { DotNetWhyApplication } from "./DotNetWhyApp";
import { DotNetWhyBottomFunnel } from "./DotNetWhyBF";
import { DotNetBannerNavigation } from "./DotNetBannerNav";

export const DotNetPage = () => {
  return (
    <div>
      {<DotNetBanner />}
      {/* {<DotNetBannerNavigation />} */}
      <hr id="dotnet-hr" />
      {<DotNetDescription />}
      {<DotNetWhyApplication />}
      {<DotNetWhyBottomFunnel />}
      {<DotNetBookCall />}
      {<DotNetRemarkable />}
    </div>
  );
};
