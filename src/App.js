import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faDownload, faEdit, faSignOutAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";
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



library.add(faEdit, faDownload, faCheck, faSignOutAlt, faSpinner);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: authService.getUser(),
      isExpire: authService.isExpire()
    };
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
