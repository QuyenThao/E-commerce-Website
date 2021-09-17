import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    color: '#666',
    fontSize: '14px',
    '& > p': {
      lineHeight: '24px',
    },
  },
}));

const CustomTab = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>We are proud to present our best premium Shopify theme - Ciao.</p>
      <p>
        This is multi-purpose software that can be used for any type of the
        store. Great variety of available options will make customization
        process very easy.
      </p>
      <p>
        Please, take a look at feature list and compare with our competitors.
      </p>
      <p>
        You can buy our theme and start your business online with minimal time
        investments.
      </p>
      <p>
        Ciao support DropShipping app Oberlo.
        <br />
        Ciao Shopify theme is powerfool tool to create personal webshop.
      </p>
    </div>
  );
};

export default CustomTab;
