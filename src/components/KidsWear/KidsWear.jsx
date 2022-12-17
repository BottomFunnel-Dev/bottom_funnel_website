import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AppFeature } from './AppFeature/AppFeature'
import { ChooseUs } from './ChooseUs/ChooseUs'
import { ExclusiveFeature } from './ExclusiveFeature/ExclusiveFeature'
import { KidsWearBanner } from './KidsWearBanner/KidsWearBanner'

export const KidsWear = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
      <KidsWearBanner />
      <ExclusiveFeature />
      <AppFeature />
      <ChooseUs />
    </div>
  )
}
