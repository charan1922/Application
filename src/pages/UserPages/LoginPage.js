import React from 'react';
import { Container, Row, Col } from 'shards-react';

import Login from '../../components/UserPages/Login';

const LoginPage = () => (
  <Container>
    <Row>
      <Col lg={{ size: 12 }} md={{ size: 12 }} sm='12'>
        <Login />
      </Col>
    </Row>
  </Container>
);

export default LoginPage;
