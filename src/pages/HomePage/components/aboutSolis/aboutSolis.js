import { Grid, Box,  } from "@mui/material";
import React from "react";
import image from "../../../../assets/images/bg10.jpg";
import { reasonsToApproach } from "../../../../constants/solisReasons";
import { LongCard } from "../../../../components/Cards/LongCard/longCard";
import { AboutSolisStyles } from "./styles";

function AboutSolis() {
 const aboutSolisStyles=AboutSolisStyles()

  return (
    <Grid sx={aboutSolisStyles.wrapGridStyles}>
      <Box sx={aboutSolisStyles.headerBoxStyle}>Why Solis?</Box>
      <Grid sx={aboutSolisStyles.bottomGrid}>
        <Grid sx={aboutSolisStyles.reasonWrapGrid}>
          <Grid sx={aboutSolisStyles.reasonSubGrid}>
            {reasonsToApproach.map((item, index) => {
              return (
                <Box key={index} sx={aboutSolisStyles.reasonBoxStyle}>
                  <LongCard
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                    index={index}
                  />
                </Box>
              );
            })}
          </Grid>
        </Grid>
        <Box sx={aboutSolisStyles.reasonImageBoxStyle}>
          <img src={image} alt="about-solis-img" style={{...aboutSolisStyles.imageStyle, objectFit:"fill"}} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default AboutSolis;
