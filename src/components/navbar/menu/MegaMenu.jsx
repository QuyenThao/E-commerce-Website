import { IconButton } from '@material-ui/core';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <IconButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="menu-icon"
      >
        <MenuOutlinedIcon className="menu-icon-btn"></MenuOutlinedIcon>
      </IconButton>
      <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
