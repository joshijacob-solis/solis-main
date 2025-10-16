import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { ContactPageStyles } from "./styles";
import { MapBackground } from "./map";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const ContactPage = () => {
  const contactPageStyle = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");

  // ====== Constants (no spaces in phone for links) ======
  const EMAIL = "solisgreenenergysolutions@gmail.com";
  const PHONE_DISPLAY = "+91 8301849474";
  const PHONE_E164 = "+918301849474";          // for tel:
  const WA_NUMBER = "918301849474";            // for wa.me (no +)
  const WA_TEXT = encodeURIComponent(
    "Hi Solis Green Energy Solutions, I'd like a solar quote."
  );
  const MAPS_DIRECTIONS =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Solis Green Energy Solutions, Mini Kristal Arcade, Muthoor, Thiruvalla 689107");

  // ====== Optional GA4 via GTM ======
  const dl = (event, params = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  };

  const openWhatsApp = () => {
    dl("whatsapp_click", { to: WA_NUMBER });
    window.open(`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`, "_blank", "noopener");
  };

  const openDialer = () => {
    dl("call_click", { phone: PHONE_E164 });
    window.location.href = `tel:${PHONE_E164}`;
  };

  const composeEmail = () => {
    const subject = "";
    const body = "";
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const openGoogleMaps = () => {
    dl("directions_click", { destination: "Solis Green Energy Solutions" });
    window.open(MAPS_DIRECTIONS, "_blank", "noopener");
  };

  return (
    <Grid sx={contactPageStyle.wrapGridStyle}>
      <MapBackground />
      <Box sx={contactPageStyle.contactBoxStyle}>
        <Box sx={contactPageStyle.contactHeaderBox}>Contact Us</Box>

        <Box sx={contactPageStyle.contactDataBox}>
          {/* Location / Directions */}
          <Box
            role="button"
            onClick={openGoogleMaps}
            sx={{ cursor: "pointer" }}
            component="a"
            href={MAPS_DIRECTIONS}
            target="_blank"
            rel="noopener"
          >
            <Typography variant="h6" sx={contactPageStyle.typographyStyles}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={locationIcon} style={contactPageStyle.imageIconStyle} alt="location icon" />
                &nbsp;&nbsp;<b>Solis Green Energy Solutions</b>
              </span>
            </Typography>
            <Typography
              sx={{
                ...contactPageStyle.typographyStyles,
                marginLeft: matches ? "25px" : "40px",
              }}
            >
              Mini Kristal Arcade
              <br /> Muthoor P.O, Thiruvalla,
              <br /> Pathanamthitta
              <br /> Pin: <b>689107</b>
              <br />
              <br />
            </Typography>
          </Box>

          {/* Email */}
          <Typography sx={contactPageStyle.typographyStyles}>
            <Box
              role="button"
              onClick={composeEmail}
              sx={{ cursor: "pointer" }}
              component="a"
              href={`mailto:${EMAIL}`}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={gmailIcon} style={contactPageStyle.imageIconStyle} alt="email icon" />
                &nbsp;&nbsp;<b>Email:&nbsp;</b> {EMAIL}
              </span>
            </Box>
          </Typography>

          {/* WhatsApp */}
          <Typography sx={contactPageStyle.typographyStyles}>
            <Box
              role="button"
              onClick={openWhatsApp}
              sx={{ cursor: "pointer" }}
              component="a"
              href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener"
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={whatsAppIcon} style={contactPageStyle.imageIconStyle} alt="whatsapp icon" />
                &nbsp;&nbsp; <b>WhatsApp:&nbsp;</b> {PHONE_DISPLAY}
              </span>
            </Box>
          </Typography>

          {/* Phone */}
          <Typography sx={contactPageStyle.typographyStyles}>
            <Box
              role="button"
              onClick={openDialer}
              sx={{ cursor: "pointer" }}
              component="a"
              href={`tel:${PHONE_E164}`}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={phoneIcon} style={contactPageStyle.imageIconStyle} alt="phone icon" />
                &nbsp;&nbsp; <b>Quick Contact Phone:&nbsp;</b>{PHONE_DISPLAY}
              </span>
            </Box>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
