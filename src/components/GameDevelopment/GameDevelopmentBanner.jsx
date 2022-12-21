import React, {useState} from "react";
import "./GameDevelopmentBanner.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

const GameDevelopmentBanner = () => {
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
    <div className="gamedevelopmentbannermainboxes">
      <div className="gamedeveloperbackgroundimagetxtdiv">
        <h1>Game Development Application</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          odio quis quam eleifend vehicula non non tellus. Nam sit amet tortor
        </p>

        <button className="gamedevelopmentbutton" onClick={handleOpen}>Get Started</button>

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

export default GameDevelopmentBanner;
