import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");
  const cardShadow = "rgba(100, 100, 111, 0.25) 0px 20px 45px 0px";

  if (!matches) {
    // ===== Desktop (>=825px)
    return {
      wrapGridStyle: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      },

      overlayContainer: {
        position: "absolute",
        bottom: "80px",
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingLeft: "70px",
        paddingRight: "70px",
        gap: "30px",
        zIndex: 50,
      },

      // ✅ Contact boxes: shorter height, more width
      contactBoxStyle: {
        position: "relative",
        width: "420px", // wider than before (was 380px)
        borderRadius: "22px",
        backgroundColor: "#fff",
        boxShadow: cardShadow,
        zIndex: 999,
        overflow: "hidden",
      },

      contactHeaderBox: {
        width: "100%",
        height: "80px", // shorter header (was 100px)
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.55)",
        borderTopLeftRadius: "22px",
        borderTopRightRadius: "22px",
        fontSize: "26px",
        color: "#fff",
        fontWeight: 600,
        padding: "18px 25px",
      },

      contactHeaderBoxAccent: {
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f97316",
        borderTopLeftRadius: "22px",
        borderTopRightRadius: "22px",
        fontSize: "26px",
        color: "#fff",
        fontWeight: 600,
        padding: "18px 25px",
      },

      imageIconStyle: { width: "22px", height: "22px" },

      // ✅ Improved padding and spacing inside content box
      contactDataBox: {
        width: "100%",
        padding: "22px 28px 26px 28px", // balanced spacing left/right
      },

      typographyStyles: {
        color: "#3c3c3c",
        fontSize: "17px",
        textAlign: "left",
        marginBottom: "10px",
        wordBreak: "break-word", // prevents overflow of long email addresses
      },
    };
  }

  // ===== Mobile (<825px)
  return {
    wrapGridStyle: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      position: "relative",
      overflow: "hidden",
    },

    overlayContainer: {
      position: "absolute",
      bottom: "60px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
      zIndex: 50,
    },

    contactBoxStyle: {
      position: "relative",
      width: "100%",
      minWidth: "300px",
      borderRadius: "22px",
      backgroundColor: "#fff",
      boxShadow: cardShadow,
      zIndex: 999,
    },

    contactHeaderBox: {
      width: "100%",
      height: "70px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.55)",
      borderTopLeftRadius: "22px",
      borderTopRightRadius: "22px",
      fontSize: "18px",
      color: "#fff",
      fontWeight: 600,
      padding: "16px 20px",
    },

    contactHeaderBoxAccent: {
      width: "100%",
      height: "70px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f97316",
      borderTopLeftRadius: "22px",
      borderTopRightRadius: "22px",
      fontSize: "18px",
      color: "#fff",
      fontWeight: 600,
      padding: "16px 20px",
    },

    imageIconStyle: { width: "18px", height: "18px" },
    contactDataBox: { width: "100%", padding: "18px 20px 20px 20px" },
    typographyStyles: {
      color: "#3c3c3c",
      fontSize: "15px",
      wordBreak: "break-word",
    },
  };
};
