import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    // <i
    //   onClick={props.onClick} //this.props.onClick is custom name happend to be same name as default onclick event on this componet
    //   className={classes}
    //   area-hidden="true"
    //   style={{ cursor: "pointer" }}
    // ></i>
    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "30" }} />
  );
};

export default Like;
