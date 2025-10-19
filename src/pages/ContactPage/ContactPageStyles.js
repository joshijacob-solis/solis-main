import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { ContactPageStyles } from "./styles";
import { MapBackground } from "./map";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const ContactPage = () => {
  const contactPageStyle = ContactPageStyles();
  const emailAddress = "solisgreenenergysolutions@gmail.com";
  const matches = useMediaQuery("(max-width:825px)");
  
  // Contact actions with improved implementation
  const composeEmail = () => {
    const subject = "Inquiry - Solis Green Energy Solutions";
    const body = "Hello, I'm interested in learning more about your solar solutions.";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const openWhatsApp = () => {
    const message = "Hello, I'm interested in Solar solutions from Solis Green Energy.";
    const phoneNumber = "918301849474"; // Remove spaces for proper formatting
    const url = `https://${matches ? "api" : "web"}.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const openDialer = () => {
    window.open("tel:+918301849474", "_self");
  };

  const openGoogleMaps = () => {
    const mapsLink = `https://www.google.com/maps/place/Solis+Green+Energy+Solutions/@9.3924153,76.5408612,13.65z/data=!4m6!3m5!1s0x3b06258569df22ad:0xf94bd683ad5f7ee2!8m2!3d9.395112!4d76.5660969!16s%2Fg%2F11rr45vzg_?entry=ttu`;
    window.open(mapsLink, "_blank");
  };

  return (
    <Grid sx={contactPageStyle.wrapGridStyle}>
      <MapBackground />
      <Box sx={contactPageStyle.contactBoxStyle}>
        <Box sx={contactPageStyle.contactHeaderBox}>
          Contact Us
        </Box>
        <Box sx={contactPageStyle.contactDataBox}>
          {/* Location Section */}
          <Box 
            sx={contactPageStyle.clickableItem}
            onClick={openGoogleMaps}
          >
            <Typography variant="h6" sx={contactPageStyle.typographyStyles}>
              <img
                src={locationIcon}
                style={contactPageStyle.imageIconStyle}
                alt="location"
              />
              &nbsp;&nbsp;<b>Solis Green Energy Solutions</b>
            </Typography>
            <Typography sx={contactPageStyle.addressText}>
              Mini Kristal Arcade<br />
              Muthoor P.O, Thiruvalla<br />
              Pathanamthitta, Kerala<br />
              Pin: <b>689107</b>
            </Typography>
          </Box>

          {/* Contact Methods */}
          <Box sx={contactPageStyle.contactMethods}>
            <Box sx={contactPageStyle.clickableItem} onClick={composeEmail}>
              <img
                src={gmailIcon}
                style={contactPageStyle.imageIconStyle}
                alt="email"
              />
              &nbsp;&nbsp;
              <Box>
                <b>Email:</b><br />
                solisgreenenergysolutions@gmail.com
              </Box>
            </Box>

            <Box sx={contactPageStyle.clickableItem} onClick={openWhatsApp}>
              <img
                src={whatsAppIcon}
                style={contactPageStyle.imageIconStyle}
                alt="whatsapp"
              />
              &nbsp;&nbsp;
              <Box>
                <b>WhatsApp:</b><br />
                +91 83018 49474
              </Box>
            </Box>

            <Box sx={contactPageStyle.clickableItem} onClick={openDialer}>
              <img
                src={phoneIcon}
                style={contactPageStyle.imageIconStyle}
                alt="phone"
              />
              &nbsp;&nbsp;
              <Box>
                <b>Phone:</b><br />
                +91 83018 49474
              </Box>
            </Box>
          </Box>

          {/* Business Hours */}
          <Box sx={contactPageStyle.businessHours}>
            <Typography sx={contactPageStyle.businessHoursTitle}>
              Business Hours
            </Typography>
            <Typography sx={contactPageStyle.businessHoursText}>
              Monday - Saturday: 9:00 AM - 6:00 PM<br />
              Sunday: Closed
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ContactPage;
