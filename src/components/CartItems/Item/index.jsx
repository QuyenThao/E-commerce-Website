import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setQuantity } from '../../../components/Auth/cartSlice';
import useStyles from './styles';

function ccyFormat(num) {
  return `${parseInt(num).toFixed(2)}`;
}

const Item = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    if (event.keyCode === 13) {
      const action = setQuantity({
        id: item.id,
        product: item,
        quantity: parseInt(event.target.value),
      });
      dispatch(action);
    }
  };

  return (
    <>
      <TableRow key={item.id}>
        <TableCell>
          <Link to={`/products/${item.product.id}`}>
            <img
              src={`http://localhost:1337${item.product.thumbnail[0].url}`}
              alt="img"
              className={classes.thumbnail}
            />
          </Link>
        </TableCell>
        <TableCell>
          <Link to={`/products/${item.product.id}`} className={classes.link}>
            <div className={classes.name}>{item.product.name}</div>
          </Link>
          <span className={classes.price}>
            ${ccyFormat(item.product.salePrice)}
          </span>
        </TableCell>
        <TableCell align="right">
          <input
            className={classes.qty}
            type="number"
            min={1}
            max={99}
            defaultValue={item.quantity}
            onKeyUp={handleQuantityChange}
          />
        </TableCell>
        <TableCell align="right">
          ${ccyFormat(item.product.salePrice * item.quantity)}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Item;
