import { Col, Container, Row } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <Container fluid className="bg-black p-5 text-white footer">
      <Row className="justify-content-center flex-column align-items-center">
        <Col md={4}>
          <ul className="list-unstyled d-flex justify-content-between">
            <li>About</li>
            <li>Work with us</li>
            <li>API</li>
            <li>Contact us</li>
          </ul>
        </Col>
        <Col className="d-flex justify-content-between" md={2}>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
