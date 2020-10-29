import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import apiService from '../../../services/api.service';
import authService from "../../../services/auth.service";
import { DATA_CONNECTION_LOGO, ENVIRONMENT, OUR_LOGO } from "../../../utils/constant";
import styles from "./Home.module.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appArr: ENVIRONMENT().appArr,
      user: authService.getUser(),
      userLogo: authService.getUserLogo(),
      org: authService.getOrg(),
      orgCode: authService.getOrgCode(),
      ourLogo: OUR_LOGO,
      dataConnectionLogo: DATA_CONNECTION_LOGO
    };
  }

  componentDidMount() {
    if (this.state.user) {
      this.setupAppArr();
      if (!this.state.orgCode) {
        this.getOrgFromServer(this.state.user.orgId);
      }
    } else {
      authService.logout();
    }
  }

  getOrgFromServer(orgId) {
    if (orgId && parseInt(orgId) !== -1) {
      apiService.getOrgInfo(orgId).then((response) => {
        if (response.status === 200 && response.data) {
          authService.setOrgCode(response.data.code);
          authService.setOrg(response.data);
          this.setState({
            org: response.data,
            orgCode: response.data.code
          });
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  setupAppArr() {
    const userRoles = authService.getUser().role;
    let appArr = JSON.parse(JSON.stringify(this.state.appArr));
    appArr = appArr.map((item) => {
      const regex = new RegExp("^" + item.name);
      if (typeof userRoles === 'string') {
        item.display = regex.test(userRoles);
      } else {
        item.display = userRoles.some(item1 => {
          return regex.test(item1);
        });
      }
      return item;
    });
    this.setState({
      appArr: appArr
    });
  }

  handleLogoutEvent() {
    authService.logout();
  }

  render() {
    return (
      <div className={styles.homeCustom} >
        <div className={"h-100 " + styles.containerCustom}>
          <div className={styles.navbarCustom}>
            <div className={styles.navbarCustomContainer}>
              <div className={styles.navbarInfo}>
                <div className={styles.navbarAvartar}>
                  <img src={this.state.userLogo} alt="avartar"></img>
                </div>
                <div className={styles.navbarName}>
                  {this.state.user.unique_name}
                </div>
              </div>
              <div className={styles.ourInfo}>
                <div className={styles.ourLogo}>
                  <img src={this.state.ourLogo} alt=""></img>
                </div>
                <div className={styles.ourName}>
                  <div>Vietnam</div><div>Manufacturing</div><div>Transformation</div>
                </div>
              </div>
              <div className={styles.navbarBtn} onClick={() => {
                this.handleLogoutEvent();
              }}>
                <div><FontAwesomeIcon icon="sign-out-alt" /></div>
                <div>Log out</div>
              </div>
            </div>
          </div>
          <div className={styles.dataConnectionContainer}>
            <div className={styles.dataConnectionLogo}>
              <img src={this.state.dataConnectionLogo} alt=""></img>
            </div>
          </div>
          <div className={styles.orgContainer}>
            <div className={styles.orgTitleContainer}>
              {(this.state.org ? `Tên đơn vị: ${this.state.org.name}` : null)}
            </div>
          </div>
          <div className={styles.homeContainer + " container-fluid"}>
            {this.state.appArr.map((item, index) => {
              return (
                item.display && (
                  <a href={item.feUrl} key={index}>
                    <div className={styles.iconContainer + " " + (item.iconUrl ? styles.iconContainerCustom : "")}>
                      {item.iconUrl ?
                        <img src={item.iconUrl} alt=""></img>
                        :
                        <FontAwesomeIcon icon={item.iconName} className={styles.iconCustom} />
                      }
                    </div>
                    <div className={styles.nameAltContainer + " " + (item.iconUrl ? styles.nameAltContainerCustom : "")}>{item.nameAlt}</div>
                  </a>
                )
              );
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
