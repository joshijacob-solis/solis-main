import { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, TextField, Button, Alert, Stack } from "@mui/material";
import { ContactPageStyles } from "./styles";
import { MapBackground } from "./map";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const ContactPage = () => {
  const contactPageStyle = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");

  // ====== Config: change only this to switch destination ======
  // Formspree example: https://formspree.io/f/xxxxxxx
  // Apps Script example: https://script.google.com/macros/s/AKfycb.../exec
  const FORM_ENDPOINT = "https://formspree.io/f/yourid";

  // ====== Contact constants ======
  const EMAIL = "solisgreenenergysolutions@gmail.com";
  const PHONE_DISPLAY = "+91 8301849474";
  const PHONE_E164 = "+918301849474";
  const WA_NUMBER = "918301849474";
  const WA_TEXT = encodeURIComponent("Hi Solis Green Energy Solutions, I'd like a solar quote.");
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

  // ====== Form state ======
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const isValidPhone = (v) => /^\+?\d[\d\s\-()]{8,}$/.test(v || "");
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    // Basic checks
    if (!form.name || !form.phone || !form.email || !form.location || !form.message) {
      setStatus({ ok: false, msg: "Please fill all fields." });
      return;
    }
    if (!isValidPhone(form.phone)) {
      setStatus({ ok: false, msg: "Please enter a valid phone number." });
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus({ ok: false, msg: "Please enter a valid email address." });
      return;
    }

    setSubmitting(true);
    try {
      // Build form data
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));

      // Append attribution
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
        dl("generate_lead", { form_id: "contact_page_form", submission_status: "success" });
      } else {
        setStatus({ ok: false, msg: "There was an issue sending the form. Please try WhatsApp or Call." });
        dl("lead_form_error", { form_id: "contact_page_form", error_message: `status_${res.status}` });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network error. Please try again or contact us directly." });
      dl("lead_form_error", { form_id: "contact_page_form", error_message: err?.message || "network_error" });
    } finally {
      setSubmitting(false);
    }
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

          {/* ===================== CONTACT FORM ===================== */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1.5, p: 2, border: "1px solid #e2e8f0", borderRadius: "12px", background: "#fff" }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>Request a Callback</Typography>

            <Stack spacing={1.25}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                size="small"
              />
              <TextField
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                size="small"
                placeholder="+91 8281770660"
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                size="small"
                type="email"
              />
              <TextField
                label="Location (Town / City)"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                size="small"
              />
              <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                size="small"
                multiline
                minRows={3}
                placeholder="Tell us about your roof, load, preferred capacity, etc."
              />

              {status.ok === true && <Alert severity="success">{status.msg}</Alert>}
              {status.ok === false && <Alert severity="error">{status.msg}</Alert>}

              <Button
                type="submit"
                variant="contained"
                disabled={submitting}
                sx={{ fontWeight: 700 }}
              >
                {submitting ? "Sending..." : "Submit Request"}
              </Button>
            </Stack>
          </Box>
          {/* =================== END CONTACT FORM =================== */}
        </Box>
      </Box>
    </Grid>
  );
};
