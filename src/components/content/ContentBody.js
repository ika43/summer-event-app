import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FaWalking, FaBus, FaTram, FaQuestion, FaTrain } from 'react-icons/fa';
import { ContentExpansion } from './ContentExpansion';
import { getSectionDuration } from '../../helpers';
import { useContentBodyStyles } from '../../styles';

export const ContentBody = ({ section }) => {
  const classes = useContentBodyStyles();
  const renderIcon = (category) => {
    switch (category) {
      case 'B':
        return <FaBus className={classes.icon} />;
      case 'T':
        return <FaTram className={classes.icon} />;
      case 'IC':
        return <FaTrain className={classes.icon} />;
      default:
        return <FaQuestion className={classes.icon} />;
    }
  };
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          {section.journey ? (
            renderIcon(section.journey.category)
          ) : (
            <FaWalking className={classes.icon} />
          )}
        </Grid>
        <Grid
          item
          xs
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item>
            {section.journey ? `Take ${section.journey.name} to ` : 'Walk to '}
            {section.arrival.station.name}
          </Grid>
          <Grid item>
            <small>
              {getSectionDuration(
                section.arrival.arrival,
                section.departure.departure
              )}
            </small>
          </Grid>
        </Grid>
        {section.journey && <ContentExpansion journey={section.journey} />}
      </Grid>
    </Paper>
  );
};
