import { Badge, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function ccyFormat(num) {
  return `${parseInt(num).toFixed(2)}`;
}

const Item = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <TableRow key={1} className={classes.root}>
        <TableCell>
          <Badge badgeContent={item.quantity} className={classes.badge}>
            <div className={classes.img}>
              <img
                src={`http://localhost:1337${item.product.thumbnail[0].url}`}
                alt="img"
              />
            </div>
          </Badge>
        </TableCell>
        <TableCell>
          <div className={classes.name}>{item.product.name}</div>
        </TableCell>
        <TableCell align="right">
          <div className={classes.price}>
            ${ccyFormat(item.product.salePrice * item.quantity)}
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Item;
