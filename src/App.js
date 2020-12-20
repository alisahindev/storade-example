import { Col, Container, Row } from "react-bootstrap";
import Navmenu from "./Navbar/Navbar";
import Content from "./content/Content";
import "./global.scss";
import "./icons/iconset.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Navmenu />
        <Col style={{ padding: "0" }}>
          <Content />
        </Col>
        <Col style={{ padding: "0", maxWidth: "322px" }}>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
