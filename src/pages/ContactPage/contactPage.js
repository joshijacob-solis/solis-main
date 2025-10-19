import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");
  
  const baseStyles = {
    wrapGridStyle: {
      width: "100%",
      height: "100vh",
      display: "flex",
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden",
    },
    contactBoxStyle: {
      position: "absolute",
      width: "fit-content",
      height: "fit-content",
      borderRadius: "20px",
      backgroundColor: "#ffffff",
      zIndex: 999,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    contactHeaderBox: {
      width: "100%",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "#2E7D32",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      color: "#ffffff",
      fontWeight: "600",
      padding: "20px",
    },
    contactDataBox: {
      width: "100%",
      height: "100%",
      padding: "25px",
    },
    imageIconStyle: {
      width: "20px",
      height: "20px",
      flexShrink: 0,
    },
    typographyStyles: {
      color: "#2c3e50",
      textAlign: "left",
      marginBottom: "15px",
      display: "flex",
      alignItems: "flex-start",
    },
    clickableItem: {
      cursor: "pointer",
      padding: "10px 0",
      marginBottom: "15px",
      transition: "all 0.3s ease",
      borderRadius: "8px",
      paddingLeft: "8px",
      marginLeft: "-8px",
      "&:hover": {
        backgroundColor: "#f8f9fa",
        transform: "translateX(4px)",
      },
      display: "flex",
      alignItems: "flex-start",
    },
    addressText: {
      color: "#555",
      fontSize: "14px",
      lineHeight: "1.4",
      marginLeft: "28px",
      marginTop: "5px",
    },
    contactMethods: {
      margin: "20px 0",
    },
    businessHours: {
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      border: "1px solid #e9ecef",
    },
    businessHoursTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#2E7D32",
      marginBottom: "8px",
    },
    businessHoursText: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.4",
    },
  };

  if (!matches) {
    // Desktop styles
    return {
      ...baseStyles,
      contactBoxStyle: {
        ...baseStyles.contactBoxStyle,
        top: "50%",
        left: "8%",
        transform: "translateY(-50%)",
        minWidth: "380px",
        maxWidth: "420px",
      },
      contactHeaderBox: {
        ...baseStyles.contactHeaderBox,
        height: "80px",
        fontSize: "24px",
      },
      typographyStyles: {
        ...baseStyles.typographyStyles,
        fontSize: "16px",
      },
    };
  } else {
    // Mobile styles
    return {
      ...baseStyles,
      contactBoxStyle: {
        ...baseStyles.contactBoxStyle,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: "300px",
        maxWidth: "90vw",
        margin: "0 20px",
      },
      contactHeaderBox: {
        ...baseStyles.contactHeaderBox,
        height: "70px",
        fontSize: "18px",
        padding: "15px 20px",
      },
      contactDataBox: {
        ...baseStyles.contactDataBox,
        padding: "20px",
      },
      typographyStyles: {
        ...baseStyles.typographyStyles,
        fontSize: "14px",
      },
      imageIconStyle: {
        ...baseStyles.imageIconStyle,
        width: "18px",
        height: "18px",
      },
    };
  }
};
