import { useMediaQuery } from "@mui/material";

export const ServicePageStyles = () => {
  const matches = useMediaQuery("(max-width:768px)");
  return !matches
    ? {
        wrapGridStyle: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0",
          margin: "140px 0px",
          rowGap: "50px",
        },
        headerBoxStyle: {
          color: "#3c3c3c",
          fontSize: "60px",
          fontWeight: "900",
          textAlign: "center",
        },
        installBoxStyle: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0px 100px",
          rowGap: "50px",
        },
      }
    : {wrapGridStyle: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0",
        margin: "100px 0px",
        rowGap: "0px",
      },
      headerBoxStyle: {
        color: "#3c3c3c",
        fontSize: "30px",
        fontWeight: "600",
        textAlign: "center",
      },
      installBoxStyle: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        rowGap: "30px",
      },};
};
