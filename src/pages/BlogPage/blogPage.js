import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BlogCard from '../../components/Cards/BlogCard/blogCard';
import { solarApproachArray } from '../../constants/installationSteps';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const BlogPage=()=> {
  return (
    <Box sx={{ flexGrow: 1 , margin:"200px 0px", width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
    <Grid
            container
            spacing={5}
            alignContent="center"
            minWidth="100%"
            margin={0}
            md={1}
          >
            {solarApproachArray.map((item) => {
              return (
                <Grid
                key={item.title}
                  item
                  xs={3}
                  // container
                  display="flex"
                  direction="column"
                  justifyContent="space-evenly"
                  alignContent="center"
                  alignItems="center"
                  justifyItems="center"
                  container
                  columns={{ xs: 2, sm: 6, md: 12 }}
                  style={{ paddingLeft: "0px" }}
                >
                  <BlogCard image={item.image} title={item.title} desc={item.desc} />
                </Grid>
              );
            })}
          </Grid>
    </Box>
   
  );
}
