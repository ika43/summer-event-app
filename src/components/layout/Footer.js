import React from 'react';
import { FaShip } from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import { useFooterStyles } from '../../styles';

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <div className={classes.footer}>
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <FaShip />
        </div>
        <div className={classes.root}>MS Berna</div>
      </Grid>
    </div>
  );
};
