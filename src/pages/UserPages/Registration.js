import React from 'react';
import { Container, Row, Col } from 'shards-react';

import Registarion from '../../components/UserPages/Registration';

const RegistarionPage = () => (
  <Container>
    <Row>
      <Col lg={{ size: 12 }} md={{ size: 12 }} sm='12'>
        <Registarion />
      </Col>
    </Row>
  </Container>
);

export default RegistarionPage;
