import React from 'react';
import { Grid } from '@material-ui/core';
import { useContentHeaderStyles } from '../../styles';
import { getTransferDuration } from '../../helpers';

export const ContentHeader = ({ duration, transfers}) => {
    const classes = useContentHeaderStyles();
    return(
      <div className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <small>
              Duration:
              {' '}
              {getTransferDuration(duration)}
            </small>
          </Grid>
          <Grid className={classes.mright} item>
            <small>
              Transfers:
              {' '}
              {transfers}
            </small>
          </Grid>
        </Grid>
      </div>
    ); 
}