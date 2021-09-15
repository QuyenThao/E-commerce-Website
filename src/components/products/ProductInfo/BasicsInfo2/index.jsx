import { Facebook, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const BasicsInfo2 = ({ product }) => {
  const { categories } = product;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        Categories:
        {categories.map((category, index) => (
          <li key={index} className={classes.item}>
            {category.title},
          </li>
        ))}
      </div>
      <div>Product Type: </div>
      <div>Barcode: </div>
      <div>
        Share:
        <div className={classes.socials}>
          <a href="https://twitter.com/">
            <Twitter className={classes.icon} />
          </a>
          <a href="https://facebook.com/">
            <Facebook className={classes.icon} />
          </a>
          <a href="https://pinterest.com/">
            <Pinterest className={classes.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicsInfo2;
