import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");

  const CARD_HEIGHT = isMobile ? 1100 : 720;

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
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "95%" : "90%",
      justifyContent: "space-between",
      alignItems: "stretch",
      gap: isMobile ? "20px" : "30px",
      margin: "auto",
      flexWrap: "wrap",
    },

    // 🔹 Common Header
    headerBox: {
      backgroundColor: "#5c5c5c",
      color: "#fff",
      fontWeight: 700,
      fontSize: isMobile ? "20px" : "22px",
      padding: "14px 20px",
      borderRadius: "20px 20px 0 0",
    },
    headerBoxOrange: {
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 700,
      fontSize: isMobile ? "20px" : "22px",
      padding: "14px 20px",
      borderRadius: "20px 20px 0 0",
    },

    // 🔹 1️⃣ Contact Box
    contactBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "32%",
      height: CARD_HEIGHT,
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    bodyBox: {
      padding: "24px",
      flex: 1,
      overflowY: "auto",
    },
    typographyStyles: {
      fontSize: isMobile ? 15 : 16,
      color: "#333",
      marginBottom: "14px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    imageIconStyle: {
      width: isMobile ? 18 : 22,
      height: isMobile ? 18 : 22,
    },

    // 🔹 2️⃣ Map Box
    mapBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "32%",
      height: CARD_HEIGHT,
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    mapContainer: {
      flex: 1,
      height: "100%",
      width: "100%",
    },

    // 🔹 3️⃣ Form Box
    formBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "32%",
      height: CARD_HEIGHT,
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    formBodyBox: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "24px",
      flex: 1,
      overflowY: "auto",
    },
    inputStyle: {
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
      width: "100%",
    },
    textareaStyle: {
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
      width: "100%",
      minHeight: "160px",
      resize: "vertical",
    },
    submitButtonStyle: {
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "12px",
      borderRadius: "10px",
      textTransform: "none",
      boxShadow: "0 6px 16px rgba(255,106,0,0.3)",
      "&:hover": { backgroundColor: "#e85e00" },
    },
  };
};
