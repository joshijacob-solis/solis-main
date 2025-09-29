import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { Button } from "@mui/material";
import { ScrollToTop } from "../../utils/scrollToTop";
import { useEffect, useState } from "react";
export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 600;
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      sx={{
        width: "50px",
        height: "50px",
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
        backgroundColor:"#000",
        position:"fixed",
        bottom:"100px",
        display:!isVisible?"":"none",
        right:"0px"
      }}
      onClick={ScrollToTop}
    >
      <ArrowCircleUpRoundedIcon sx={{color:"#00AA00"}} />
    </Button>
  );
};
