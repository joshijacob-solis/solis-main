import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import { ContactPageStyles } from "./styles";
import { MapBackground } from "./map";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const ContactPage = () => {
  const contactPageStyle = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");
  const FORM_ENDPOINT = "https://formspree.io/f/yourid";

  const EMAIL = "solisgreenenergysolutions@gmail.com";
  const PHONE_DISPLAY = "+91 8301849474";
  const PHONE_E164 = "+918301849474";
  const WA_NUMBER = "918301849474";
  const WA_TEXT = encodeURIComponent("Hi Solis Green Energy Solutions, I'd like a solar quote.");
  const MAPS_DIRECTIONS =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Solis Green Energy Solutions, Mini Kristal Arcade, Muthoor, Thiruvalla 689107");

  // GA4 optional
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
    window.location.href = `mailto:${EMAIL}`;
  };
  const openGoogleMaps = () => {
    dl("directions_click", { destination: "Solis Green Energy Solutions" });
    window.open(MAPS_DIRECTIONS, "_blank", "noopener");
  };

  // Form logic
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });
  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ ok: null, msg: "" });

    if (!form.name || !form.phone) {
      setStatus({ ok: false, msg: "Please enter your name and phone number." });
      setSubmitting(false);
      return;
    }

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd });

      if (res.ok) {
        setForm({ name: "", phone: "", email: "", location: "", message: "" });
        setStatus({ ok: true, msg: "Thanks! We’ll contact you shortly." });
        dl("generate_lead", { form_id: "contact_form" });
      } else {
        setStatus({ ok: false, msg: "Error sending form. Try WhatsApp or Call." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid sx={contactPageStyle.wrapGridStyle}>
      <MapBackground />

      {/* Side-by-side container */}
      <Grid
        container
        spacing={matches ? 2 : 4}
        sx={{
          position: "absolute",
          top: matches ? "50%" : "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: matches ? "95%" : "90%",
          zIndex: 10,
          justifyContent: "center",
        }}
      >
        {/* Left Contact Box */}
        <Grid item xs={12} md={5}>
          <Box sx={{ ...contactPageStyle.contactBoxStyle, position: "relative" }}>
            <Box sx={contactPageStyle.contactHeaderBox}>Contact Us</Box>
            <Box sx={contactPageStyle.contactDataBox}>
              <Typography variant="h6" sx={contactPageStyle.typographyStyles}>
                <span
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                  onClick={openGoogleMaps}
                >
                  <img src={locationIcon} style={contactPageStyle.imageIconStyle} alt="location" />
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
              </Typography>

              <Typography sx={contactPageStyle.typographyStyles}>
                <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={composeEmail}>
                  <img src={gmailIcon} style={contactPageStyle.imageIconStyle} alt="email" />
                  &nbsp;&nbsp;<b>Email:&nbsp;</b> {EMAIL}
                </span>
              </Typography>

              <Typography sx={contactPageStyle.typographyStyles}>
                <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={openWhatsApp}>
                  <img src={whatsAppIcon} style={contactPageStyle.imageIconStyle} alt="whatsapp" />
                  &nbsp;&nbsp;<b>WhatsApp:&nbsp;</b> {PHONE_DISPLAY}
                </span>
              </Typography>

              <Typography sx={contactPageStyle.typographyStyles}>
                <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={openDialer}>
                  <img src={phoneIcon} style={contactPageStyle.imageIconStyle} alt="phone" />
                  &nbsp;&nbsp;<b>Quick Contact Phone:&nbsp;</b> {PHONE_DISPLAY}
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Form Box */}
        <Grid item xs={12} md={5}>
          <Box sx={{ ...contactPageStyle.contactBoxStyle, position: "relative" }}>
            <Box sx={contactPageStyle.contactHeaderBoxAccent}>Request a Callback</Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: matches ? 2 : 3,
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              <Stack spacing={matches ? 1.5 : 2}>
                <TextField
                  label="Full Name *"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  size={matches ? "small" : "medium"}
                />
                <TextField
                  label="Phone *"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  size={matches ? "small" : "medium"}
                />
                <TextField
                  label="Email (optional)"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  size={matches ? "small" : "medium"}
                  type="email"
                />
                <TextField
                  label="Location (optional)"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  size={matches ? "small" : "medium"}
                />
                <TextField
                  label="Message (optional)"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  multiline
                  minRows={3}
                  size={matches ? "small" : "medium"}
                  placeholder="Tell us about your roof, load, preferred capacity, etc."
                />

                {status.ok === true && <Alert severity="success">{status.msg}</Alert>}
                {status.ok === false && <Alert severity="error">{status.msg}</Alert>}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={submitting}
                  sx={{
                    fontWeight: 700,
                    borderRadius: "12px",
                    px: 3,
                    py: 1.2,
                    alignSelf: "flex-start",
                  }}
                >
                  {submitting ? "Sending..." : "Submit Request"}
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
