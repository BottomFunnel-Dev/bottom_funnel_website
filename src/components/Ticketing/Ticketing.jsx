import { SimplifiedTicketting } from "./SimplifiedTicketting/SimplifiedTicketting";
import { TicketingBanner } from "./TicketingBanner/TicketingBanner";
import { TicketingServices } from "./TicketingServices/TicketingServices";
import { TickettingInbox } from "./TickettingInbox/TickettingInbox";
import { TickettingStartTrials } from "./TickettingStartTrials/TickettingStartTrials";

export const Ticketing = () => {


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
