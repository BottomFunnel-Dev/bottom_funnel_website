import { SimplifiedTicketting } from "./SimplifiedTicketting/SimplifiedTicketting";
import { TicketingBanner } from "./TicketingBanner/TicketingBanner";
import { TicketingServices } from "./TicketingServices/TicketingServices";
import { TickettingInbox } from "./TickettingInbox/TickettingInbox";
import { TickettingStartTrials } from "./TickettingStartTrials/TickettingStartTrials";
import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import {
  mountNavbar,
  unmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";

export const Ticketing = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(mountNavbar());
    return () => {
      dispatch(unmountNavbar())
    };
  }, []);

  return (
    <>
      <div>
         <TicketingBanner/>
         <SimplifiedTicketting/>
         <TickettingInbox/>
         <TicketingServices/>
         <TickettingStartTrials/>
      </div>
    </>
  );
};
