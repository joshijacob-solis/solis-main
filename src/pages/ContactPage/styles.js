import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");

  return {
    wrapGridStyle: {
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    containerGrid: {
      position: "absolute",
      bottom: "5%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: matches ? "column" : "row",
      gap: "30px",
      width: matches ? "95%" : "85%",
      justifyContent: "space-between",
      zIndex: 999,
    },

    /* Left - Contact Box */
    contactBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: matches ? "100%" : "45%",
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },

    contactHeaderBox: {
      backgroundColor: "#5c5c5c",
      color: "#fff",
      fontSize: matches ? "20px" : "26px",
      fontWeight: 600,
      padding: "15px 20px",
    },

    contactDataBox: {
      padding: "25px 30px",
    },

    imageIconStyle: {
      width: matches ? "18px" : "22px",
      height: matches ? "18px" : "22px",
    },

    typographyStyles: {
      color: "#3c3c3c",
      fontSize: matches ? "14px" : "17px",
      marginBottom: "10px",
    },

    /* Right - Form Box */
    formBoxStyle: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      width: matches ? "100%" : "45%",
      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      minHeight: matches ? "auto" : "480px",
    },

    formHeaderBox: {
      backgroundColor: "#ff6600",
      color: "#fff",
      fontWeight: 700,
      fontSize: matches ? "18px" : "22px",
      padding: "15px 20px",
    },

    formBodyBox: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "25px 30px",
    },

    inputStyle: {
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },

    textareaStyle: {
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      minHeight: "100px",
      resize: "vertical",
      outline: "none",
    },

    submitButtonStyle: {
      backgroundColor: "#ff6600",
      color: "#fff",
      fontWeight: 600,
      fontSize: "16px",
      textTransform: "none",
      padding: "12px 0",
      borderRadius: "8px",
      marginTop: "10px",
      "&:hover": {
        backgroundColor: "#e25500",
      },
    },
  };
};
