import React from "react";
import CarouselMini from "../../../../components/3DCarousel/CarouselMini";
import { Box, Grid } from "@mui/material";
import SolidButton from "../../../../components/Buttons/SolidButton";
import { useNavigate } from "react-router-dom";
import { MiniCarouselStyles } from "./styles";

function MiniCarousel() {
  const navi = useNavigate();
  const miniCarouselStyles=MiniCarouselStyles()
  return (
    <Grid style={miniCarouselStyles.wrapGridStyles}>
      <Box sx={miniCarouselStyles.headingBoxStyles}>How we do it.</Box>
      <Box sx={miniCarouselStyles.carouselBoxStyles}>
        <CarouselMini />
      </Box>
      <Box sx={miniCarouselStyles.buttonBoxStyles}>
        <SolidButton
          onClick={() => navi("/services")}
          texttoprint="Read More"
        />
      </Box>
    </Grid>
  );
}

export default MiniCarousel;
