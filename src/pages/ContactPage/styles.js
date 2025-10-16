import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");

  // Heights (map is slightly taller)
  const CONTACT_HEIGHT = isMobile ? 1000 : 720;
  const MAP_HEIGHT = isMobile ? 1000 : 850;
  const FORM_HEIGHT = isMobile ? 1000 : 720;

  const hoverEffect = {
    transform: "translateY(-8px)",
    boxShadow: "0 16px 30px rgba(0,0,0,0.25)",
    transition: "all 0.3s ease-in-out",
  };

  return {
    wrapGridStyle: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fafafa",
      padding: isMobile ? "20px 0" : "50px 0",
    },

    containerGrid: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "95%" : "90%",
      justifyContent: "space-between",
      alignItems: "stretch",
      gap: isMobile ? "20px" : "30px",
      flexWrap: "wrap",
    },

    // 🔹 Common Header Styles
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
      height: CONTACT_HEIGHT,
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": hoverEffect,
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
      transition: "color 0.2s ease-in-out",
      "&:hover": { color: "#ff6a00" },
    },
    imageIconStyle: {
      width: isMobile ? 18 : 22,
      height: isMobile ? 18 : 22,
    },

    // 🔹 2️⃣ Map Box (taller)
    mapBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "32%",
      height: MAP_HEIGHT,
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": hoverEffect,
    },
    mapContainer: {
      flex: 1,
      height: "100%",
      width: "100%",
      borderRadius: "0 0 20px 20px",
      overflow: "hidden",
    },

    // 🔹 3️⃣ Form Box
    formBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "32%",
      height: FORM_HEIGHT,
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": hoverEffect,
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
      transition: "border-color 0.2s ease-in-out",
      "&:focus": {
        borderColor: "#ff6a00",
        boxShadow: "0 0 6px rgba(255,106,0,0.3)",
      },
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
      transition: "border-color 0.2s ease-in-out",
      "&:focus": {
        borderColor: "#ff6a00",
        boxShadow: "0 0 6px rgba(255,106,0,0.3)",
      },
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
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "#e85e00",
        transform: "translateY(-3px)",
        boxShadow: "0 10px 24px rgba(255,106,0,0.4)",
      },
    },
  };
};
