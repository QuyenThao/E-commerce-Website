import { makeStyles } from '@material-ui/core';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const useStyles = makeStyles(() => ({
  root: {},
}));

const ProductThumbnails = ({ product }) => {
  const classes = useStyles();
  const thumbnailUrls = product.thumbnail.map((thumbnail) => {
    return {
      original: `http://localhost:1337${thumbnail.url}`,
      thumbnail: `http://localhost:1337${thumbnail.url}?size=100`,
    };
  });
  return (
    <div className={classes.root}>
      <ImageGallery
        items={thumbnailUrls}
        thumbnailPosition="left"
        showNav={false}
        slideDuration={200}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ProductThumbnails;
