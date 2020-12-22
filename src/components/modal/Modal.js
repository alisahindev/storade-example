import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

function ModalComp({ show, onHide, animation, isEdit }) {
  return (
    <Modal
      unMountOnExit={true}
      show={show}
      onHide={onHide}
      animation={animation}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Discount
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          style={{
            alignItems: "center",
            textAlign: "center",
            marginTop: "26px",
          }}
        >
          <Form.Group
            as={Row}
            style={{
              alignItems: "center",
              textAlign: "center",
              marginTop: "26px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <input
              style={{
                borderBottom: "1px solid #E6E9EF",
                outline: "none",
              }}
              type="number"
            ></input>
            <select style={{ outline: "none" }} name="percent">
              <option value="percent">Percent</option>
            </select>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Col style={{ marginTop: "36px" }}>
                <Form.Check
                  type="radio"
                  label="Continuous customer"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  className="formHorizontalRadios"
                />
                <Form.Check
                  type="radio"
                  label="Store authority instruction"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  className="formHorizontalRadios"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  className="formHorizontalRadios"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group style={{ margin: "0" }}>
            <Form.Control
              as="textarea"
              placeholder="Please enter reason"
              style={{
                resize: "none",
                border: "0",
                padding: "10px 14px",
                height: "100px",
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{
          border: "0",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          style={{ backgroundColor: "#D9DFE7", color: "white" }}
          onClick={onHide}
        >
          Cancel
        </Button>
        <Button
          style={{ backgroundColor: "#5265CC", color: "white" }}
          onClick={onHide}
        >
          Complete
        </Button>
      </Modal.Footer>
      {isEdit && (
        <Modal.Footer
          style={{
            border: "0",
            display: "flex",
            justifyContent: "space-around",
            borderTop: "1px solid #E6E9EF ",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              color: "#5265CC",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "18px",
              fontFamily: "Arial",
            }}
          >
            Remove from Cart
          </span>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default ModalComp;
