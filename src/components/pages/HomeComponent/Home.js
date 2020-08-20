import React from "react";

import styles from "./Home.module.css";
import { ENVIRONMENT } from "../../../utils/constant";
import authService from "../../../services/auth.service";
import { log } from "../../../utils/util";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appArr: ENVIRONMENT().appArr,
    };
  }

  componentDidMount() {
    const user = authService.getUser();
    if (user) {
      log("user", user);
      const userRoles = authService.getUser().role;
      let appArr = JSON.parse(JSON.stringify(this.state.appArr));
      appArr = appArr.map((item) => {
        item.display = userRoles.indexOf(item.name) !== -1;
        return item;
      });
      this.setState({
        appArr: appArr,
      });
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    const setStyle = (bgUrl) => {
      return {
        backgroundImage: `url(${bgUrl})`,
      };
    };
    return (
      <div className={styles.homeCustom}>
        <div className={styles.homeContainer + " container"}>
          {this.state.appArr.map((item, index) => {
            return (
              item.display && (
                <a href={item.feUrl} key={index}>
                  <div style={setStyle(item.bgImgUrl)}></div>
                  <div>{item.nameAlt}</div>
                </a>
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
