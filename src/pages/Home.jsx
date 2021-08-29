import { Box, Container } from '@material-ui/core';
import React from 'react';
import Carousel from '../components/carousel/Carousel';
import FeaturedProduct from '../components/products/FeaturedProduct';

function Home(props) {
  return (
    <>
      <Carousel />
      <Box>
        <Container>
          <FeaturedProduct />
        </Container>
      </Box>
    </>
  );
}

export default Home;
