import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import Item from './Item';
import useStyles from './styles';

const TAX_RATE = 0.03;

function ccyFormat(num) {
  return `${parseInt(num).toFixed(2)}`;
}

export default function CartItems({ items, cartTotal }) {
  const classes = useStyles();

  const invoiceTaxes = TAX_RATE * cartTotal;
  const invoiceTotal = invoiceTaxes + cartTotal;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>PRODUCT</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">QTY</TableCell>
            <TableCell align="right">PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}

          <TableRow>
            <TableCell rowSpan={3} colSpan={2} />
            <TableCell colSpan={2} className={classes.title}>
              Subtotal
            </TableCell>
            <TableCell align="right">${ccyFormat(cartTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.title}>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">${ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className={classes.title}>
              Total
            </TableCell>
            <TableCell align="right">${ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
