import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="notFound">
      <Typography variant="h1" component="h2">
        404 NOT FOUND
      </Typography>
      <Button variant="contained">
        <Link style={{ textDecoration: 'none' }} to="/">
          Go to home page
        </Link>
      </Button>
    </div>
  );
};
