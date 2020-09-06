import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useHeaderStyles } from '../../theme-styles';

export const Header = () => {
  const classes = useHeaderStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <div className={classes.title}>Input locations and type enter</div>
    </Grid>
  );
};
