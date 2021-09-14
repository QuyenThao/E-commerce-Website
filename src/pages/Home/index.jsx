import { Box, Container } from '@material-ui/core';
import Carousel from '../../components/Carousel';
import FeaturedProduct from '../../components/products/FeaturedProduct';

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
