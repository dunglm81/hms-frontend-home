import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressBook, faCalendarAlt, faCheck, faDownload, faEdit, faHandHoldingUsd, faHotel, faLaptop, faPeopleCarry, faShippingFast, faSignOutAlt, faSpinner, faTools, faUserCog, faUserShield, faUserTag, faUserTie, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import queryString from 'query-string';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/HomeComponent/Home";
import Login from "./components/pages/LoginComponent/Login";
import authService from "./services/auth.service";
import PrivateRoute from "./utils/PrivateRoute";


library.add(faEdit, faDownload, faCheck, faSignOutAlt, faSpinner, faWarehouse, faUserShield, faHotel, faLaptop, faTools, faUserCog, faAddressBook, faCalendarAlt, faUserTag, faShippingFast, faPeopleCarry, faUserTie, faHandHoldingUsd);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: authService.getUser(),
      isExpire: authService.isExpire()
    };
  }

  componentDidMount() {
    const params = queryString.parse(window.location.search);
    if (params.state && params.state === "logout") {
      authService.logout();
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              {this.state.user && !this.state.isExpire ? (
                <Redirect exact from="/" to="/home" />
              ) : (
                  <Redirect exact from="/" to="/login" />
                )}
              <Route
                exact
                path="/login"
                render={(props) =>
                  this.state.user && !this.state.isExpire ? (
                    <Redirect exact from="/" to="/home" />
                  ) : (
                      <Login {...props} />
                    )
                }
              />
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
          </div>
        </Router>
        {/* <div className="version-name">Phiên bản UAT</div> */}
      </div>
    );
  }
}

export default App;
