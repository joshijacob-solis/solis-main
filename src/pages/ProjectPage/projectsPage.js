import { Box, Grid, useMediaQuery } from "@mui/material";
import { servicesArray } from "../../constants/servicesProvided";
import { ProjectCard } from "../../components/Cards/ProjectCard/projectCard";
import { MultiCarousel } from "../../components/MultiCarousel/multiCarousel";
import { projectImagesList } from "../../constants/imageAlbum";
import SolidButton from "../../components/Buttons/SolidButton";
import { useNavigate } from "react-router-dom";
import { ProjectPageStyles } from "./styles";
import { ReadMore } from "../../utils/readMore/readMore";
import { projectDescription } from "../../constants/titleDescriptions";

export const ProjetsPage = () => {
  
  const matches = useMediaQuery("(max-width:768px)");
  const projectPageStyle = ProjectPageStyles();
  const navi = useNavigate();
  return (
    <Grid sx={projectPageStyle.wrapGridStyle}>
      <Box sx={projectPageStyle.headerBoxStyle}>Projects</Box>
      <Box sx={projectPageStyle.projectDescBoxStyle}>
        {matches?<ReadMore>
          {projectDescription}
        </ReadMore>:projectDescription}
      </Box>
      <Box sx={projectPageStyle.serviceBoxStyle}>
        {servicesArray.map((service, index) => {
          return (
            <Box key={index}><ProjectCard
              title={service.title}
              image={service.image}
              desc={service.desc}
              index={index}
            /></Box>
          );
        })}
      </Box>
      <Box sx={projectPageStyle.projectWorksBoxStyle}>Our Works</Box>
      <Box sx={projectPageStyle.multiCarouselBoxStyle}>
        <MultiCarousel
          data={projectImagesList.slice(0, 5).map((item,index) => {
            return (
              <Box key={index}><img
                src={item.image}
                key={index}
                alt={item.id}
                width="100%"
                height="400px"
                style={{ objectFit: "cover", padding:"10px" }}
              /></Box>
            );
          })}
          itemClass="multiItemClass"
        />
      </Box>
      <Box sx={projectPageStyle.readMoreBtnBoxStyle}>
        <SolidButton onClick={() => navi("/gallery")} texttoprint="View More" />
      </Box>
    </Grid>
  );
};
