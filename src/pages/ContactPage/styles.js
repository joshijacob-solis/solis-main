import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");

  const cardHeight = isMobile ? 720 : 620; // 👈 Equal & taller height for both boxes

  return {
    wrapGridStyle: {
      width: "100%",
      height: "100vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    containerGrid: {
      position: "absolute",
      bottom: isMobile ? "4%" : "5%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "18px" : "30px",
      width: isMobile ? "94%" : "86%",
      zIndex: 999,
      alignItems: "stretch",
    },

    /* Shared card base */
    baseCardStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      minHeight: cardHeight,
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },

    // ===== LEFT CARD =====
    contactBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      minHeight: cardHeight,
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    contactHeaderBox: {
      backgroundColor: "#5c5c5c",
      color: "#fff",
      fontSize: isMobile ? "18px" : "22px",
      fontWeight: 700,
      padding: "14px 18px",
    },
    contactScrollArea: {
      padding: "25px 28px",
      overflowY: "auto",
      flex: 1,
    },
    imageIconStyle: {
      width: isMobile ? 18 : 22,
      height: isMobile ? 18 : 22,
    },
    typographyStyles: {
      color: "#3c3c3c",
      fontSize: isMobile ? 14 : 16,
      marginBottom: "10px",
    },

    // ===== RIGHT CARD =====
    formBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      minHeight: cardHeight,
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    formHeaderBox: {
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 800,
      fontSize: isMobile ? 18 : 22,
      padding: "14px 18px",
    },
    formBodyBox: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "22px 28px",
      flex: 1,
      justifyContent: "flex-start",
    },
    inputStyle: {
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: 10,
      fontSize: 16,
      outline: "none",
      width: "100%",
      background: "#fff",
    },
    textareaStyle: {
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: 10,
      fontSize: 16,
      minHeight: 120,
      resize: "vertical",
      outline: "none",
      width: "100%",
      background: "#fff",
    },
    submitButtonStyle: {
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 800,
      fontSize: 16,
      textTransform: "none",
      padding: "12px 16px",
      borderRadius: 10,
      width: "100%",
      marginTop: "10px",
      alignSelf: "center",
      boxShadow: "0 8px 16px rgba(255,106,0,0.28)",
      "&:hover": { backgroundColor: "#e85e00" },
    },
  };
};
