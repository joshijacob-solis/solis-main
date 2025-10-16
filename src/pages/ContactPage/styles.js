import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");

  // ⬆️ Increased height by ~10mm (~38px)
  const CARD_HEIGHT = isMobile ? 1080 : 900;

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
      bottom: isMobile ? "5%" : "6%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "24px" : "36px",
      width: isMobile ? "94%" : "85%",
      zIndex: 999,
      alignItems: "stretch",
    },

    /* ========= CONTACT CARD ========= */
    contactBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      height: CARD_HEIGHT, // equal height
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },

    contactHeaderBox: {
      backgroundColor: "#5c5c5c",
      color: "#fff",
      fontSize: isMobile ? "20px" : "26px",
      fontWeight: 700,
      padding: "16px 22px",
      flexShrink: 0,
    },

    contactDataBox: {
      padding: "28px 30px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: 0,
      justifyContent: "flex-start",
    },

    imageIconStyle: {
      width: isMobile ? "18px" : "22px",
      height: isMobile ? "18px" : "22px",
    },

    typographyStyles: {
      color: "#3c3c3c",
      fontSize: isMobile ? "15px" : "17px",
      marginBottom: "12px",
    },

    /* ========= FORM CARD ========= */
    formBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      height: CARD_HEIGHT, // exactly same as Contact card
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },

    formHeaderBox: {
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 800,
      fontSize: isMobile ? 20 : 26,
      padding: "16px 22px",
      flexShrink: 0,
    },

    formBodyBox: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "28px 32px",
      flex: 1,
      minHeight: 0,
      justifyContent: "flex-start",
    },

    inputStyle: {
      padding: "14px 16px",
      border: "1px solid #ccc",
      borderRadius: 10,
      fontSize: 16,
      outline: "none",
      width: "100%",
      background: "#fff",
    },

    textareaStyle: {
      padding: "14px 16px",
      border: "1px solid #ccc",
      borderRadius: 10,
      fontSize: 16,
      minHeight: 200,
      resize: "vertical",
      outline: "none",
      width: "100%",
      background: "#fff",
    },

    submitButtonStyle: {
      alignSelf: "stretch",
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 800,
      fontSize: 16,
      textTransform: "none",
      padding: "14px 18px",
      borderRadius: 10,
      boxShadow: "0 8px 20px rgba(255,106,0,0.25)",
      marginTop: "auto",
      "&:hover": { backgroundColor: "#e85e00" },
    },
  };
};
