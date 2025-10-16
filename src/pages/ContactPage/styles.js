import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");

  // ⬆️ Make both boxes tall & equal so the submit button is always visible
  const CARD_HEIGHT = isMobile ? 1040 : 860;

  return {
    wrapGridStyle: {
      width: "100%",
      height: "100vh",
      position: "relative",
      display: "flex",
    },

    containerGrid: {
      position: "absolute",
      // nudge up from the footer so tall cards aren’t clipped
      bottom: isMobile ? "4%" : "5%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "20px" : "36px",
      width: isMobile ? "94%" : "86%",
      zIndex: 999,
      alignItems: "stretch",
    },

    /* ========= CONTACT CARD ========= */
    contactBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      height: CARD_HEIGHT,
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },

    contactHeaderBox: {
      backgroundColor: "#5c5c5c",
      color: "#fff",
      fontSize: isMobile ? "20px" : "24px",
      fontWeight: 700,
      padding: "16px 22px",
      flexShrink: 0,
    },

    contactDataBox: {
      padding: "24px 26px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: 0,
    },

    imageIconStyle: {
      width: isMobile ? 18 : 22,
      height: isMobile ? 18 : 22,
    },

    typographyStyles: {
      color: "#3c3c3c",
      fontSize: isMobile ? 15 : 16,
      marginBottom: "12px",
    },

    /* ========= FORM CARD ========= */
    formBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      height: CARD_HEIGHT, // 👈 same tall height
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },

    formHeaderBox: {
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 800,
      fontSize: isMobile ? 20 : 24,
      padding: "16px 22px",
      flexShrink: 0,
    },

    // Flex column: fields, spacer, button (button stays visible)
    formBodyBox: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "22px 26px",
      flex: 1,
      minHeight: 0,
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
      minHeight: 220, // give more space inside the tall form
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
      marginTop: 10,
      "&:hover": { backgroundColor: "#e85e00" },
    },
  };
};
