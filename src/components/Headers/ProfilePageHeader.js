import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <div
      className="page-header clear-filter page-header-small"
      filter-color="blue"
    >
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + require("../../assets/img/bg15.jpeg") + ")"
        }}
        ref={pageHeader}
      ></div>
      <Container>
        <div className="photo-container">
          <img alt="..." src={require("../../assets/img/arlene2.jpg")}></img>
        </div>
        <div
          className="page-title"
          style={{
            color: "#ffffff",
            fontWeight: "bolder",
            paddingTop: "20px",
            fontSize: "28pt"
          }}
        >
          Arlene Watson
        </div>
        <p style={{ fontSize: "11pt" }}>Software Engineering Professional</p>
      </Container>
    </div>
  );
}

export default ProfilePageHeader;
