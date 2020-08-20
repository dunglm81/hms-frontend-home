export const ENVIRONMENT = () => {
  let env = {
    beUrl: `http://localhost:9001`,
    feUrl: `http://localhost:9000`,
    enableDebug: true,
    feSubUrl: "",
    beSubUrl: "",
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
  return env;
};
export const BE_URL = ENVIRONMENT().beUrl;
export const SUB_URL = `/pdf_reporting/manulife`;
export const SEARCH_BY_CASENO = `/search_by_caseno`;
export const SEARCH = `/search`;
export const SEARCH_LIST = `/search_list`;
export const DOWNLOAD_LIST = `/download_list`;
export const DOWNLOAD_CASENO = `/download_by_caseno`;
export const PRINT_TYPE = `print_type`;
export const CASE_NO = `case_no`;
export const APPROVAL_WITH_TABLE = `approval_with_table`;
export const APPROVAL_NO_TABLE = `approval_no_table`;
export const APPROVAL_LETTER = `approval_letter`;
export const APPROVAL = `approval`;
export const TEMPORARILY_CLOSE = `temporarily_close`;
export const MORE_DOCUMENT = `more_document`;
export const DECLINED = `declined`;
export const SHOW_MAIN_SPINNER = `show_main_spinner`;

export const APPROVED_NAME = `Approved`;
export const DECLINED_NAME = `Declined`;

export const NOTE_PROGRESS = `Xin chờ! Đang xử lý giao dịch...`;
export const ALERT_NO_RESULT = `Không tìm thấy kết quả`;
export const ALERT_ERROR = `Đã có lỗi xảy ra, vui lòng thử lại!`;
export const NO_PDF_FILE_CHOSEN = `Không có file PDF được chọn hoặc được phép tải về!`;

export const ROW_PER_PAGE = 20;
export const CURRENT_PAGE_APPROVAL_LETTER = "current_page_approval_letter";
export const CURRENT_PAGE_TEMPORARILY_CLOSE = "current_page_temporarily_close";
export const CURRENT_PAGE_MORE_DOCUMENT = "current_page_more_document";
export const CURRENT_PAGE_DECLINED = "current_page_declined";

export const LOGIN_URL = `authentication/user_login`;
export const REFRESH_TOKEN_URL = `authentication/renew_jwt`;
export const REFRESH_TOKEN_TIME = ENVIRONMENT().refreshTokenTime;

export const HMS_ACCESS_TOKEN = `hms-access-token`;
export const HMS_USER = `hms-user`;
