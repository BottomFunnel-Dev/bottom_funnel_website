import {React,useState} from "react";
import "./PricingDetailsData.css";
import { PricingTable1 } from "../PricingTable1/PricingTable1";
import { PricingTable2 } from "../PricingTable2/PricingTable2";
import { PricingTable3 } from "../PricingTable3/PricingTable3";
import { PricingTable4 } from "../PricingTable4/PricingTable4";
import { PricingTable5 } from "../PricingTable5/PricingTable5";
import { PricingTable6 } from "../PricingTable6/PricingTable6";
import { PricingTable7 } from "../PricingTable7/PricingTable7";
import { PricingTable8 } from "../PricingTable8/PricingTable8";
import { PricingTable9 } from "../PricingTable9/PricingTable9";

export const PricingDetailsData = () => {
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

  return (
      <>
        <div className="pricingDetailsDataContainerDiv">
            <div className="pricingDetailsDataButtons">
                <div className="pricingDetailsDataButtonsBox">
                        <div className={showtab === 1 ? "pricingDetailsFunnelDesk active" : "pricingDetailsFunnelDesk"} onClick={() => handletab(1)}>
                            <h6>Bottom Funnel Team</h6>
                        </div>
                        <div className={showtab === 2 ? "pricingDetailsFunnelDesk active" : "pricingDetailsFunnelDesk"} onClick={() => handletab(2)}>
                            <h6>Bottom Funnel Chat</h6>
                        </div>
                        <div className={showtab === 3 ? "pricingDetailsFunnelDesk active" : "pricingDetailsFunnelDesk"} onClick={() => handletab(3)}>
                            <h6>Bottom Funnel Sales</h6>
                        </div>
                        <div className={showtab === 4 ? "pricingDetailsFunnelDesk active" : "pricingDetailsFunnelDesk"} onClick={() => handletab(4)}>
                            <h6>Bottom Funnel Service</h6>
                        </div>
                        <div className={showtab === 5 ? "pricingDetailsFunnelDesk active" : "pricingDetailsFunnelDesk"} onClick={() => handletab(5)}>
                            <h6>Bottom Funnel Marketer</h6>
                        </div>
                </div>
                <div className="pricingDetailsDataButtonsBox1">
                        <div className={showtab === 6 ? "pricingDetailsFunnelDesk1 active" : "pricingDetailsFunnelDesk1"} onClick={() => handletab(6)}>
                            <h6>Bottom Funnel Support Desk</h6>
                        </div>
                        <div className={showtab === 7 ? "pricingDetailsFunnelDesk1 active" : "pricingDetailsFunnelDesk1"} onClick={() => handletab(7)}>
                            <h6>Bottom Funnel Contact Centre</h6>
                        </div>
                        <div className={showtab === 8 ? "pricingDetailsFunnelDesk1 active" : "pricingDetailsFunnelDesk1"} onClick={() => handletab(8)}>
                            <h6>Bottom Funnel Omnichannel</h6>
                        </div>
                        <div className={showtab === 9 ? "pricingDetailsFunnelDesk1 active" : "pricingDetailsFunnelDesk1"} onClick={() => handletab(9)}>
                            <h6>Bottom Funnel Sales  Suite</h6>
                        </div>
                </div>
            </div>

            <div class="tab-content text-dark" id="pills-tabContent">

                <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable1/>
                </div>
                <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable2/>
                </div>
                <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable3/>
                </div>

                <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable4/>
                </div>

                <div className={showtab === 5 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable5/>
                </div>

                <div className={showtab === 6 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable6/>
                </div>
                
                <div className={showtab === 7 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable7/>
                </div>

                <div className={showtab === 8 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable8/>
                </div>

                <div className={showtab === 9 ? "tab-pane fade show active" : "tab-pane fade show"}>
                   <PricingTable9/>
                </div>


            </div>
        </div>
      </>
  );
};
