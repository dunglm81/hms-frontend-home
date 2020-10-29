import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Button, Form } from "react-bootstrap";
import authService from "../../../services/auth.service";
import { LOGIN_URL } from "../../../utils/constant";
import styles from "./Login.module.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "demo_user@gmail.com",
      password: "12345678",
      isValidDate: true,
      isSubmitting: false
    };
  }

  handleChangeInput(event) {
    this.updateState(event.target.name, event.target.value);
  }

  checkValidation() {
    let isValidDate = true;
    this.updateState("isValidDate", isValidDate);
    return isValidDate;
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  handleSubmitInput(event) {
    event.preventDefault();
    this.updateState("isSubmitting", true);
    const body = {
      email: this.state.username,
      password: this.state.password,
    };

    authService
      .login(LOGIN_URL, body)
      .then((response) => {
        if (response.status === 200) {
          this.updateState("isSubmitting", false);
          authService.setAccessToken(response.data.token);
          authService.setUserLogo(response.data.avartar);
          this.props.history.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        this.updateState("isSubmitting", false);
      });
  }

  render() {
    return (
      <div className={styles.formCustom}>
        <div className={styles.formContainer}>
          <Form
            onSubmit={(e) => {
              this.handleSubmitInput(e);
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="username"
                name="username"
                value={this.state.username}
                onChange={(e) => {
                  this.handleChangeInput(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={(e) => {
                  this.handleChangeInput(e);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
              {this.state.isSubmitting ? <FontAwesomeIcon className="ml-2" icon="spinner" pulse /> : null}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
