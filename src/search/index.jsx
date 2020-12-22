import React, { useState, Fragment } from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const Search = ({ onChange, options, className }) => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);
  const [positionFixed, setPositionFixed] = useState(true);

  const renderOption = (option) => {
    return (
      <div style={{ height: "57px", display: "flex" }}>
        <img
          style={{ width: "37px", height: "auto", borderRadius: "50%" }}
          src={`images/${option.media}.png`}
        />
        <p
          style={{
            margin: "0",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            marginLeft: "12px",
            fontFamily: "Arial",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#3F4D64",
          }}
        >
          {option.title}
        </p>
      </div>
    );
  };

  return (
    <Form.Group className="search">
      <Typeahead
        className={className}
        onInputChange={(query) => onChange(query)}
        id="basic-typeahead-single"
        labelKey="title"
        onChange={(e) => setPositionFixed(true)}
        options={options}
        placeholder="Search Products"
        selected={singleSelections}
        renderMenuItemChildren={(opt) => renderOption(opt)}
        positionFixed={positionFixed}
      />
    </Form.Group>
  );
};

export default Search;
