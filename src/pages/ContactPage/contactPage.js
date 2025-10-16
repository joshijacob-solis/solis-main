import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { ContactPageStyles } from "./styles";
import { MapBackground } from "./map";

// Icons
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const ContactPage = () => {
  const s = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");

  // ==== Config ====
  const FORM_ENDPOINT = "https://formspree.io/f/yourid"; // <-- replace with your real endpoint

  // Business details
  const EMAIL = "solisgreenindia@gmail.com";
  const PHONE_DISPLAY = "+91 8301849474";
  const PHONE_E164 = "+918301849474";
  const WA_NUMBER = "918301849474";
  const WA_TEXT = encodeURIComponent(
    "Hi Solis Green Energy Solutions, I'd like a solar quote."
  );
  const MAPS_DIRECTIONS =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Solis Green Energy Solutions, Mini Kristal Arcade, Muthoor, Thiruvalla 689107"
    );

  // ==== Helpers ====
  const openWhatsApp = () =>
    window.open(`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`, "_blank", "noopener");
  const openDialer = () => (window.location.href = `tel:${PHONE_E164}`);
  const composeEmail = () => (window.location.href = `mailto:${EMAIL}`);
  const openMaps = () => window.open(MAPS_DIRECTIONS, "_blank", "noopener");

  // ==== Form state (Location removed) ====
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const isValidPhone = (v) => /^\+?\d[\d\s\-()]{8,}$/.test(v || "");
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    // Only Name & Phone required
    if (!form.name || !form.phone) {
      setStatus({ ok: false, msg: "Please enter your name and phone number." });
      return;
    }
    if (!isValidPhone(form.phone)) {
      setStatus({ ok: false, msg: "Please enter a valid phone number." });
      return;
    }
    if (form.email && !isValidEmail(form.email)) {
      setStatus({ ok: false, msg: "Please enter a valid email address." });
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));

      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd });
      if (res.ok) {
        setForm({ name: "", phone: "", email: "", message: "" });
        setStatus({ ok: true, msg: "Thanks! We’ll contact you shortly." });
      } else {
        setStatus({
          ok: false,
          msg: "Form send failed. Please try again or contact us via WhatsApp/Call.",
        });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={s.wrapGridStyle}>
      {/* Background Map */}
      <MapBackground />

      {/* Overlay: bottom line — left = contact, right = form */}
      <Box sx={s.overlayContainer}>
        {/* LEFT — Contact Us */}
        <Box sx={s.contactBoxStyle}>
          <Box sx={s.contactHeaderBox}>Contact Us</Box>

          <Box sx={s.contactDataBox}>
            {/* Location / Business name (click → directions) */}
            <Typography
              variant={matches ? "subtitle1" : "h6"}
              sx={s.typographyStyles}
              style={{ cursor: "pointer" }}
              onClick={openMaps}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={locationIcon} style={s.imageIconStyle} alt="location" />
                &nbsp;&nbsp;<b>Solis Green Energy Solutions</b>
              </span>
              <Typography
                sx={{
                  ...s.typographyStyles,
                  marginLeft: matches ? "25px" : "40px",
                  marginTop: "5px",
                }}
              >
                Mini Kristal Arcade <br />
                Muthoor P.O, Thiruvalla, <br />
                Pathanamthitta, Kerala <br />
                Pin: <b>689107</b>
              </Typography>
            </Typography>

            {/* Email */}
            <Typography sx={s.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={composeEmail}
              >
                <img src={gmailIcon} style={s.imageIconStyle} alt="email" />
                &nbsp;&nbsp;<b>Email:</b>
              </span>
              <Typography
                sx={{
                  ...s.typographyStyles,
                  marginLeft: matches ? "25px" : "40px",
                  marginTop: "3px",
                }}
              >
                {EMAIL}
              </Typography>
            </Typography>

            {/* WhatsApp */}
            <Typography sx={s.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={openWhatsApp}
              >
                <img src={whatsAppIcon} style={s.imageIconStyle} alt="whatsapp" />
                &nbsp;&nbsp;<b>WhatsApp:</b>
              </span>
              <Typography
                sx={{
                  ...s.typographyStyles,
                  marginLeft: matches ? "25px" : "40px",
                  marginTop: "3px",
                }}
              >
                {PHONE_DISPLAY}
              </Typography>
            </Typography>

            {/* Phone */}
            <Typography sx={s.typographyStyles}>
              <span
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={openDialer}
              >
                <img src={phoneIcon} style={s.imageIconStyle} alt="phone" />
                &nbsp;&nbsp;<b>Phone:</b>
              </span>
              <Typography
                sx={{
                  ...s.typographyStyles,
                  marginLeft: matches ? "25px" : "40px",
                  marginTop: "3px",
                }}
              >
                {PHONE_DISPLAY}
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* RIGHT — Request a Callback (Location removed) */}
        <Box sx={s.contactBoxStyle}>
          <Box sx={s.contactHeaderBoxAccent}>Request a Callback</Box>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ padding: matches ? 2 : 3 }}>
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
                label="Message (optional)"
                name="message"
                value={form.message}
                onChange={handleChange}
                multiline
                minRows={3}
                size={matches ? "small" : "medium"}
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
      </Box>
    </Box>
  );
};
