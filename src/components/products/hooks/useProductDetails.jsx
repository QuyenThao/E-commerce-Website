import { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const result = await productApi.get(productId);
        setProduct(result);
      } catch (error) {
        console.log('Fail to fetch product data', error);
      }

      setloading(false);
    })();
  }, [productId]);

  return { loading, product };
};

export default useProductDetails;
