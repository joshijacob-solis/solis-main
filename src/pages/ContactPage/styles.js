import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");

  return {
    wrapGridStyle: {
      width: "100%",
      height: "100vh",
      position: "relative",
      display: "flex",
    },

    containerGrid: {
      position: "absolute",
      bottom: isMobile ? "4%" : "6%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "14px" : "26px",
      width: isMobile ? "94%" : "86%",
      zIndex: 999,
    },

    // ===== LEFT CARD =====
    contactBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: isMobile ? "100%" : "46%",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      minHeight: isMobile ? 460 : 520, // ⬅ taller on mobile and desktop
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
      padding: "22px 24px",
      overflowY: "auto",
      maxHeight: isMobile ? 360 : 420, // content scrolls; header stays fixed
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
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      minHeight: isMobile ? 520 : 560, // ⬅ higher so button fits
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
      flex: 1,
      /* scrollable body so sticky button is always visible */
      overflow: "hidden",
    },

    formFieldsArea: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "18px 20px",
      overflowY: "auto",
      /* leave room at the bottom so last field isn't hidden under sticky footer */
      paddingBottom: 90,
      maxHeight: isMobile ? 380 : 420,
    },

    formFooterSticky: {
      position: "sticky",
      bottom: 0,
      left: 0,
      right: 0,
      background: "linear-gradient(180deg, rgba(255,255,255,0.6), #ffffff 40%)",
      padding: "12px 20px 16px",
      borderTop: "1px solid rgba(0,0,0,0.06)",
    },

    inputStyle: {
      padding: "12px 14px",
      border: "1px solid #d6d6d6",
      borderRadius: 10,
      fontSize: 16,
      outline: "none",
      width: "100%",
      background: "#fff",
    },

    textareaStyle: {
      padding: "12px 14px",
      border: "1px solid #d6d6d6",
      borderRadius: 10,
      fontSize: 16,
      minHeight: 110,
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
      boxShadow: "0 8px 16px rgba(255,106,0,0.28)",
      "&:hover": { backgroundColor: "#e85e00" },
    },
  };
};
