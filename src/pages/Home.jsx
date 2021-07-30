import { Box, Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Products from '../components/products/Products';

function Home(props) {
  return (
    <>
      <Navbar />
      <Box>
        <Container>
          <Products />
        </Container>
      </Box>
    </>
  );
}

export default Home;
