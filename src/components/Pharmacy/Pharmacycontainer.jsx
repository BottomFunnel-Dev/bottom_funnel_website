import React,{useState} from "react";
import "./Pharmacycontainer.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export default function Pharmacycontainer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div className="szpharmacycontainer">
      <div className="szpharmacysubcontainer">
        <div className="szpharmacyleft">
          <div>
            <h1>Launch an On-Demand</h1>
            <h4>Pharmacy Delivery App</h4>
            <p>And 4X Your Sales of Medicines.</p>
            <button className="szpharmacybtn" onClick={handleOpen}>Get Started</button>

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

        <div className="szpharmacyright"></div>
      </div>
    </div>
  );
}
