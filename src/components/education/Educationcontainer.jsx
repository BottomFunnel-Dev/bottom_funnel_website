import React from "react";
import "./Educationcontainer.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";
export default function Educationcontainer() {
  const [open, setOpen] = React.useState(false);
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
    <div className="szeducationcon">
      <div className="szsubeducation">
        <div className="szeducatleft">
          <h1>Education App Development Company</h1>
          <p>
            Get an Online Tutoring Platform that caters to all your tutoring
            needs. The One-to-One tutoring solution is perfect for individuals
            or groups. Your classroom solution will help you get more out of
            your lessons by providing a digital platform for you and your
            students.
          </p>
          <button onClick={handleOpen} className="szedubtn">
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
                  <PopupForm/>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>

        <div className="szeducatright">
          <div className="circle">
            <img src="Images/EducationDev/educationBanner.png"/>
          </div>
          {/* <div className="laptop">
            <img src="Images/education/laptop.png" />{" "}
          </div>
          <div className="laptopimg">
            <img src="Images/education/laptopimage.png" />
          </div>
          <div className="mobilecase">
            {" "}
            <img src="Images/education/mobilecase.png" />
          </div>
          <div className="lapimobile">
            {" "}
            <img src="Images/education/lapmobile.png" />
          </div>
          <div className="oval">
            <img src="Images/education/rectangle2.png" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
