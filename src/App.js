import { Col, Container, Row } from "react-bootstrap";
import Navmenu from "./Navbar/Navbar";
import Content from "./content/Content";
import OrderCart from "./orderCart/OrderCart";
import "./global.scss";
import "./icons/iconset.css";

function App() {
  return (
    <Container fluid>
      <Row style={{ height: "100vh", overflow: "hidden" }}>
        <Navmenu />
        <Content />
        <OrderCart />
      </Row>
    </Container>
  );
}

export default App;
