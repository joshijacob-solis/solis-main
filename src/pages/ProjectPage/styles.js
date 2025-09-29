import { useMediaQuery } from "@mui/material";

export const ProjectPageStyles = () => {
  const matches = useMediaQuery("(max-width:768px)");
  return !matches
    ? {
        wrapGridStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "140px 0px",
          rowGap: "50px",
        },
        headerBoxStyle: {
          color: "#3c3c3c",
          fontSize: "60px",
          fontWeight: "900",
          width: "100%",
          textAlign: "center",
        },
        projectDescBoxStyle: {
          width: "100%",
          textAlign: "justify",
          padding: "0px 100px",
        },
        serviceBoxStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px",
          rowGap: "50px",
        },
        projectWorksBoxStyle: {
          color: "#3c3c3c",
          fontSize: "60px",
          fontWeight: "900",
          width: "100%",
          textAlign: "center",
        },
        multiCarouselBoxStyle: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        readMoreBtnBoxStyle: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
      }
    : {
        wrapGridStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "100px 0px",
          rowGap: "0px",
        },
        headerBoxStyle: {
          color: "#3c3c3c",
          fontSize: "30px",
          fontWeight: "600",
          width: "100%",
          textAlign: "center",
        },
        projectDescBoxStyle: {
          width: "100%",
          textAlign: "justify",
          padding: "20px",
        },
        serviceBoxStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          rowGap: "50px",
        },
        projectWorksBoxStyle: {
          color: "#3c3c3c",
          fontSize: "30px",
          fontWeight: "600",
          width: "100%",
          textAlign: "center",
          marginTop:"20px"
        },
        multiCarouselBoxStyle: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        readMoreBtnBoxStyle: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
      };
};
