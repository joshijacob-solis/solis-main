import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");
  const cardShadow = "rgba(100, 100, 111, 0.28) 0px 25px 50px 0px";

  return !matches
    ? {
        // ===== Desktop (>=825px) =====
        wrapGridStyle: {
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        },

        // Whole overlay holds both boxes
        overlayContainer: {
          position: "absolute",
          bottom: "80px", // distance from footer
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between", // ⬅️ left & right alignment
          padding: "0 80px", // inner margin from both sides
          zIndex: 50,
        },

        // Shared box style
        contactBoxStyle: {
          position: "relative",
          width: "380px",
          borderRadius: "30px",
          backgroundColor: "#fff",
          boxShadow: cardShadow,
          zIndex: 999,
        },

        // Left: Contact Us header
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
          fontWeight: 600,
          padding: "20px",
        },

        // Right: Form header
        contactHeaderBoxAccent: {
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f97316", // Accent color
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          fontSize: "30px",
          color: "#fff",
          fontWeight: 600,
          padding: "20px",
        },

        imageIconStyle: { width: "25px", height: "25px" },
        contactDataBox: { width: "100%", padding: "30px" },
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
          display: "flex",
          position: "relative",
          overflow: "hidden",
        },

        // On mobile, stack vertically and center
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
          minWidth: "290px",
          borderRadius: "30px",
          backgroundColor: "#fff",
          boxShadow: cardShadow,
          zIndex: 999,
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
          fontWeight: 600,
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
          fontWeight: 600,
          padding: "20px",
        },

        imageIconStyle: { width: "15px", height: "15px" },
        contactDataBox: { width: "100%", padding: "15px" },
        typographyStyles: { color: "#3c3c3c", fontSize: "14px" },
      };
};
