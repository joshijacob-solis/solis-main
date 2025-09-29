import { useMediaQuery } from "@mui/material";

export const AboutSolarStyles=()=>{
  
  const matches = useMediaQuery("(max-width:825px)");
    return !matches?{ wrapGridStyles : {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "50px",
        padding: "5% 10%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "1s", 
      },
       subGridStyles : {
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        columnGap: "15%",
      },
       miniGridStyles : {
        backgroundColor: "#fff",
        width: "33%",
        height: "fit-content",
        minHeight:"220px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "start",
        alignItems: "center",
        padding: "20px",
        rowGap: "0px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
      },
       bottomGrid : {
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        columnGap: "5%",
      },
       reasonWrapGrid : {
        backgroundColor: "transparent",
        width: "70%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        columnGap: "5%",
      },
       reasonSubGrid : {
        backgroundColor: "transparent",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      },
       headerBoxStyle : {
        color: "#3c3c3c",
        fontSize: "80px",
        fontWeight: "900",
        textAlign:"center"
      },
       statBoxStyle : {
        color: "#00AA00",
        fontSize: "2rem",
        fontWeight: "900",
        width:"fit-content",
        height:"fit-content",
        padding:"20px"
      },
       dataBoxStyle : {
        color: "#000",
        fontSize: "18px",
      },
       reasonBoxStyle : {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "start",
        columnGap: "5%",
        marginBottom:"20px"
      },
       reasonImageBoxStyle : {
        width: "30%",
        height: "100%",
        backgroundColor:"transparent"
      },
       reasonIconBoxStyle : {
        backgroundColor: "transparent",
        
      },
       reasonDataStyle:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        rowGap:"10px"
      },
       imageStyle : {
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 20px 77px 29px 0px",
      },
       reasonImageStyle : {
        width: "75px",
        height: "75px",
        borderRadius: "20px",
    
      },}:{ wrapGridStyles : {
        backgroundColor: "#fff",
        // width: "100%",
        height: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "50px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "1s", 
        margin:"80px 0px 0px 0px",
        padding:"0px 10px"

      },
       subGridStyles : {
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        rowGap: "20px",
      },
       miniGridStyles : {
        backgroundColor: "#fff",
        width: "100%",
        height: "fit-content",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        rowGap: "20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
      },
       bottomGrid : {
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        rowGap:"20px"
      },
       reasonWrapGrid : {
        backgroundColor: "transparent",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        rowGap: "20px",
      },
       reasonSubGrid : {
        backgroundColor: "transparent",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      },
       headerBoxStyle : {
        color: "#3c3c3c",
        fontSize: "40px",
        fontWeight: "900",
      },
       statBoxStyle : {
        color: "#00AA00",
        fontSize: "2rem",
        fontWeight: "900",
        width:"fit-content",
        height:"fit-content",
        padding:"20px"
      },
       dataBoxStyle : {
        color: "#000",
        fontSize: "18px",
      },
       reasonBoxStyle : {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "start",
        columnGap: "5%",
        marginBottom:"20px"
      },
       reasonImageBoxStyle : {
        width: "100%",
        height: "100%",
        backgroundColor:"transparent"
      },
       reasonIconBoxStyle : {
        backgroundColor: "transparent",
        
      },
       reasonDataStyle:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        rowGap:"10px"
      },
       imageStyle : {
        width: "100%",
        height: "100%",
        borderRadius: "20px 20px 0px 0px",
        boxShadow: "rgba(100, 100, 111, 0.2) 20px 77px 29px 0px",
      },
       reasonImageStyle : {
        width: "75px",
        height: "75px",
        borderRadius: "20px",
    
      },}
}
