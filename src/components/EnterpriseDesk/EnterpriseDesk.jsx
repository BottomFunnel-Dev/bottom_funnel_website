import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { EnterpriseDeskBanner } from './EnterpriseDeskBanner'
import { EnterpriseEngage } from "./EnterpriseEngage";

export const EnterpriseDesk = () => {
    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);
  
  return (
    <div>
        <EnterpriseDeskBanner/>
        <EnterpriseEngage/>
    </div>
  )
}
