import React from 'react';
import { ContentHeader } from './ContentHeader';
import { SnackbarError } from '../snackbar/SnackbarError';
import { ContentBody } from './ContentBody';
import { useDirections } from '../../hooks';
import { Loader } from '../layout/Loader';

export const Content = ({ directions }) => {
  const { data, error, isLoading } = useDirections(directions);
  return (
    <div className="contentHeader">
      {data && data.connections[0] && (
        <ContentHeader
          duration={data.connections[0].duration}
          transfers={data.connections[0].transfers}
        />
      )}
      {data &&
        data.connections[0] &&
        data.connections[0].sections.map((section, index) => (
          <ContentBody key={index} section={section} />
        ))}
      {data && !data.connections[0] && (
        <SnackbarError error="There is no connection between requested locations." />
      )}
      {isLoading && <Loader />}
      {error && <SnackbarError error={error} />}
    </div>
  );
};
