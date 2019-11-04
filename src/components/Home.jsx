import React, { Component } from "react";
import ProfilePage from "../views/examples/ProfilePage.js";
import Blogs from "./blogs";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfilePage />
      </React.Fragment>
    );
  }
}

export default Home;
