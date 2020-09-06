import React from 'react';
import { Grid } from '@material-ui/core';
import { getTransferDuration } from '../../helpers';
import './Content.scss';

export const ContentHeader = ({ duration, transfers }) => {
  return (
    <div className="paper">
      <Grid container spacing={2}>
        <Grid item>
          <small>Duration: {getTransferDuration(duration)}</small>
        </Grid>
        <Grid className="mright" item>
          <small>Transfers: {transfers}</small>
        </Grid>
      </Grid>
    </div>
  );
};
