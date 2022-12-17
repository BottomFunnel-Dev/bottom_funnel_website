import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AppBuilderCreate } from './AppBuilderCreate';
import { AppBuilderDiscoverApp } from './AppBuilderDiscoverApp';
import { AppBuilderMaker } from './AppBuilderMaker';
import { AppBuilderSolutionBanner } from './AppBuilderSolutionBanner';
import { AppBuilderWhyShuld } from './AppBuilderWhyShuld';

export const AppBuilderSoltion = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <AppBuilderSolutionBanner />
      <AppBuilderDiscoverApp />
      <AppBuilderWhyShuld />
      <AppBuilderCreate />
      <AppBuilderMaker />

    </div>
  )
}

