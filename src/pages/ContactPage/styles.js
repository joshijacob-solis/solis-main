import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");

  // Tall, equal cards; + sticky button inside a scrollable body
  const CARD_HEIGHT = isMobile ? 1200 : 1000;

  return {
    wrapGridStyle: {
      width: "100%",
      height: "100vh",
      position: "relative",
      display: "flex",
    },

    containerGrid: {
      position: "absolute",
      bottom: isMobile ? "7%" : "8%", // lift cards so tall heights don’t clip
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "22px" : "32px",
      width: isMobile ? "94%" : "86%",
      zIndex: 999,
      alignItems: "stretch",
    },

    // ========== CONTACT CARD ==========
    contactBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      height: CARD_HEIGHT,
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      overflow: "hidden",
    },

    contactHeaderBox: {
      backgroundColor: "#5c5c5c",
      color: "#fff",
      fontWeight: 700,
      fontSize: isMobile ? 20 : 24,
      padding: "16px 22px",
      borderBottom: "3px solid #ff6a00",
      flexShrink: 0,
    },

    // scrollable body so long contact info never pushes outside the card
    contactBodyScroll: {
      padding: "24px 26px",
      overflowY: "auto",
      flex: 1,
      minHeight: 0,
    },

    imageIconStyle: { width: isMobile ? 18 : 22, height: isMobile ? 18 : 22 },
    typographyStyles: { color: "#3c3c3c", fontSize: isMobile ? 15 : 16, marginBottom: "12px" },

    // ========== FORM CARD ==========
    formBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      height: CARD_HEIGHT, // EXACT same as contact card
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      overflow: "hidden",
    },

    formHeaderBox: {
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 800,
      fontSize: isMobile ? 20 : 24,
      padding: "16px 22px",
      borderBottom: "3px solid #ffa54d",
      flexShrink: 0,
    },

    // 👇 THIS is the scroll container; footer inside is sticky
    formBodyScroll: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "22px 26px 110px", // extra bottom space under fields (footer height)
      overflowY: "auto",
      flex: 1,
      minHeight: 0,
      position: "relative",
    },

    // inputs
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
      minHeight: 220,
      resize: "vertical",
      outline: "none",
      width: "100%",
      background: "#fff",
    },

    // sticky footer inside scroll container
    stickyFooter: {
      position: "sticky",
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: 12,
      marginTop: 12,
      background:
        "linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.75) 40%, #ffffff 70%)",
      backdropFilter: "saturate(180%) blur(2px)",
      paddingBottom: 10,
    },

    submitButtonStyle: {
      width: "100%",
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 800,
      fontSize: 16,
      textTransform: "none",
      padding: "14px 18px",
      borderRadius: 10,
      boxShadow: "0 10px 24px rgba(255,106,0,0.25)",
      "&:hover": { backgroundColor: "#e85e00" },
    },
  };
};
