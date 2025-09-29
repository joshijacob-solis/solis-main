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
  const subject = "";
  const body = "";
  const matches = useMediaQuery("(max-width:825px)");
  const composeEmail = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const openWhatsApp = () => {
    matches
      ? window.open(
          `https://api.whatsapp.com/send?phone=${"+91 8301849474"}`,
          "_blank"
        )
      : window.open(
          `https://web.whatsapp.com/send?phone=${"+91 8301849474"}`,
          "_blank"
        );
  };
  const openDialer = () => {
    window.location.href = `tel:${"+91 8301849474"}`;
  };
  const openGoogleMaps = () => {
    const mapsLink = `https://www.google.com/maps/place/Solis+Green+Energy+Solutions/@9.3924153,76.5408612,13.65z/data=!4m6!3m5!1s0x3b06258569df22ad:0xf94bd683ad5f7ee2!8m2!3d9.395112!4d76.5660969!16s%2Fg%2F11rr45vzg_?entry=ttu`;
    window.open(mapsLink, "_blank");
  };
  return (
    <Grid sx={contactPageStyle.wrapGridStyle}>
      <MapBackground />
      <Box sx={contactPageStyle.contactBoxStyle}>
        <Box sx={contactPageStyle.contactHeaderBox}>Contact Us</Box>
        <Box sx={contactPageStyle.contactDataBox}>
          <p
            role="button"
            onClick={(e) => {
              openGoogleMaps();
            }}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <Typography variant="h6" sx={contactPageStyle.typographyStyles}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={locationIcon}
                  style={contactPageStyle.imageIconStyle}
                  alt="locationIcon"
                />
                &nbsp;&nbsp;<b>Solis Green Energy Solutions</b>{" "}
              </span>
            </Typography>
            <Typography
              sx={{
                ...contactPageStyle.typographyStyles,
                marginLeft: matches ? "25px" : "40px",
              }}
            >
              Mini Kristal Arcade
              <br></br> Muthoor P.O, Thiruvalla,
              <br></br>Pathanamthitta
              <br></br> Pin: <b>689107</b>
              <br></br>
              <br></br>
            </Typography>
          </p>
          <Typography sx={contactPageStyle.typographyStyles}>
            <p
              role="button"
              onClick={(e) => {
                composeEmail();
              }}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={gmailIcon}
                  style={contactPageStyle.imageIconStyle}
                  alt="icon"
                />
                &nbsp;&nbsp;<b>Email:&nbsp;</b>{" "}
                solisgreenenergysolutions@gmail.com
              </span>
            </p>
          </Typography>
          <Typography sx={contactPageStyle.typographyStyles}>
            <p
              role="button"
              onClick={(e) => {
                openWhatsApp();
              }}
              style={{ cursor: "pointer" }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={whatsAppIcon}
                  style={contactPageStyle.imageIconStyle}
                  alt="icon"
                />
                &nbsp;&nbsp; <b>WhatsApp:&nbsp;</b> +91 8301849474
              </span>
            </p>
          </Typography>
          <Typography sx={contactPageStyle.typographyStyles}>
            <p
              role="button"
              onClick={(e) => {
                openDialer();
              }}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={phoneIcon}
                  style={contactPageStyle.imageIconStyle}
                  alt="icon"
                />
                &nbsp;&nbsp; <b>Quick Contact Phone:&nbsp;</b>+91 8301849474
              </span>
            </p>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
