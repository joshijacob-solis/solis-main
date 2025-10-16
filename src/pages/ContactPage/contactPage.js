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
  const s = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");

  // ======= Form endpoint =======
  const FORM_ENDPOINT = "https://formspree.io/f/yourid";

  const EMAIL = "solisgreenenergysolutions@gmail.com";
  const PHONE_DISPLAY = "+91 8301849474";
  const PHONE_E164 = "+918301849474";
  const WA_NUMBER = "918301849474";
  const WA_TEXT = encodeURIComponent("Hi Solis Green Energy Solutions, I'd like a solar quote.");
  const MAPS_DIRECTIONS =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Solis Green Energy Solutions, Mini Kristal Arcade, Muthoor, Thiruvalla 689107");

  // ======= Actions =======
  const openWhatsApp = () =>
    window.open(`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`, "_blank", "noopener");
  const openDialer = () => (window.location.href = `tel:${PHONE_E164}`);
  const composeEmail = () => (window.location.href = `mailto:${EMAIL}`);
  const openGoogleMaps = () => window.open(MAPS_DIRECTIONS, "_blank", "noopener");

  // ======= Form state =======
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  const handleChange = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setStatus({ ok: false, msg: "Please enter your name and phone number." });
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd });
      if (res.ok) {
        setForm({ name: "", phone: "", email: "", location: "", message: "" });
        setStatus({ ok: true, msg: "Thanks! We’ll contact you shortly." });
      } else {
        setStatus({ ok: false, msg: "Error sending form. Please try again." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={s.wrapGridStyle}>
      {/* Map Background */}
      <MapBackground />

      {/* Overlay container */}
      <Grid
        container
        spacing={matches ? 2 : 4}
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          position: "absolute",
          top: matches ? "55%" : "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: matches ? "95%" : "85%",
          zIndex: 20,
        }}
      >
        {/* Left box: Contact Info */}
        <Grid item xs={12} md={5}>
          <Box sx={{ ...s.contactBoxStyle, position: "relative" }}>
            <Box sx={s.contactHeaderBox}>Contact Us</Box>
            <Box sx={s.contactDataBox}>
              <Typography variant={matches ? "subtitle1" : "h6"} sx={s.typographyStyles}>
                <span
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                  onClick={openGoogleMaps}
                >
                  <img src={locationIcon} style={s.imageIconStyle} alt="location" />
                  &nbsp;&nbsp;<b>Solis Green Energy Solutions</b>
                </span>
              </Typography>

              <Typography
                sx={{
                  ...s.typographyStyles,
                  marginLeft: matches ? "25px" : "40px",
                }}
              >
                Mini Kristal Arcade
                <br /> Muthoor P.O, Thiruvalla,
                <br /> Pathanamthitta
                <br /> Pin: <b>689107</b>
              </Typography>

              <Typography sx={s.typographyStyles}>
                <span
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                  onClick={composeEmail}
                >
                  <img src={gmailIcon} style={s.imageIconStyle} alt="email" />
                  &nbsp;&nbsp;<b>Email:</b> {EMAIL}
                </span>
              </Typography>

              <Typography sx={s.typographyStyles}>
                <span
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                  onClick={openWhatsApp}
                >
                  <img src={whatsAppIcon} style={s.imageIconStyle} alt="whatsapp" />
                  &nbsp;&nbsp;<b>WhatsApp:</b> {PHONE_DISPLAY}
                </span>
              </Typography>

              <Typography sx={s.typographyStyles}>
                <span
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                  onClick={openDialer}
                >
                  <img src={phoneIcon} style={s.imageIconStyle} alt="phone" />
                  &nbsp;&nbsp;<b>Quick Contact Phone:</b> {PHONE_DISPLAY}
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right box: Form */}
        <Grid item xs={12} md={5}>
          <Box sx={{ ...s.contactBoxStyle, position: "relative" }}>
            <Box sx={s.contactHeaderBoxAccent}>Request a Callback</Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
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
    </Box>
  );
};
