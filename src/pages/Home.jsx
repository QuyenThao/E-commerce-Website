import { Box, Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import FeatureProducts from '../components/products/FeatureProducts';
import Carousel from '../components/carousel/Carousel';

function Home(props) {
  return (
    <>
      <Navbar />
      <Carousel />
      <Box>
        <Container>
          <FeatureProducts />
        </Container>
      </Box>
    </>
  );
}

export default Home;
