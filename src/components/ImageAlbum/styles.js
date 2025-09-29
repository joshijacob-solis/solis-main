import { useMediaQuery } from "@mui/material";

export const ImageAlbumStyles = () => {
  const matches = useMediaQuery("(max-width:768px)");
  return !matches
    ? {
        wrapGridStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px",
          margin: "100px 0px",
        },
        headerBoxStyle: {
          color: "#3c3c3c",
          fontSize: "60px",
          fontWeight: "900",
          width: "100%",
          textAlign: "center",
        },
        imageListStyle: { width: "100%", height: "100%" },
      }
    : {
        wrapGridStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          margin: "100px 0px",
        },
        headerBoxStyle: {
          color: "#3c3c3c",
          fontSize: "30px",
          fontWeight: "600",
          width: "100%",
          textAlign: "center",
        },
        imageListStyle: { width: "100%", height: "100%" },
      };
};
