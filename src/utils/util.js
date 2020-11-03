import { Subject } from "rxjs";
import { ENVIRONMENT } from "./constant";


const subject = new Subject();
export const dataService = {
  setData: (obj) =>
    subject.next({
      data: obj,
    }),
  clearData: () => subject.next(),
  getData: () => subject.asObservable(),
};

export function logFn(key, value) {
  if (ENVIRONMENT().enableDebug) {
    if (typeof value === "object") {
      console.log(`TVT ${key} = ` + JSON.stringify(value));
    } else {
      console.log(`TVT ${key} = ` + value);
    }
  }
};

export function getFieldError(key, value) {
  let regexField = null;
  let errorMessage = "";
  switch (key) {
    case "email":
      regexField = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      errorMessage = regexField.test(value) ? "" : "Email không hợp lệ";
      break;
    case "password":
    case "current_password":
    case "new_password":
    case "confirm_new_password":
      regexField = /^.{8,}$/;
      errorMessage = regexField.test(value)
        ? ""
        : "Mật khẩu phải có ít nhất 8 kí tự";
      break;
    case "fullName":
      errorMessage = value ? "" : "Họ tên không được để trống";
      break;
    case "phone":
      regexField = /^[0][0-9]{9,10}$/g;
      errorMessage = regexField.test(value) ? "" : "Số điện thoại không hợp lệ";
      break;
    default:
  }
  return errorMessage;
}
