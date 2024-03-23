import React from "react";
import "./Contenthead.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Contenthead = () => {
  return (
    <div className="xuv-contenthead">
      <DropdownButton
        className="xuv-dropdown"
        id="dropdown-basic-button"
        variant="Warning"
        title="Own XUV 700"
        autoClose="true"
      >
        <Dropdown.Item href="#/action-1">Book Now</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Test Drive</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Enquire Now</Dropdown.Item>
      </DropdownButton>

      <div className="xuv-content">
        <ul>
          <li>Hello XUV 700</li>
          <li>Hello Adrenox</li>
          <li>Key Highlights</li>
          <li>Features</li>
          <li>Xplore 360</li>
          <li>Reviews</li>
          <li>Gallery</li>
          <li>Variants and Pricing</li>
        </ul>
      </div>
    </div>
  );
};
export default Contenthead;
