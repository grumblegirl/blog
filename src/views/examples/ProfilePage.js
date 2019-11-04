import React from "react";
import Blogs from "../../components/blogs";

//Icons.js

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button
                className="btn-round btn btin-info smallFont"
                color="info"
                size="lg"
              >
                Follow
              </Button>
              <a href="https://github.com/grumblegirl" target="_new">
                <Button
                  className="btn-round btn-icon"
                  color="default"
                  id="tooltip340339231"
                  size="lg"
                  target="_new"
                  style={{
                    verticalAlign: "middle",
                    paddingTop: "0",
                    paddingBottom: "0",
                    margin: "0"
                  }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      fontSize: "25"
                    }}
                  />
                </Button>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on GitHub
              </UncontrolledTooltip>
              <a href="https://www.linkedin.com/in/arlenewatson/" target="_new">
                <Button
                  className="btn-round btn-icon"
                  color="default"
                  id="tooltip515203352"
                  size="lg"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ fontSize: "25" }}
                  />
                </Button>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on LinkedIn
              </UncontrolledTooltip>
            </div>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Articles</h4>
              </Col>

              {/* <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/reactTable.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/reactTable.jpg")}
                          style={{
                            width: "250px"
                          }}
                        />
                        <div className="smallFontAccent">TECHNOLOGY</div>
                        <div className="titleFont">
                          React components for Tables
                        </div>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../../assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent> */}
            </Row>
            <Row>
              <Blogs />
            </Row>
            <h3 className="title">About me</h3>
            <h5 className="description" style={{ fontSize: "15px" }}>
              A student for life who loves solving problems in fun and creative
              ways. Orginally from Seoul, South Korea. Have been a software
              professional since 1999 wearing multiple hats - Architect, People
              Leader, Programmer, UX Engineer, Quality Enginner, Product
              Manager, SRE, DBA, etc..etc..
            </h5>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
