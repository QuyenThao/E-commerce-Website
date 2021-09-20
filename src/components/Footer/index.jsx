import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  YouTube,
} from '@material-ui/icons';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 1),
    width: '100%',
    background: '#f5f5f5',
  },
  footerContent: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  logo: {
    width: '25%',
  },
  linkContent: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
  },
  item: {
    fontSize: '14px',
    color: '#7d7d7d',
    listStyle: 'none',
    margin: theme.spacing(2, 1),
    cursor: 'pointer',
    transition: 'all .3s ease ',
    '&:hover': {
      color: '#f50057',
    },
  },
  number: {
    fontSize: '25px',
    fontWeight: '600',
    lineHeight: '30px',
    letterSpacing: '.5px',
    color: '#7d7d7d',
    margin: theme.spacing(1, 0),
  },
  email: {
    color: '#7d7d7d',
    letterSpacing: '.5px',
  },
  address: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
  },
  copyright: {
    width: '50%',
    fontSize: '14px',
    color: '#7d7d7d',
  },
  social: {
    width: '50%',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  icon: {
    color: '#7d7d7d',
    margin: theme.spacing(0, 1),
    '&:hover': {
      color: '#f50057',
      transition: 'all .3s ease ',
    },
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.footerContent}>
          <div className={classes.logo} md={3} sm={2} xs={12}>
            <Link to="/" xs={12}>
              <img
                src="https://cdn.shopify.com/s/files/1/2173/3027/t/123/assets/logo.svg?v=3643094164106701333"
                alt="logo"
                className={classes.logoBtn}
                xs={12}
              />
            </Link>
          </div>

          <div className={classes.linkContent} xs={12}>
            <div md={4} xs={12}>
              <ul>
                <li className={classes.item}>About Us</li>
                <li className={classes.item}>Contact Us</li>
                <li className={classes.item}>Term & Condition</li>
                <li className={classes.item}>Private Policy</li>
              </ul>
            </div>
            <div md={4} xs={12}>
              <ul>
                <li className={classes.item}>About Us</li>
                <li className={classes.item}>Contact Us</li>
                <li className={classes.item}>Term & Condition</li>
                <li className={classes.item}>Private Policy</li>
              </ul>
            </div>
            <div md={4} xs={12}>
              <ul>
                <li className={classes.item}>About Us</li>
                <li className={classes.item}>Contact Us</li>
                <li className={classes.item}>Term & Condition</li>
                <li className={classes.item}>Private Policy</li>
              </ul>
            </div>
          </div>
          <div className={classes.contact}>
            <h2 className={classes.number}>+77 (756) 334 876</h2>
            <div className={classes.email}>contact@cleversoft.com</div>
          </div>
        </div>

        <div className={classes.address}>
          <div className={classes.copyright} xs={12}>
            Copyright © 2021 Cleversoft. All rights reserved.
          </div>
          <div className={classes.social} xs={12}>
            <div className={classes.socialIcons}>
              <Link to="/">
                <Facebook className={classes.icon} />
              </Link>
              <Link to="/">
                <Instagram className={classes.icon} />
              </Link>
              <Link to="/">
                <Twitter className={classes.icon} />
              </Link>
              <Link to="/">
                <Pinterest className={classes.icon} />
              </Link>
              <Link to="/">
                <YouTube className={classes.icon} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
