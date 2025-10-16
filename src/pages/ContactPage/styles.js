import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");

  return !matches
    ? {
        // ===== Desktop (>=825px) =====
        wrapGridStyle: {
          width: "100%",
          minHeight: "100vh",
          height: "auto",
          display: "flex",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "border-box",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        },

        // Move the boxes near bottom (above footer)
        overlayContainer: {
          position: "absolute",
          bottom: "80px", // ⬅ push it near footer, adjust to your preference
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
          zIndex: 50,
        },

        contactBoxStyle: {
          position: "relative",
          width: "100%",
          height: "fit-content",
          borderRadius: "30px",
          backgroundColor: "#fff",
          zIndex: 999,
          boxShadow: "rgba(100, 100, 111, 0.3) 0px 25px 50px 0px",
        },

        contactHeaderBox: {
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          fontSize: "30px",
          color: "#fff",
          fontWeight: "600",
          padding: "20px",
        },

        contactHeaderBoxAccent: {
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f97316", // Accent color for form header
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          fontSize: "30px",
          color: "#fff",
          fontWeight: "600",
          padding: "20px",
        },

        imageIconStyle: { width: "25px", height: "25px" },
        contactDataBox: { width: "100%", height: "100%", padding: "30px" },
        typographyStyles: {
          color: "#3c3c3c",
          fontSize: "18px",
          textAlign: "left",
          marginBottom: "10px",
        },
      }
    : {
        // ===== Mobile (<825px) =====
        wrapGridStyle: {
          width: "100%",
          minHeight: "100vh",
          height: "auto",
          display: "flex",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "border-box",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        },

        overlayContainer: {
          position: "absolute",
          bottom: "40px", // ⬅ near footer for mobile view
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          zIndex: 50,
        },

        contactBoxStyle: {
          position: "relative",
          width: "100%",
          minWidth: "290px",
          height: "fit-content",
          borderRadius: "30px",
          backgroundColor: "#fff",
          zIndex: 999,
          boxShadow: "rgba(100, 100, 111, 0.3) 0px 25px 50px 0px",
        },

        contactHeaderBox: {
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          fontSize: "16px",
          color: "#fff",
          fontWeight: "600",
          padding: "20px",
        },

        contactHeaderBoxAccent: {
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f97316",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          fontSize: "16px",
          color: "#fff",
          fontWeight: "600",
          padding: "20px",
        },

        imageIconStyle: { width: "15px", height: "15px" },
        contactDataBox: { width: "100%", height: "100%", padding: "15px" },
        typographyStyles: { color: "#3c3c3c", fontSize: "14px" },
      };
};
