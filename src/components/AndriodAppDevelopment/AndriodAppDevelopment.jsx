import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AndriodBanner } from "./AndriodBanner/AndriodBanner";
import { AndriodBottomFunnel } from "./AndriodBottomFunnel/AndriodBottomFunnel";
import { AndriodCustomDevelopment } from "./AndriodCustomDevelopment/AndriodCustomDevelopment";
import { AndriodServices } from "./AndriodServices/AndriodServices";
import { AndriodUserCentric } from "./AndriodUserCentric/AndriodUserCentric";


export const AndriodAppDevelopment = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
      <>
        <div>
            <AndriodBanner/>
            <AndriodServices/>
            <AndriodCustomDevelopment/>
            <AndriodUserCentric/>
            <AndriodBottomFunnel/>
        </div>
      </>
  );
};
