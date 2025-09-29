import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { projectImagesList } from '../../constants/imageAlbum';
import { Box, Grid } from '@mui/material';
import {ImageAlbumStyles} from "./styles"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function SolisPhotoAlbum() {
  const imageAlbumStyles=ImageAlbumStyles()
  return (
    <Grid sx={imageAlbumStyles.wrapGridStyle}>
    <Box sx={imageAlbumStyles.headerBoxStyle}>Gallery</Box>
    <ImageList
      sx={imageAlbumStyles.imageListStyle}
      variant="quilted"
      cols={4}

    
    >
      {projectImagesList.map((item) => (
        <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1} sx={{margin:"2px"}}>
          <img
            {...srcset(item.image, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{objectFit:"cover"}}

          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>
  );
}