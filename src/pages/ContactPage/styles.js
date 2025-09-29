import { useMediaQuery } from "@mui/material";

export const ContactPageStyles = () => {
  const matches = useMediaQuery("(max-width:825px)");
  return !matches
    ? {
        wrapGridStyle: {
          width: "100%",
          height: "100vh",
          display: "flex",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "border-box",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
        },
        contactBoxStyle: {
          position: "absolute",
          width: "fit-content",
          height: "fit-content",
          top: "30%",
          left: "5%",
          borderRadius: "30px",
          backgroundColor: "#fff",
          zIndex:999,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
        },
        contactHeaderBox: {
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          fontSize: "30px",
          color: "#fff",
          fontWeight: "600",
          padding: "20px",
        },imageIconStyle:{
          width: "25px", height: "25px" 
        },
        contactDataBox: { width: "100%", height: "100%", padding: "30px" },
        typographyStyles:{
            color:"#3c3c3c",
            fontSize:"18px",
            textAlign:"left",
            marginBottom:"10px"
           
        }
      }
    : {wrapGridStyle: {
        width: "100%",
        height: "100vh",
        display: "flex",
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      },
      contactBoxStyle: {
        position: "absolute",
        width: "fit-content",
        minWidth:"290px",
        height: "fit-content",
        top: "50%",
        left: "50%",
        transform:"translate(-50%,-50%)",
        borderRadius: "30px",
        backgroundColor: "#fff",
        zIndex:999,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
      },
      contactHeaderBox: {
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        fontSize: "16px",
        color: "#fff",
        fontWeight: "600",
        padding: "20px",
      },
      imageIconStyle:{
        width: "15px", height: "15px" 
      },
      contactDataBox: { width: "100%", height: "100%", padding: "15px" },
      typographyStyles:{
          color:"#3c3c3c",
          fontSize:"14px"
      }};
};
