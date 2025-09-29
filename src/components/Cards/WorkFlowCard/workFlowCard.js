import React from "react";
import { Grid, Typography } from "@mui/material";
import { workFlowCardStyles } from "./styles";

function WorkFlowCard(props) {
  return (
    <Grid sx={workFlowCardStyles.gridStyles} className="card">
      <Grid>
        <img
          src={props.image}
          alt={props.title}
          width="250px"
          height="150px"
          style={workFlowCardStyles.imageStyles}
        />
      </Grid>
      <Grid sx={workFlowCardStyles.contentGridStyles}>
        <Typography sx={workFlowCardStyles.titleStyles}>
          {props.title}
        </Typography>
        <Typography sx={workFlowCardStyles.descStyles}>
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default WorkFlowCard;
