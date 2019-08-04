import React from 'react';
import { Router } from '@reach/router';
import ContentHome from './ContentHome';
import ContentOne from './ContentOne';
import ContentTwo from './ContentTwo';

const Content = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Router>
        <ContentHome path="/" />
        <ContentOne path="one" />
        <ContentTwo path="two" />
      </Router>
    </div>
  );
};
export default Content;
