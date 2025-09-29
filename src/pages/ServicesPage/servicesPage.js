import { Box, Grid } from "@mui/material";
import { ProjectCard } from "../../components/Cards/ProjectCard/projectCard";
import { solarInstallationApproach } from "../../constants/installationDetailed";
import { ServicePageStyles } from "./styles";

export const ServicesPage = () => {
  const servicePageStyles = ServicePageStyles();
  return (
    <Grid sx={servicePageStyles.wrapGridStyle}>
      <Box sx={servicePageStyles.headerBoxStyle}>Services</Box>
      <Box sx={servicePageStyles.installBoxStyle}>
        {solarInstallationApproach.map((service, index) => {
          return (
           <Box key={index}> <ProjectCard
              title={service.title}
              image={service.image}
              desc={service.desc}
              index={index}
            /></Box>
          );
        })}
      </Box>
    </Grid>
  );
};
