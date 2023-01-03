import React, {useState} from "react";
import "./MarketPlaceBanner.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";


export const MarketplaceBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleP = ()=>{console.log("working button")}
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    // boxShadow: 24,
    backgorund: "green",
    p: 1,
    borderRadius: 2,
  };

  return (
    <div className="marketplacebannerimage">
      <div className="marketplacebannerimageinsideboxtext">
        <h1>Build A Freelancer Marketplace Like Upwork & Fiverr</h1>
        <p>
        Bottom Funnel has a solid track record in marketplace website and CMS development and has covered a large array of applications.

        If you want to build a marketplace website, our expert team will help you to step ahead from the competition by providing you with a stunning design.{" "}
        </p>
        <button className="marketplacebutton" onClick={handleOpen} >
          Get Started
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="popform">
                <PopupForm />
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
