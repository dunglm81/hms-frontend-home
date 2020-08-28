export const ENVIRONMENT = () => {
  let env = {
    enableDebug: false,
    appArr: [],
    refreshTokenTime: 5,
  };

  const browserWindow = window || {};
  const browserWindowEnv = browserWindow["__env"] || {};

  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = window["__env"][key];
    }
  }

  env.appArr.map(item => {
    item.feUrl = `${process.env.REACT_APP_BASE_DOMAIN}/${item.subDomain}`;
    return item;
  });

  return env;
};

/* --------- Secrets --------- */
export const BE_URL = process.env.REACT_APP_BACKEND_USER_ADMINSTRATION;
/* --------------------------- */

export const LOGIN_URL = `authentication/user_login`;
export const REFRESH_TOKEN_URL = `authentication/renew_jwt`;
export const REFRESH_TOKEN_TIME = ENVIRONMENT().refreshTokenTime;

export const HMS_ACCESS_TOKEN = `hms-access-token`;
export const HMS_USER = `hms-user`;
export const HMS_EXPIRE = `hms-expire`;