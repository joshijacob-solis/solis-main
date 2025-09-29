import { Grid, Box } from "@mui/material";
import { ProjectCardStyles } from "./styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReadMore } from "../../../utils/readMore/readMore";

export const ProjectCard = (props) => {
  const projectCardStyles= ProjectCardStyles()
  
const matches = useMediaQuery('(max-width:825px)');
  return (
    <Grid
      sx={{
        ...projectCardStyles.wrapgridStyles,
        flexDirection: matches?"column":props.index % 2 === 0 ? "row" : "row-reverse",
      }}
    >
      <Box sx={projectCardStyles.imageBoxStyle}>
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
          width="100%"
          height={matches?"fit-content":"100%"}
          style={{ objectFit: "cover", borderRadius:matches?"10px 10px 0px 0px":"10px" }}
        />
      </Box>
      <Box sx={projectCardStyles.contentBoxStyle}>
        <Box sx={projectCardStyles.titleBoxStyle}>{props.title}</Box>
        <Box sx={projectCardStyles.descBoxStyle}>
          {matches?<ReadMore>
          {props.desc
          }</ReadMore>:props.desc}
          </Box>
      </Box>
    </Grid>
  );
};
