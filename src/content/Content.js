import React from "react";
import { Col, Row } from "react-bootstrap";
import CardComp from "../card/CardComp";

function Content() {
  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "0",
      }}
    >
      <div className="header">
        <span className="search">
          <span className="icon-svg-search"></span>
          <input type="text" placeholder="Search Products"></input>
        </span>
      </div>
      <div className="content">
        <div className="small-menu">
          <div className="order">
            <span className="icon-svg-orderleft"></span>
          </div>
          <ul>
            <li>
              <span className="icon-svg-dress"></span>
            </li>
            <li>
              <span className="icon-svg-backpack"></span>
            </li>
            <li>
              <span className="icon-svg-sneaker"></span>
            </li>
            <li>
              <span className="icon-svg-plus"></span>
            </li>
          </ul>
        </div>
        <div className="card-content">
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
      </div>
    </Col>
  );
}

export default Content;
