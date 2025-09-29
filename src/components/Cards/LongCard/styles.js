import useMediaQuery from "@mui/material/useMediaQuery";

export const LongCardStyles = () => {
  const matches = useMediaQuery("(max-width:768px)");
  return !matches
    ? {
        wrapgridStyles: {
          backgroundColor: "#fff",
          width: "100%",
          height: "fit-content",
          borderRadius: "10px",
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "20px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
        },
        imageBoxStyle: {
          width: "100px",
          height: "100px",
          borderRadius: "10px",
        },
        contentBoxStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        },
        titleBoxStyle: {
          fontSize: "24px",
          fontWeight: "600",
        },
      }
    : {
        wrapgridStyles: {
          backgroundColor: "#fff",
          width: "100%",
          height: "fit-content",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "20px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
        },
        imageBoxStyle: {
          width: "100%",
          height: "auto",
          borderRadius: "10px",
        },
        contentBoxStyle: {
          width: "100%",
          height: "fit-content",
          display: "flex",
          padding: "20px 20px",
          flexDirection: "column",
          justifyContent: "start",
        },
        titleBoxStyle: {
          fontSize: "24px",
          fontWeight: "600",
        },
      };
};
