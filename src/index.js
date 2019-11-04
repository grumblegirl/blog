/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "./assets/css/montserrat.css";
import "./assets/css/poppins.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
// import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

import "./assets/css/open-iconic-bootstrap.min.css";
import "./assets/css/animate.css";

import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/magnific-popup.css";

import "./assets/css/aos.css";

import "./assets/css/ionicons.min.css";

import "./assets/css/bootstrap-datepicker.css";
import "./assets/css/jquery.timepicker.css";

import "./assets/css/flaticon.css";
import "./assets/css/icomoon.css";
import "./assets/css/style.css";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";

// pages for this kit
//import Index from "./views/Index.js";
//import NucleoIcons from "./views/NucleoIcons.js";
//import LoginPage from "./views/examples/LoginPage.js";
//import LandingPage from "./views/examples/LandingPage.js";
//import ProfilePage from "./views/examples/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <BrowserRouter>
  //   <Switch>
  //     <Switch>
  //       <Route path="/index" render={props => <Index {...props} />} />
  //       <Route
  //         path="/nucleo-icons"
  //         render={props => <NucleoIcons {...props} />}
  //       />
  //       <Route
  //         path="/landing-page"
  //         render={props => <LandingPage {...props} />}
  //       />
  //       <Route
  //         path="/profile-page"
  //         render={props => <ProfilePage {...props} />}
  //       />
  //       <Route path="/login-page" render={props => <LoginPage {...props} />} />
  //       <Redirect to="/index" />
  //       <Redirect from="/" to="/index" />
  //     </Switch>
  //   </Switch>
  // </BrowserRouter>,
  document.getElementById("root")
);
