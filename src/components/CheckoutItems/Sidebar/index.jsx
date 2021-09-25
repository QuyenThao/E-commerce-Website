import React from 'react';
import useStyles from './styles';
import Item from './Item';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import clsx from 'clsx';
import { cartItemsSelector, cartTotalSelector } from '../../Auth/selectors';
import { useSelector } from 'react-redux';

const TAX_RATE = 0.03;

function ccyFormat(num) {
  return `${parseInt(num).toFixed(2)}`;
}

const Sidebar = () => {
  const classes = useStyles();
  const items = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);

  const invoiceTaxes = TAX_RATE * cartTotal;
  const invoiceTotal = invoiceTaxes + cartTotal;
  return (
    <div className={classes.root}>
      <TableContainer>
        <Table aria-label="spanning table">
          <TableHead></TableHead>
          <TableBody>
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
            <TableRow className={clsx(classes.subtotal, classes.row)}>
              <TableCell colSpan={2} className={classes.title}>
                Subtotal
              </TableCell>
              <TableCell align="right">${ccyFormat(cartTotal)}</TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell colSpan={2} className={classes.title}>
                Shipping
              </TableCell>
              <TableCell align="right" className={classes.shipping}>
                Calculated at next step
              </TableCell>
            </TableRow>
            <TableRow className={classes.tax}>
              <TableCell colSpan={2} className={classes.title}>
                Taxes (estimated)
              </TableCell>
              <TableCell align="right">${ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell colSpan={2} className={classes.total}>
                Total
              </TableCell>
              <TableCell align="right" className={classes.payment}>
                <span className={classes.currency}>USD</span>$
                {ccyFormat(invoiceTotal)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Sidebar;
