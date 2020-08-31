export const ENVIRONMENT = () => {
  let env = {
    enableDebug: false,
    beUrl: `http://localhost:7001`,
    baseDomain: `http://localhost:7000`,
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
    item.feUrl = `${item.baseDomain}/${item.subDomain}`;
    return item;
  });

  return env;
};

export const BE_URL = ENVIRONMENT().beUrl;

export const LOGIN_URL = `authentication/user_login`;
export const REFRESH_TOKEN_URL = `authentication/renew_jwt`;
export const REFRESH_TOKEN_TIME = ENVIRONMENT().refreshTokenTime;

export const HMS_ACCESS_TOKEN = `hms-access-token`;
export const HMS_USER = `hms-user`;
export const HMS_EXPIRE = `hms-expire`;