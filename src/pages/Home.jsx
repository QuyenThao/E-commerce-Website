import { Box, Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProductList from '../components/products/ProductList';
import Carousel from '../components/carousel/Carousel';

function Home(props) {
  return (
    <>
      <Carousel />
      <Box>
        <Container>
          <ProductList />
        </Container>
      </Box>
    </>
  );
}

export default Home;
