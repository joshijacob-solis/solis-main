export const ContactPageStyles = () => {
  return {
    // outermost grid wrapper
    wrapGridStyle: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      paddingBottom: 40,
      boxSizing: "border-box",
      background: "transparent",
    },

    // inner container: 3 columns (left card, map, right form)
    containerGrid: {
      width: "92%",
      maxWidth: 1400,
      display: "grid",
      gridTemplateColumns: "330px 1fr 330px", // fixed side cards + fluid map
      gap: 28,
      alignItems: "stretch", // ensures equal height columns
      boxSizing: "border-box",
      margin: "18px auto",

      // responsive: stack into single column on small screens
      "@media (max-width:825px)": {
        gridTemplateColumns: "1fr",
        padding: "0 12px",
        gap: 18,
      },
    },

    /* ===== Left Contact Info Box ===== */
    contactBoxStyle: {
      background: "#ffffff",
      borderRadius: 12,
      minHeight: 760,              // <-- taller card
      maxHeight: "90vh",
      overflowY: "auto",
      boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      padding: 0,
    },

    headerBox: {
      background: "#666",
      color: "#fff",
      fontSize: 20,
      fontWeight: 700,
      padding: "18px 20px",
      borderRadius: "12px 12px 0 0",
    },

    bodyBox: {
      padding: 20,
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      boxSizing: "border-box",
    },

    typographyStyles: {
      color: "#111",
      fontSize: 15,
      lineHeight: 1.6,
      marginBottom: 6,
    },

    imageIconStyle: {
      width: 20,
      height: 20,
      verticalAlign: "middle",
      display: "inline-block",
    },

    businessHoursBox: {
      marginTop: 12,
      background: "rgba(0,0,0,0.03)",
      padding: 12,
      borderRadius: 8,
      width: "100%",
    },

    businessHoursTitle: {
      fontWeight: 700,
      fontSize: 14,
      marginBottom: 6,
    },

    businessHoursText: {
      fontSize: 13,
      color: "text.secondary",
      lineHeight: 1.5,
    },

    /* ===== Center Map Box ===== */
    mapBoxStyle: {
      background: "transparent",
      borderRadius: 12,
      minHeight: 760,        // <-- make the map taller to match cards
      maxHeight: "90vh",
      overflow: "hidden",
      boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      padding: 0,
      boxSizing: "border-box",
    },

    // the inner container around the MapContainer (keeps header + map)
    mapContainer: {
      flex: "1 1 auto",
      height: "100%",         // MapContainer (Leaflet) styled to 100% height
      minHeight: 760,
      borderRadius: "0 12px 12px 0",
      overflow: "hidden",
      boxSizing: "border-box",

      // ensure Leaflet takes full height; the MapContainer inline style in your component will keep it full
      "& .leaflet-container": {
        height: "100% !important",
        width: "100% !important",
      },
    },

    /* ===== Right Form Box ===== */
    formBoxStyle: {
      background: "#fff",
      borderRadius: 12,
      minHeight: 760,      // <-- match height of left card & map
      maxHeight: "90vh",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
      padding: 0,
      boxSizing: "border-box",
    },

    headerBoxOrange: {
      background: "#ff6a00",
      color: "#fff",
      fontSize: 20,
      fontWeight: 700,
      padding: "18px 20px",
      borderRadius: "12px 12px 0 0",
    },

    formBodyBox: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      boxSizing: "border-box",
      flex: "1 1 auto",
    },

    inputStyle: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 8,
      border: "1px solid rgba(0,0,0,0.12)",
      fontSize: 15,
      boxSizing: "border-box",
      outline: "none",
      "::placeholder": { color: "rgba(0,0,0,0.4)" },
    },

    selectStyle: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 8,
      border: "1px solid rgba(0,0,0,0.12)",
      fontSize: 15,
      boxSizing: "border-box",
      background: "#fff",
    },

    textareaStyle: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 8,
      border: "1px solid rgba(0,0,0,0.12)",
      fontSize: 15,
      resize: "vertical",
      minHeight: 110,
      boxSizing: "border-box",
    },

    submitButtonStyle: {
      marginTop: 6,
      padding: "12px 14px",
      borderRadius: 8,
      backgroundColor: "#ff6a00",
      color: "#fff",
      fontWeight: 700,
      "&:hover": { backgroundColor: "#e65a00" },
    },

    /* ===== Responsive adjustments (mobile) ===== */
    // Note: these override minHeight to prevent overwhelming small screens
    "@media (max-width:825px)": {
      contactBoxStyle: {
        minHeight: 420,
        maxHeight: "none",
      },
      mapBoxStyle: {
        minHeight: 420,
        maxHeight: "none",
      },
      formBoxStyle: {
        minHeight: 420,
        maxHeight: "none",
      },
      mapContainer: {
        minHeight: 420,
      },
    },

    // optional tiny-screen tweak
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
