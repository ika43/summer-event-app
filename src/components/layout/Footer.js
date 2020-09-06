import React from 'react';
import { FaShip } from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import { useFooterStyles } from '../../theme-styles';

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <footer className={classes.footer} data-testid="footer">
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <FaShip />
        </div>
        <div className={classes.root}>MS Berna</div>
      </Grid>
    </footer>
  );
};
