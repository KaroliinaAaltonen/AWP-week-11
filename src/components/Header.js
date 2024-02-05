// /src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = ({ name }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log('changeLanguage triggered:', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          <Typography variant="h6">{t('home')}</Typography>
        </Button>
        <Button color="inherit" component={Link} to="/about">
          <Typography variant="h6">{t('about')}</Typography>
        </Button>
        <Button id="en" color="inherit" onClick={() => changeLanguage('en')}>
          English
        </Button>
        <Button id="fi" color="inherit" onClick={() => changeLanguage('fi')}>
          Suomi
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
