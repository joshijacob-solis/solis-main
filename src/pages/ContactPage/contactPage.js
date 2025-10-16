import { Box, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { ContactPageStyles } from "./styles";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const ContactPage = () => {
  const s = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");

  const solisPosition = [9.395112, 76.5660969]; // Solis Green coordinates

  const icon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 40],
  });

  const composeEmail = () => (window.location.href = `mailto:solisgreenindia@gmail.com`);
  const openWhatsApp = () => {
    const url = matches
      ? "https://api.whatsapp.com/send?phone=+918301849474"
      : "https://web.whatsapp.com/send?phone=+918301849474";
    window.open(url, "_blank");
  };
  const openDialer = () => (window.location.href = "tel:+918301849474");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
  };

  return (
    <Grid sx={s.wrapGridStyle}>
      <Box sx={s.containerGrid}>
        {/* 1️⃣ CONTACT BOX */}
        <Box sx={s.contactBoxStyle}>
          <Box sx={s.headerBox}>Contact Us</Box>
          <Box sx={s.bodyBox}>
            <Typography variant="h6" sx={s.typographyStyles}>
              <img src={locationIcon} style={s.imageIconStyle} alt="location" /> &nbsp;
              <b>Solis Green Energy Solutions</b>
            </Typography>
            <Typography sx={s.typographyStyles}>
              Mini Kristal Arcade, Muthoor P.O, Thiruvalla,
              <br />
              Pathanamthitta, Kerala
              <br />
              Pin: <b>689107</b>
            </Typography>
            <Typography sx={s.typographyStyles} onClick={composeEmail}>
              <img src={gmailIcon} style={s.imageIconStyle} alt="email" /> &nbsp;
              <b>Email:</b> solisgreenindia@gmail.com
            </Typography>
            <Typography sx={s.typographyStyles} onClick={openWhatsApp}>
              <img src={whatsAppIcon} style={s.imageIconStyle} alt="whatsapp" /> &nbsp;
              <b>WhatsApp:</b> +91 8301849474
            </Typography>
            <Typography sx={s.typographyStyles} onClick={openDialer}>
              <img src={phoneIcon} style={s.imageIconStyle} alt="phone" /> &nbsp;
              <b>Phone:</b> +91 8301849474
            </Typography>
          </Box>
        </Box>

        {/* 2️⃣ MAP BOX */}
        <Box sx={s.mapBoxStyle}>
          <Box sx={s.headerBox}>Locate Us</Box>
          <Box sx={s.mapContainer}>
            <MapContainer
              center={solisPosition}
              zoom={13}
              style={{ height: "100%", width: "100%", borderRadius: "0 0 20px 20px" }}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={solisPosition} icon={icon}>
                <Popup>Solis Green Energy Solutions, Thiruvalla</Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Box>

        {/* 3️⃣ FORM BOX */}
        <Box sx={s.formBoxStyle}>
          <Box sx={s.headerBoxOrange}>Request a Callback</Box>
          <Box component="form" onSubmit={handleSubmit} sx={s.formBodyBox}>
            <input type="text" name="name" placeholder="Full Name *" required style={s.inputStyle} />
            <input type="tel" name="phone" placeholder="Phone *" required style={s.inputStyle} />
            <input type="email" name="email" placeholder="Email (optional)" style={s.inputStyle} />
            <textarea name="message" placeholder="Message (optional)" style={s.textareaStyle}></textarea>
            <Button type="submit" variant="contained" sx={s.submitButtonStyle}>
              Submit Request
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
