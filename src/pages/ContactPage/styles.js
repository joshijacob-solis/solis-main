// src/pages/ContactPage/ContactPageStyles.js
import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");
  return {
    wrapGridStyle: { width: "100%", display: "flex", justifyContent: "center" },
    containerGrid: { width: isMobile ? "95%" : "88%", display: "flex", gap: 20 },
    contactBoxStyle: { background: "#fff", padding: 20 },
    headerBox: { padding: 12, background: "#666", color: "#fff" },
    bodyBox: { padding: 16 },
    mapBoxStyle: { padding: 0 },
    mapContainer: { height: "100%" },
    formBoxStyle: { background: "#fff", padding: 20 },
    formBodyBox: { padding: 16 },
    inputStyle: { padding: 10 },
    textareaStyle: { padding: 10 },
    selectStyle: { padding: 10 },
    submitButtonStyle: { padding: 12 },
  };
};

export default ContactPageStyles;
