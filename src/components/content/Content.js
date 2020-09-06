import React from 'react';
import { ContentHeader } from './ContentHeader';
import { ContentBody } from './ContentBody';

export const Content = ({ connections }) => {
  return (
    <div className="contentHeader">
      <ContentHeader
        duration={connections.duration}
        transfers={connections.transfers}
      />
      {connections.sections.map((section, index) => (
        <ContentBody key={index} section={section} />
      ))}
    </div>
  );
};
