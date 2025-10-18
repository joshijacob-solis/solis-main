// ContactPage.js
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import { ContactPageStyles } from "./ContactPageStyles";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";
import MapBackground from "./map"; // ✅ renamed to match your file name (map.js)

export const ContactPage = () => {
  const s = ContactPageStyles();
  const matches = useMediaQuery("(max-width:825px)");

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "",
  });

  // force equal height for all boxes (desktop)
  const FORCE_HEIGHT_PX = "1200px";

  // actions
  const composeEmail = () =>
    window.open(
      "mailto:solisgreenindia@gmail.com?subject=Inquiry%20-%20Solis%20Green%20Energy"
    );

  const openWhatsApp = () => {
    const message =
      "Hello, I'm interested in Solar solutions from Solis Green Energy.";
    const url = `https://${matches ? "api" : "web"}.whatsapp.com/send?phone=+918301849474&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const openDialer = () => window.open("tel:+918301849474");

  // form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      setSnackbar({
        open: true,
        message: "Please enter a valid 10-digit phone number",
        severity: "error",
      });
      return;
    }

    try {
      console.log("Form submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSnackbar({
        open: true,
        message: "Thank you! We'll contact you shortly.",
        severity: "success",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        service: "",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Grid sx={s.wrapGridStyle}>
      <Box sx={s.containerGrid}>
        {/* LEFT CONTACT BOX */}
        <Box
          sx={{
            ...s.contactBoxStyle,
            height: FORCE_HEIGHT_PX,
            minHeight: FORCE_HEIGHT_PX,
            maxHeight: FORCE_HEIGHT_PX,
          }}
        >
          <Box sx={s.headerBox}>Get In Touch</Box>
          <Box sx={s.bodyBox}>
            <Typography variant="h6" sx={s.typographyStyles}>
              <img src={locationIcon} style={s.imageIconStyle} alt="location" />
              <Box component="span" sx={{ marginLeft: 1 }}>
                <b>Solis Green Energy Solutions</b>
              </Box>
            </Typography>

            <Typography sx={s.typographyStyles}>
              Mini Kristal Arcade, Muthoor P.O, Thiruvalla,
              <br />
              Pathanamthitta, Kerala
              <br />
              Pin: <b>689107</b>
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  ...s.typographyStyles,
                  "&:hover": { color: "#1976d2" },
                }}
                onClick={composeEmail}
              >
                <img src={gmailIcon} style={s.imageIconStyle} alt="email" />
                <Box component="span" sx={{ marginLeft: 1 }}>
                  <b>Email:</b> solisgreenindia@gmail.com
                </Box>
              </Typography>

              <Typography
                sx={{
                  ...s.typographyStyles,
                  "&:hover": { color: "#25D366" },
                }}
                onClick={openWhatsApp}
              >
                <img
                  src={whatsAppIcon}
                  style={s.imageIconStyle}
                  alt="whatsapp"
                />
                <Box component="span" sx={{ marginLeft: 1 }}>
                  <b>WhatsApp:</b> +91 83018 49474
                </Box>
              </Typography>

              <Typography
                sx={{
                  ...s.typographyStyles,
                  "&:hover": { color: "#1976d2" },
                }}
                onClick={openDialer}
              >
                <img src={phoneIcon} style={s.imageIconStyle} alt="phone" />
                <Box component="span" sx={{ marginLeft: 1 }}>
                  <b>Phone:</b> +91 83018 49474
                </Box>
              </Typography>
            </Box>

            <Box sx={s.businessHoursBox}>
              <Typography sx={s.businessHoursTitle}>Business Hours</Typography>
              <Typography sx={s.businessHoursText}>
                Monday - Saturday: 9:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CENTER MAP BOX */}
        <Box
          sx={{
            ...s.mapBoxStyle,
            height: FORCE_HEIGHT_PX,
            minHeight: FORCE_HEIGHT_PX,
            maxHeight: FORCE_HEIGHT_PX,
            position: "relative",
          }}
        >
          <Box sx={s.headerBox}>Our Location</Box>
          <Box sx={s.mapContainer}>
            {/* ✅ Map now fully inside box, not background */}
            <MapBackground zoom={15} brightness={0.97} enableScrollOnDesktop />
          </Box>
        </Box>

        {/* RIGHT FORM BOX */}
        <Box
          sx={{
            ...s.formBoxStyle,
            height: FORCE_HEIGHT_PX,
            minHeight: FORCE_HEIGHT_PX,
            maxHeight: FORCE_HEIGHT_PX,
          }}
        >
          <Box sx={s.headerBoxOrange}>Free Solar Consultation</Box>
          <Box component="form" onSubmit={handleSubmit} sx={s.formBodyBox}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              style={s.inputStyle}
              value={formData.name}
              onChange={handleInputChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              style={s.inputStyle}
              value={formData.phone}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={s.inputStyle}
              value={formData.email}
              onChange={handleInputChange}
            />

            <select
              name="service"
              style={s.selectStyle}
              value={formData.service}
              onChange={handleInputChange}
            >
              <option value="">Select Service Interest</option>
              <option value="residential">Residential Solar</option>
              <option value="commercial">Commercial Solar</option>
              <option value="industrial">Industrial Solar</option>
              <option value="water-pumps">Solar Water Pumps</option>
              <option value="street-lights">Solar Street Lights</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your solar requirements..."
              style={s.textareaStyle}
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
            />

            <Button
              type="submit"
              variant="contained"
              sx={s.submitButtonStyle}
              fullWidth
            >
              Get Free Consultation
            </Button>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "center",
                mt: 1,
                color: "text.secondary",
              }}
            >
              We'll contact you within 24 hours
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Snackbar Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ContactPage;
