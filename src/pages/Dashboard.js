import React from 'react';
import { Container, Row, Col } from 'shards-react';

import EnergyFlow from '../components/EnergyFlow';
import Consumption from '../components/Consumption';

const Dashboard = () => (
  <Container fluid className='main-content-container px-4'>
    <Row>
      {/* Consumption */}
      <Col lg='6' md='12' sm='12' className='mb-4'>
        <Consumption />
      </Col>

      {/* EnergyFlow */}
      <Col lg='6' md='12' sm='12' className='mb-4'>
        <EnergyFlow />
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
