import { Button } from '@material-ui/core';
import React from 'react';
import Size from '../../../image/size.png';
import BasicsInfo from './BasicsInfo';
import Delivery from './Delivery';
import Guides from './Guides';
import QuestionsForm from './QuestionsForm';
import useStyles from './styles';

const ProductInfo = ({ product }) => {
  const classes = useStyles();
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
          <div className={classes.qty}></div>
          <Button className={classes.btn}>Add to cart</Button>
        </div>
        <div className={classes.checkout}>
          <div className={classes.check}>I agree with terms and conditions</div>
          <div className={classes.checkoutBtn}>Buy it now</div>
        </div>
      </div>
      <div className={classes.viewCountdown}>
        <span className={classes.icon}></span>
        <div>
          Order in The Next <span>10 hours 23 minutes</span> to get it by{' '}
          <span>Thursday 09/16/2021</span>{' '}
        </div>
      </div>
      <div className={classes.visitors}>
        <span className={classes.icon}></span>
        <div>
          Real Time <span>10</span> Visitors Right Now
        </div>
      </div>
      <div className={classes.shipping}>
        <span className={classes.icon}></span>
        <div>
          Spend <span>$200.00 USD</span> to get Free Shipping
        </div>
      </div>
      <div className={classes.bagdeImage}>
        <img
          src="https://cdn.shopify.com/s/files/1/2173/3027/files/paypal-product1_x2048.png?v=1556790995"
          alt="badge"
        />
      </div>
      <div className={classes.prMeta}>
        <div>Categories: </div>
        <div>Product Type: </div>
        <div>Barcode: </div>
      </div>
      <div className={classes.shareLinks}>
        Share:
        <div className={classes.socials}>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://facebook.com/">Facebook</a>
          <a href="https://pinterest.com/">Pinterest</a>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
