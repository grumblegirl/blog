import React from "react";
import DropDownItem from "./DropDownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropDownItem />
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <UncontrolledDropdown>
              <DropdownToggle
                tdata-toggle="dropdown"
                href="#pablo"
                id="navbarDropdown"
                tag="a"
                onClick={e => e.preventDefault()}
                style={{ fontSize: "9pt" }}
              >
                Menu
              </DropdownToggle>
              <DropDownItem />
            </UncontrolledDropdown>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/grumblegirl" target="_new">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ fontSize: "14" }}
                  />
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Contact me
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/grumblegirl"
                  target="_new"
                  id="contact-tooltip"
                >
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: "13" }} />
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on GitHub
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/arlenewatson/"
                  target="_new"
                  id="linkedin-tooltip"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ fontSize: "14" }}
                  />
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on LinkedIn
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/arlenewatson/?hl=en"
                  target="_new"
                  id="instagram-tooltip"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ fontSize: "14" }}
                  />
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
