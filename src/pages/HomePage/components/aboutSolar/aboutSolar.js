import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import image from "../../../../assets/images/bg5.jpg";
import { solarReasons } from "../../../../constants/solarReasons";
import { AboutSolarStyles } from "./styles";

function AboutSolar() {
  const aboutSolarStyles = AboutSolarStyles();
  return (
    <Grid sx={aboutSolarStyles.wrapGridStyles}>
      <Box sx={aboutSolarStyles.headerBoxStyle}>Why Solar?</Box>
      <Grid sx={aboutSolarStyles.subGridStyles}>
        <Grid sx={aboutSolarStyles.miniGridStyles}>
          <Box sx={aboutSolarStyles.statBoxStyle}>
            <CountUp
              start={3500}
              end={4000}
              duration={2}
              delay={1}
              enableScrollSpy={true}
              useEasing={true}
            />{" "}
            Kg of CO2/year
          </Box>
          <Box sx={aboutSolarStyles.dataBoxStyle}>
            Offset with a typical residential solar panel system
          </Box>
        </Grid>
        <Grid sx={aboutSolarStyles.miniGridStyles}>
          <Box sx={aboutSolarStyles.statBoxStyle}>
            €{" "}
            <CountUp
              start={600}
              end={760}
              duration={2}
              delay={1}
              enableScrollSpy={true}
              useEasing={true}
            />{" "}
            /year
          </Box>
          <Box sx={aboutSolarStyles.dataBoxStyle}>savings on 5KW system</Box>
        </Grid>

        <Grid sx={aboutSolarStyles.miniGridStyles}>
          <Box sx={aboutSolarStyles.statBoxStyle}>
            €{" "}
            <CountUp
              start={0}
              end={5}
              duration={2}
              delay={1}
              enableScrollSpy={true}
              decimals
              useEasing={true}
            />
            KW PV system
          </Box>
          <Box sx={aboutSolarStyles.dataBoxStyle}>
            are equivalent to planting 88 trees per year
          </Box>
        </Grid>
      </Grid>
      <Grid sx={aboutSolarStyles.bottomGrid}>
        <Box sx={aboutSolarStyles.reasonImageBoxStyle}>
          <img src={image} alt="about-solar-img" style={aboutSolarStyles.imageStyle} />
        </Box>

        <Grid sx={aboutSolarStyles.reasonWrapGrid}>
          <Grid sx={aboutSolarStyles.reasonSubGrid}>
            {solarReasons.slice(0, 4).map((item, index) => {
              return (
                <Box sx={aboutSolarStyles.reasonBoxStyle}key={index}>
                  <Box sx={aboutSolarStyles.reasonIconBoxStyle}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={aboutSolarStyles.reasonImageStyle}
                    />
                  </Box>
                  <Box sx={aboutSolarStyles.reasonDataStyle}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <Grid sx={aboutSolarStyles.reasonSubGrid}>
            {solarReasons.slice(-4).map((item,index) => {
              return (
                <Box sx={aboutSolarStyles.reasonBoxStyle} key={index} >
                  <Box>
                    <img
                    alt={item.title}
                      src={item.image}
                      style={aboutSolarStyles.reasonImageStyle}
                    />
                  </Box>
                  <Box sx={aboutSolarStyles.reasonDataStyle}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutSolar;
