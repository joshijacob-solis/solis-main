
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProjectCardStyles=()=>{
  
const matches = useMediaQuery('(max-width:825px)');
 return !matches?{
  wrapgridStyles: {
    backgroundColor: "#fff",
    width: "100%",
    height: "fit-content",
    borderRadius: "10px",
    display: "flex",
    padding: "40px 40px",
    justifyContent: "center",
    alignItems: "start",
    columnGap: "20px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
  },
  imageBoxStyle: {
    width: "300px",
    height: "300px",
    borderRadius: "30px",
  },
  contentBoxStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    rowGap:"30px"
  },
  titleBoxStyle: {
    fontSize: "38px",
    fontWeight: "600",
  },
  descBoxStyle:{
    textAlign:"justify",
    fontSize:"18px"
  }
}:{
  wrapgridStyles: {
    backgroundColor: "#fff",
    width: "100%",
    height: "fit-content",
    borderRadius: "10px",
    display: "flex",
    padding: "0px",
    justifyContent: "center",
    flexDirection:"column",
    alignItems: "center",
    columnGap: "20px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
  },
  imageBoxStyle: {
    width: "100%",
    height: "50%",
    borderRadius: "20px",
  },
  contentBoxStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding:"20px"
  },
  titleBoxStyle: {
    fontSize: "28",
    fontWeight: "600",
  },
  descBoxStyle:{
    textAlign:"justify"
  }
}
}
