import { Grid, Box, useMediaQuery } from "@mui/material";
import { LongCardStyles } from "./styles";

export const LongCard = (props) => {
  const longCardStyles = LongCardStyles();

  const matches = useMediaQuery("(max-width:768px)");
  return (
    <Grid
      sx={{
        ...longCardStyles.wrapgridStyles,
        flexDirection: matches
          ? "column"
          : props.index % 2 === 0
          ? "row"
          : "row-reverse",
      }}
    >
      <Box sx={longCardStyles.imageBoxStyle}>
        <img
          src={props.image}
          loading="lazy"
          alt={props.title}
          width="100%"
          height={matches ? "fit-content" : "100%"}
          style={{
            objectFit: "cover",
            borderRadius: matches ? "10px 10px 0px 0px" : "",
          }}
        />
      </Box>
      <Box sx={longCardStyles.contentBoxStyle}>
        <Box sx={longCardStyles.titleBoxStyle}>{props.title}</Box>
        <Box>{props.desc}</Box>
      </Box>
    </Grid>
  );
};
