import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ProfilePage from "./views/examples/ProfilePage";
import Blogs from "./components/blogs";
import {
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie
);
//

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfilePage />
      </React.Fragment>
    );
  }
}

export default App;
