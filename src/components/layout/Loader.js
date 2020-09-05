import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

export const Loader = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <CircularProgress />
    </Grid>
  );
};
