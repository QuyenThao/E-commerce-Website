import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './product/Product';

const products = [
  {
    id: 1,
    name: 'Soundless Speaker',
    salePrice: '$125.00',
    originalPrice: '$300.00',
    image:
      'https://cdn.shopify.com/s/files/1/2173/3027/products/product-kodo-19.jpg?v=1499919910',
  },
  {
    id: 2,
    name: 'Studio Chair',
    salePrice: '$75.00',
    image:
      'https://cdn.shopify.com/s/files/1/2173/3027/products/product-kodo-27_f0a4a9b9-aec4-44f4-a7f7-4c599135445d.jpg?v=1499921542',
  },
  {
    id: 3,
    name: 'Framed-Sleeve Group',
    salePrice: '$150.00',
    image:
      'https://cdn.shopify.com/s/files/1/2173/3027/products/product-kodo-26_7f9ff456-15ce-46ba-84ae-ffe3febb0c26.jpg?v=1499921387',
  },
  {
    id: 4,
    name: 'Studio Chair',
    salePrice: '$150.00',
    image:
      'https://cdn.shopify.com/s/files/1/2173/3027/products/product-kodo-25_2d620352-31cc-4333-83e5-724ed6ea6117.jpg?v=1499921353',
  },
];

function Products(props) {
  return (
    <main>
      <Grid container justify="Content" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
