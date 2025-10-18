// ContactPageStyles.js
import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const isMobile = useMediaQuery("(max-width:825px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  // Dynamic heights (kept relative; actual enforced by inline overrides in component)
  const CONTACT_HEIGHT = isMobile ? "auto" : "820px";
  const MAP_HEIGHT = isMobile ? "420px" : "900px";
  const FORM_HEIGHT = isMobile ? "auto" : "820px";

  const colors = {
    primary: "#ff6a00",
    primaryHover: "#e85e00",
    secondary: "#5c5c5c",
    text: "#333",
    textLight: "#666",
    border: "#ddd",
    background: "#fafafa",
    white: "#fff",
  };

  const hoverEffect = {
    transform: "translateY(-8px)",
    boxShadow: "0 16px 30px rgba(0,0,0,0.25)",
    transition: "all 0.3s ease-in-out",
  };

  const focusStyle = {
    outline: "none",
    borderColor: colors.primary,
    boxShadow: `0 0 0 3px ${colors.primary}20`,
  };

  return {
    wrapGridStyle: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
      padding: isMobile ? "20px 0" : "50px 0",
    },

    containerGrid: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "95%" : isTablet ? "92%" : "88%",
      maxWidth: "1500px",
      justifyContent: "space-between",
      alignItems: "stretch",
      gap: isMobile ? "18px" : "26px",
      flexWrap: "nowrap",
    },

    headerBox: {
      backgroundColor: colors.secondary,
      color: colors.white,
      fontWeight: 700,
      fontSize: isMobile ? "18px" : "20px",
      padding: isMobile ? "12px 16px" : "14px 20px",
      borderRadius: "20px 20px 0 0",
      textAlign: "center",
    },
    headerBoxOrange: {
      backgroundColor: colors.primary,
      color: colors.white,
      fontWeight: 700,
      fontSize: isMobile ? "18px" : "20px",
      padding: isMobile ? "12px 16px" : "14px 20px",
      borderRadius: "20px 20px 0 0",
      textAlign: "center",
    },

    contactBoxStyle: {
      backgroundColor: colors.white,
      borderRadius: "20px",
      width: isMobile ? "100%" : isTablet ? "34%" : "30%",
      height: CONTACT_HEIGHT,
      minHeight: isMobile ? "500px" : "auto",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": !isMobile && hoverEffect,
    },
    bodyBox: {
      padding: isMobile ? "20px" : "24px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    typographyStyles: {
      fontSize: isMobile ? "14px" : "15px",
      color: colors.text,
      display: "flex",
      alignItems: "flex-start",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      lineHeight: 1.5,
      "&:hover": {
        color: colors.primary,
        transform: "translateX(4px)",
      },
    },
    imageIconStyle: {
      width: isMobile ? "18px" : "20px",
      height: isMobile ? "18px" : "20px",
      marginRight: "8px",
      flexShrink: 0,
      marginTop: "2px",
    },

    mapBoxStyle: {
      backgroundColor: "transparent",
      borderRadius: "20px",
      width: isMobile ? "100%" : isTablet ? "32%" : "40%",
      height: MAP_HEIGHT,
      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": !isMobile && hoverEffect,
      order: isMobile ? 1 : 2,
      alignItems: "stretch",
    },
    mapContainer: {
      flex: 1,
      height: "100%",
      width: "100%",
      borderRadius: "0 0 20px 20px",
      overflow: "hidden",
      boxSizing: "border-box",
      "& .leaflet-container": {
        height: "100% !important",
        width: "100% !important",
      },
    },

    formBoxStyle: {
      backgroundColor: colors.white,
      borderRadius: "20px",
      width: isMobile ? "100%" : isTablet ? "34%" : "30%",
      height: FORM_HEIGHT,
      minHeight: isMobile ? "500px" : "auto",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": !isMobile && hoverEffect,
      order: isMobile ? 2 : 3,
    },
    formBodyBox: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: isMobile ? "20px" : "24px",
      flex: 1,
    },

    inputStyle: {
      padding: "12px 14px",
      border: `1px solid ${colors.border}`,
      borderRadius: "10px",
      fontSize: isMobile ? "14px" : "15px",
      outline: "none",
      width: "100%",
      transition: "all 0.2s ease-in-out",
      backgroundColor: colors.background,
      "&:focus": focusStyle,
      "&::placeholder": {
        color: colors.textLight,
        fontSize: isMobile ? "13px" : "14px",
      },
    },
    textareaStyle: {
      padding: "12px 14px",
      border: `1px solid ${colors.border}`,
      borderRadius: "10px",
      fontSize: isMobile ? "14px" : "15px",
      outline: "none",
      width: "100%",
      minHeight: "140px",
      resize: "vertical",
      transition: "all 0.2s ease-in-out",
      backgroundColor: colors.background,
      fontFamily: "inherit",
      "&:focus": focusStyle,
      "&::placeholder": {
        color: colors.textLight,
        fontSize: isMobile ? "13px" : "14px",
      },
    },
    selectStyle: {
      padding: "12px 14px",
      border: `1px solid ${colors.border}`,
      borderRadius: "10px",
      fontSize: isMobile ? "14px" : "15px",
      outline: "none",
      width: "100%",
      transition: "all 0.2s ease-in-out",
      backgroundColor: colors.background,
      cursor: "pointer",
      "&:focus": focusStyle,
    },
    submitButtonStyle: {
      backgroundColor: colors.primary,
      color: colors.white,
      fontWeight: "bold",
      fontSize: isMobile ? "15px" : "16px",
      padding: "14px",
      borderRadius: "10px",
      textTransform: "none",
      boxShadow: "0 6px 16px rgba(255,106,0,0.3)",
      transition: "all 0.3s ease-in-out",
      marginTop: "8px",
      "&:hover": {
        backgroundColor: colors.primaryHover,
        transform: "translateY(-3px)",
        boxShadow: "0 10px 24px rgba(255,106,0,0.4)",
      },
      "&:active": {
        transform: "translateY(-1px)",
      },
    },

    businessHoursBox: {
      padding: "16px",
      backgroundColor: `${colors.background}80`,
      borderRadius: "10px",
      border: `1px solid ${colors.border}40`,
      marginTop: "8px",
    },
    businessHoursTitle: {
      fontWeight: 700,
      fontSize: "14px",
      color: colors.text,
      marginBottom: "8px",
    },
    businessHoursText: {
      fontSize: "13px",
      color: colors.textLight,
      lineHeight: 1.6,
    },

    "@media (max-width:825px)": {
      contactBoxStyle: {
        height: "auto",
        minHeight: "480px",
      },
      mapBoxStyle: {
        height: "420px",
        minHeight: "420px",
      },
      formBoxStyle: {
        height: "auto",
        minHeight: "480px",
      },
    },

    "@media (max-width:420px)": {
      containerGrid: {
        width: "96%",
        gap: 12,
      },
      headerBox: { fontSize: 18 },
      headerBoxOrange: { fontSize: 18 },
      inputStyle: { fontSize: 14 },
    },
  };
};
