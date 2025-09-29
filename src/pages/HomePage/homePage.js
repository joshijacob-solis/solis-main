import "./homePage.css";
import MiniCarousel from "./components/miniCarouse/miniCarousel";
import AboutSolar from "./components/aboutSolar/aboutSolar";
import Slider from "../../components/MainCarousel/slider";
import AboutSolis from "./components/aboutSolis/aboutSolis";
import { Box } from "@mui/material";
export const HomePage = () => {
  return (
    <Box sx={{width:"100%",}}>
      <Slider />
      <AboutSolar />
      <AboutSolis />
      <MiniCarousel />
    </Box>
  );
};
