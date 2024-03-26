import "./pricing.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Pricing = () => {
  return (
    <div className="pricing-head">
      <h4 style={{ textAlign: "center", color: "wheat" }}>
        VARIANTS & PRICING
      </h4>
      <div>
        <DropdownButton
          className="xuv-dropdown-pricing"
          id="dropdown-basic-button"
          variant="Warning"
          title="Xplore All Variants"
          autoClose="true"
        >
          <Dropdown.Item href="#/action-1">
            AX3 Starting from 1639000.00/-
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            AX5 Starting from 1769000.00/-
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            AX7 Starting from 2129000.00/-
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="pricing-different-cars">
        <div>
          <h4>MX Petrol</h4>
          <p className="pricise-font-change">1399001.00/-</p>
          <p className="pricise-font-change">Manual</p>
          <p className="pricise-font-change">147.1kW</p>
          <p className="pricise-font-change">5 Seater</p>
        </div>

        <div>
          <h4>MX Petron (E)</h4>
          <p className="pricise-font-change">1448999.00/-</p>
          <p className="pricise-font-change">Manual</p>
          <p className="pricise-font-change">147.1kW</p>
          <p className="pricise-font-change">5 Seater</p>
        </div>
        <div>
          <h4>MX Diesel</h4>
          <p className="pricise-font-change">1459000.00/-</p>
          <p className="pricise-font-change">Manual</p>
          <p className="pricise-font-change">114kW</p>
          <p className="pricise-font-change">5 Seater</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
