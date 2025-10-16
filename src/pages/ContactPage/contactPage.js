import { Box, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { ContactPageStyles } from "./styles";
import { MapBackground } from "./map";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const ContactPage = () => {
  const contactPageStyle = ContactPageStyles();
  const emailAddress = "solisgreenindia@gmail.com";
  const matches = useMediaQuery("(max-width:825px)");

  const composeEmail = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const openWhatsApp = () => {
    const whatsappLink = matches
      ? `https://api.whatsapp.com/send?phone=${"+918301849474"}`
      : `https://web.whatsapp.com/send?phone=${"+918301849474"}`;
    window.open(whatsappLink, "_blank");
  };

  const openDialer = () => {
    window.location.href = `tel:${"+918301849474"}`;
  };

  const openGoogleMaps = () => {
    const mapsLink = `https://www.google.com/maps/place/Solis+Green+Energy+Solutions/@9.3924153,76.5408612,13.65z/data=!4m6!3m5!1s0x3b06258569df22ad:0xf94bd683ad5f7ee2!8m2!3d9.395112!4d76.5660969!16s%2Fg%2F11rr45vzg_?entry=ttu`;
    window.open(mapsLink, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
  };

  return (
    <Grid sx={contactPageStyle.wrapGridStyle}>
      <MapBackground />
      <Box sx={contactPageStyle.containerGrid}>
        {/* Left — Contact Info */}
        <Box sx={contactPageStyle.contactBoxStyle}>
          <Box sx={contactPageStyle.contactHeaderBox}>Contact Us</Box>
          <Box sx={contactPageStyle.contactDataBox}>
            <Typography
              variant="h6"
              sx={contactPageStyle.typographyStyles}
              onClick={openGoogleMaps}
              style={{ cursor: "pointer" }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={locationIcon}
                  style={contactPageStyle.imageIconStyle}
                  alt="locationIcon"
                />
                &nbsp;&nbsp;<b>Solis Green Energy Solutions</b>
              </span>
            </Typography>
            <Typography sx={contactPageStyle.typographyStyles}>
              Mini Kristal Arcade, Muthoor P.O, Thiruvalla,<br />
              Pathanamthitta, Kerala<br />Pin: <b>689107</b>
            </Typography>

            <Typography sx={contactPageStyle.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={composeEmail}
              >
                <img src={gmailIcon} style={contactPageStyle.imageIconStyle} alt="email" />
                &nbsp;&nbsp;<b>Email:</b>&nbsp;solisgreenindia@gmail.com
              </span>
            </Typography>

            <Typography sx={contactPageStyle.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={openWhatsApp}
              >
                <img src={whatsAppIcon} style={contactPageStyle.imageIconStyle} alt="whatsapp" />
                &nbsp;&nbsp;<b>WhatsApp:</b>&nbsp;+91 8301849474
              </span>
            </Typography>

            <Typography sx={contactPageStyle.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={openDialer}
              >
                <img src={phoneIcon} style={contactPageStyle.imageIconStyle} alt="phone" />
                &nbsp;&nbsp;<b>Phone:</b>&nbsp;+91 8301849474
              </span>
            </Typography>
          </Box>
        </Box>

        {/* Right — Form */}
        <Box sx={contactPageStyle.formBoxStyle}>
          <Box sx={contactPageStyle.formHeaderBox}>Request a Callback</Box>
          <Box component="form" onSubmit={handleSubmit} sx={contactPageStyle.formBodyBox}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              style={contactPageStyle.inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              required
              style={contactPageStyle.inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              style={contactPageStyle.inputStyle}
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              style={contactPageStyle.textareaStyle}
            ></textarea>
            <Button
              type="submit"
              variant="contained"
              sx={contactPageStyle.submitButtonStyle}
            >
              Submit Request
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
