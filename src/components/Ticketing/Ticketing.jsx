import { SimplifiedTicketting } from "./SimplifiedTicketting/SimplifiedTicketting";
import { TicketingBanner } from "./TicketingBanner/TicketingBanner";
import { TickettingStartTrials } from "./TickettingStartTrials/TickettingStartTrials";

export const Ticketing = () => {


  return (
    <>
      <div>
         <TicketingBanner/>
         <SimplifiedTicketting/>
         <TickettingStartTrials/>
      </div>
    </>
  );
};
