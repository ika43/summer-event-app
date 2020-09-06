import React, { useState } from 'react';
import { Form } from '../form/Form';
import { Content } from '../content/Content';
import { Footer } from './Footer';
import { Header } from './Header';

export const Home = () => {
  const [directions, setDirections] = useState(null);
  return (
    <>
      <Header />
      <Form setDirections={setDirections} />
      {directions && <Content directions={directions} />}
      <Footer />
    </>
  );
};
