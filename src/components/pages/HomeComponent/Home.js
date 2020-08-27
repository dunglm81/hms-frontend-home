import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import authService from "../../../services/auth.service";
import { ENVIRONMENT } from "../../../utils/constant";
import { log } from "../../../utils/util";
import styles from "./Home.module.css";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appArr: ENVIRONMENT().appArr,
      user: authService.getUser()
    };
  }

  componentDidMount() {
    if (this.state.user) {
      log("user", this.state.user);
      const userRoles = authService.getUser().role;
      let appArr = JSON.parse(JSON.stringify(this.state.appArr));
      appArr = appArr.map((item) => {
        item.display = userRoles.some(item1 => {
          const regex = new RegExp("^" + item.name);
          return regex.test(item1);
        });
        return item;
      });
      this.setState({
        appArr: appArr,
      });
    } else {
      this.props.history.push("/login");
    }
  }

  handleLogoutEvent() {
    authService.logout();
  }

  render() {
    const setStyle = (bgUrl) => {
      return {
        backgroundImage: `url(${bgUrl})`,
      };
    };
    return (
      <div className={styles.homeCustom}>
        <div className={styles.navbarCustom}>
          <div className={styles.navbarInfo}>
            <div className={styles.navbarAvartar}>
              <img src="./avartar.jpg" alt="avartar"></img>
            </div>
            <div className={styles.navbarName}>
              {this.state.user.unique_name}
            </div>
          </div>
          <div className={styles.navbarBtn} onClick={() => {
            this.handleLogoutEvent();
          }}>
            <div><FontAwesomeIcon icon="sign-out-alt" /></div>
            <div>Log out</div>
          </div>
        </div>
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
