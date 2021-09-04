import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },

  item: {},
}));

function HeadingTags({ categoryTags, onChange }) {
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={categoryTags}
      onChange={handleChange}
      className={classes.root}
      indicatorColor="secondary"
      aria-label="disabaled tabs example"
    >
      <Tab label="Furniture" value="Furniture" className={classes.item} />
      <Tab label="Decor" value="Decor" className={classes.item} />
      <Tab label="Rugs" value="Rugs" className={classes.item} />
      <Tab
        label="Arts & Tapestries"
        value="Arts & Tapestries"
        className={classes.item}
      />
      <Tab label="Candles" value="Candles" className={classes.item} />
    </Tabs>
  );
}

export default HeadingTags;
