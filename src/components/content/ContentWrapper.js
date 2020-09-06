import React, { useState } from 'react';
import { Form } from '../form/Form';
import { useDirections } from '../../hooks';
import { Content } from './Content';
import { Loader } from '../layout/Loader';
import { SnackbarError } from '../snackbar/SnackbarError';
import { Footer } from '../layout/Footer';

export const ContentWrapper = () => {
  const [directions, setDirections] = useState({ from: '', to: '' });
  const {
    data: { connections },
    isLoading,
    error,
  } = useDirections(directions);
  return (
    <>
      <Form setDirections={setDirections} />
      {isLoading && <Loader />}
      {connections && connections[0] && (
        <Content connections={connections[0]} />
      )}
      {connections && !connections[0] && (
        <SnackbarError error="There is no connection between requested locations." />
      )}
      {error && <SnackbarError error={error} />}
      <Footer />
    </>
  );
};
