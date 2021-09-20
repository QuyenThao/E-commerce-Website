import React from 'react';
import { useDispatch } from 'react-redux';
import Size from '../../../image/size.png';
import { addToCart } from '../../Auth/cartSlice';
import AddToCartForm from '../AddToCartForm';
import BasicsInfo from './BasicsInfo';
import BasicsInfo2 from './BasicsInfo2';
import Delivery from './Delivery';
import Guides from './Guides';
import QuestionsForm from './QuestionsForm';
import useStyles from './styles';
import SubInfo from './SubInfo';

const ProductInfo = ({ product }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    dispatch(action);
  };

  return (
    <>
      <BasicsInfo product={product} />
      <div className={classes.form}>
        <div className={classes.info}>
          <div className={classes.label}>
            <Guides name="Size Guide">
              <img src={Size} alt="size-guide" />
            </Guides>
            <div className={classes.delivery}>
              <Guides name="Delivery & Return">
                <Delivery />
              </Guides>
            </div>
          </div>
          <div className={classes.ask}>
            <Guides name="Ask about this product">
              <QuestionsForm />
            </Guides>
          </div>
        </div>
        <div className={classes.addToCart}>
          <AddToCartForm onSubmit={handleSubmit} />
        </div>
      </div>
      <SubInfo />
      <div className={classes.bagdeImage}>
        <img
          src="https://cdn.shopify.com/s/files/1/2173/3027/files/paypal-product1_x2048.png?v=1556790995"
          alt="badge"
        />
      </div>
      <BasicsInfo2 product={product} />
    </>
  );
};

export default ProductInfo;
