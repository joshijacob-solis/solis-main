import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import offer from "../../assets/images/offerGif.gif";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export default function MainModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const matches = useMediaQuery("(max-width:825px)");
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 700;
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "80%" : "31%",
    height: matches ? "fit-content" : "fit-content",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    bgcolor: "background.paper",
    justifyContent: "center",
  };
  return (
    <div className="offer-modal">
      <Button
        sx={{
          position: "fixed",
          bottom: "50%",
          left: "0px",
          width: `${window.innerWidth / 6.5}px`,
          height: `${window.innerWidth / 6.5}px`,
          display: "none"
        }}
        onClick={handleOpen}
      >
        <img
          src={offer}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="offer"
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              padding: "30px 10px 10px 10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                position: "absolute",
                minWidth: "0px",
                padding: "5px !important",
                top: "2px",
                right: "0px",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </Button>
            {props.children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
