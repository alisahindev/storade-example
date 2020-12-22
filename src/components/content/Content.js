import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CardComp from "../card/CardComp";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import Search from "../search";

const Content = observer(() => {
  const [active, setActive] = useState(false);
  const { dataStore, cartStore } = useStore();
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
          <Search
            className="search-input"
            options={dataStore.filteredItems}
            onChange={(query) => dataStore.search(query)}
          />
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
          {dataStore?.dataItems?.map((item) => (
            <CardComp
              onClick={() => cartStore.addItem(item.id)}
              key={item.id}
              id={item.id}
              title={item.title}
              media={item.media}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Col>
  );
});

export default Content;
