import { useMediaQuery } from "@mui/material";

export const MiniCarouselStyles = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return {
    wrapGridStyles: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    headingBoxStyles: {
      color: "#3c3c3c",
      fontSize: matches ? "30px" : "80px",
      fontWeight: "900",
      width: "100%",
      textAlign: "center",
      marginTop: "70px",
    },
    carouselBoxStyles: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-100px",
      position: "relative",
    },
    buttonBoxStyles: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-100px",
    },
  };
};
