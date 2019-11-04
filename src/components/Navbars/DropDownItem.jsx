import React from "react";
// reactstrap components
import { DropdownMenu, DropdownItem } from "reactstrap";

const DropDownItem = () => {
  return (
    <DropdownMenu aria-labelledby="navbarDropdown">
      <DropdownItem header tag="a">
        Blog
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        React
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Kafka
      </DropdownItem>
      <DropdownItem divider></DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Leadership
      </DropdownItem>
      <DropdownItem divider></DropdownItem>
      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
        Travel
      </DropdownItem>
    </DropdownMenu>
  );
};

export default DropDownItem;
