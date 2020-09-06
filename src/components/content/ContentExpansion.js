import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { ContentExpansionBody } from './ContentExpansionBody';
import './Content.scss';

export const ContentExpansion = ({ journey }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <Grid item xs={2} container justify="flex-end" alignItems="flex-end">
        <small>{journey.passList.length} stations</small>
      </Grid>
      <Grid
        item
        xs={1}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <IconButton onClick={() => setExpand(!expand)}>
          {!expand ? <FaChevronDown /> : <FaChevronUp />}
        </IconButton>
      </Grid>
      <Grid container spacing={2}>
        <Collapse className="collapse" in={expand} timeout="auto" unmountOnExit>
          <ContentExpansionBody passList={journey.passList} />
        </Collapse>
      </Grid>
    </>
  );
};
