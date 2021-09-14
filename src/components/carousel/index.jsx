// import "./styles.css";
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import clsx from 'clsx';
import useStyles from './styles';

export default function App(props) {
  const classes = useStyles();

  return (
    <Carousel>
      <Paper className={clsx(classes.carousel, classes.banner1)}>
        <Slide
          direction="right"
          in={true}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.carouselContent}>
            <h2 className={classes.bannerTitle}>The Blockbusters</h2>
            <p className={classes.bannerText}>
              We shine a spotlight on ss18/s runway hits, from gucci to Maison
              margiela and valentino.
            </p>
            <div>
              <Button className={clsx(classes.btn, classes.btn1)}>
                Find out more
              </Button>
              <Button className={clsx(classes.btn, classes.btn1)}>
                Shop the sale
              </Button>
            </div>
          </div>
        </Slide>
      </Paper>
      <Paper className={clsx(classes.carousel, classes.banner2)}>
        <Slide
          direction="right"
          in={true}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.carouselContent}>
            <h2 className={classes.bannerTitle}>New Collection Fall 2021</h2>
            <p className={classes.bannerText}>
              We shine a spotlight on ss18/s runway hits, from gucci to Maison
              margiela and valentino.
            </p>
            <div>
              <Button className={clsx(classes.btn, classes.btn2)}>
                Find out more
              </Button>
              <Button className={clsx(classes.btn, classes.btn2)}>
                Shop the sale
              </Button>
            </div>
          </div>
        </Slide>
      </Paper>
    </Carousel>
  );
}
