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

  // ====== Config: change this to your endpoint (Formspree or Apps Script) ======
  const FORM_ENDPOINT = "https://formspree.io/f/yourid";

  // ====== Constants ======
  const EMAIL = "solisgreenenergysolutions@gmail.com";
  const PHONE_DISPLAY = "+91 8301849474";
  const PHONE_E164 = "+918301849474"; // for tel:
  const WA_NUMBER = "918301849474";   // for wa.me (no +)
  const WA_TEXT = encodeURIComponent("Hi Solis Green Energy Solutions, I'd like a solar quote.");
  const MAPS_DIRECTIONS =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Solis Green Energy Solutions, Mini Kristal Arcade, Muthoor, Thiruvalla 689107");

  // ====== GA4 helper (via GTM) ======
  const dl = (event, params = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  };

  // ====== Actions ======
  const openWhatsApp = () => {
    dl("whatsapp_click", { to: WA_NUMBER });
    window.open(`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`, "_blank", "noopener");
  };

  const openDialer = () => {
    dl("call_click", { phone: PHONE_E164 });
    window.location.href = `tel:${PHONE_E164}`;
  };

  const composeEmail = () => {
    const mailto = `mailto:${EMAIL}`;
    window.location.href = mailto;
  };

  const openGoogleMaps = () => {
    dl("directions_click", { destination: "Solis Green Energy Solutions" });
    window.open(MAPS_DIRECTIONS, "_blank", "noopener");
  };

  // ====== Form state ======
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: null | boolean; msg: string }>({ ok: null, msg: "" });

  const handleChange = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

  const isValidPhone = (v) => /^\+?\d[\d\s\-()]{8,}$/.test(v || "");
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    // Only Name + Phone mandatory
    if (!form.name || !form.phone) {
      setStatus({ ok: false, msg: "Please enter your name and phone number." });
      return;
    }
    if (!isValidPhone(form.phone)) {
      setStatus({ ok: false, msg: "Please enter a valid phone number." });
      return;
    }
    // Email optional but validate if present
    if (form.email && !isValidEmail(form.email)) {
      setStatus({ ok: false, msg: "Please enter a valid email address." });
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));

      // Attribution
      const params = new URLSearchParams(window.location.search);
      fd.append("page_url", window.location.href);
      ["utm_source", "utm_medium", "utm_campaign", "gclid"].forEach((k) => {
        const val = params.get(k);
        if (val) fd.append(k, val);
      });

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (res.ok) {
        setForm({ name: "", phone: "", email: "", location: "", message: "" });
        setStatus({ ok: true, msg: "Thanks! We’ll contact you shortly." });
        dl("generate_lead", { form_id: "contact_form", submission_status: "success" });
      } else {
        setStatus({ ok: false, msg: "There was an issue sending the form. Please try WhatsApp or Call." });
        dl("lead_form_error", { form_id: "contact_form", error_message: `status_${res.status}` });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network error. Please try again or contact us directly." });
      dl("lead_form_error", { form_id: "contact_form", error_message: err?.message || "network_error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid sx={s.wrapGridStyle}>
      {/* Background map */}
      <MapBackground />

      {/* Side-by-side boxes over the map */}
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
        {/* LEFT: Contact info box */}
        <Grid item xs={12} md={5}>
          <Box sx={{ ...s.contactBoxStyle, position: "relative", top: 0, left: 0 }}>
            <Box sx={s.contactHeaderBox}>Contact Us</Box>
            <Box sx={s.contactDataBox}>
              <Typography variant={matches ? "subtitle1" : "h6"} sx={s.typographyStyles}>
                <span
                  style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                  onClick={openGoogleMaps}
                >
                  <img src={locationIcon} style={s.imageIconStyle} alt="location icon" />
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
                <br />
                <br />
              </Typography>

              <Typography sx={s.typographyStyles}>
                <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={composeEmail}>
                  <img src={gmailIcon} style={s.imageIconStyle} alt="email icon" />
                  &nbsp;&nbsp;<b>Email:&nbsp;</b> {EMAIL}
                </span>
              </Typography>

              <Typography sx={s.typographyStyles}>
                <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={openWhatsApp}>
                  <img src={whatsAppIcon} style={s.imageIconStyle} alt="whatsapp icon" />
                  &nbsp;&nbsp;<b>WhatsApp:&nbsp;</b> {PHONE_DISPLAY}
                </span>
              </Typography>

              <Typography sx={s.typographyStyles}>
                <span style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={openDialer}>
                  <img src={phoneIcon} style={s.imageIconStyle} alt="phone icon" />
                  &nbsp;&nbsp;<b>Quick Contact Phone:&nbsp;</b> {PHONE_DISPLAY}
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT: Form box */}
        <Grid item xs={12} md={5}>
          <Box sx={{ ...s.contactBoxStyle, position: "relative", top: 0, left: 0 }}>
            {/* Use your accent header style (add this in styles.js) */}
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
    </Grid>
  );
};
