import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RatesList from '../containers/RatesList';
import Header from './Header';

const App = () => {
  return (
    <Row>
      <Header />
      <Col xs={12} md={8} mdOffset={2}>
        <RatesList />
      </Col>
    </Row>
  );
};

export default App;