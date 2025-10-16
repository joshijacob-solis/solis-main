import { Box, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { ContactPageStyles } from "./styles";
import { MapBackground } from "./map";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const ContactPage = () => {
  const s = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");

  const composeEmail = () => (window.location.href = `mailto:solisgreenindia@gmail.com`);
  const openWhatsApp = () => {
    const url = matches
      ? "https://api.whatsapp.com/send?phone=+918301849474"
      : "https://web.whatsapp.com/send?phone=+918301849474";
    window.open(url, "_blank");
  };
  const openDialer = () => (window.location.href = "tel:+918301849474");
  const openGoogleMaps = () =>
    window.open(
      "https://www.google.com/maps/place/Solis+Green+Energy+Solutions/@9.3924153,76.5408612,13.65z/data=!4m6!3m5!1s0x3b06258569df22ad:0xf94bd683ad5f7ee2!8m2!3d9.395112!4d76.5660969!16s%2Fg%2F11rr45vzg_",
      "_blank"
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
  };

  return (
    <Grid sx={s.wrapGridStyle}>
      <MapBackground />

      <Box sx={s.containerGrid}>
        {/* LEFT: CONTACT CARD */}
        <Box sx={s.contactBoxStyle}>
          <Box sx={s.contactHeaderBox}>Contact Us</Box>

          <Box sx={s.contactDataBox}>
            <Typography
              variant="h6"
              sx={s.typographyStyles}
              onClick={openGoogleMaps}
              style={{ cursor: "pointer" }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={locationIcon} style={s.imageIconStyle} alt="location" />
                &nbsp;&nbsp;<b>Solis Green Energy Solutions</b>
              </span>
            </Typography>

            <Typography sx={s.typographyStyles}>
              Mini Kristal Arcade, Muthoor P.O, Thiruvalla,
              <br />
              Pathanamthitta, Kerala
              <br />
              Pin: <b>689107</b>
            </Typography>

            <Typography sx={s.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={composeEmail}
              >
                <img src={gmailIcon} style={s.imageIconStyle} alt="email" />
                &nbsp;&nbsp;<b>Email:</b>&nbsp;solisgreenindia@gmail.com
              </span>
            </Typography>

            <Typography sx={s.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={openWhatsApp}
              >
                <img src={whatsAppIcon} style={s.imageIconStyle} alt="whatsapp" />
                &nbsp;&nbsp;<b>WhatsApp:</b>&nbsp;+91 8301849474
              </span>
            </Typography>

            <Typography sx={s.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={openDialer}
              >
                <img src={phoneIcon} style={s.imageIconStyle} alt="phone" />
                &nbsp;&nbsp;<b>Phone:</b>&nbsp;+91 8301849474
              </span>
            </Typography>

            {/* spacer to balance with form card */}
            <Box sx={{ flexGrow: 1 }} />
          </Box>
        </Box>

        {/* RIGHT: FORM CARD */}
        <Box sx={s.formBoxStyle}>
          <Box sx={s.formHeaderBox}>Request a Callback</Box>

          {/* Flex column: fields -> spacer -> button (always visible) */}
          <Box component="form" onSubmit={handleSubmit} sx={s.formBodyBox}>
            <input type="text" name="name" placeholder="Full Name * *" required style={s.inputStyle} />
            <input type="tel" name="phone" placeholder="Phone * *" required style={s.inputStyle} />
            <input type="email" name="email" placeholder="Email (optional)" style={s.inputStyle} />
            <textarea name="message" placeholder="Message (optional)" style={s.textareaStyle} />

            {/* this spacer pushes the button to the bottom but keeps it visible */}
            <Box sx={{ flexGrow: 1, minHeight: 0 }} />

            <Button type="submit" variant="contained" sx={s.submitButtonStyle}>
              Submit Request
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
