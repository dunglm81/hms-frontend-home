import { Subject } from "rxjs";

import { APPROVED_NAME, ENVIRONMENT } from "./constant";

const subject = new Subject();
export const dataService = {
  setData: (obj) =>
    subject.next({
      data: obj,
    }),
  clearData: () => subject.next(),
  getData: () => subject.asObservable(),
};

export function saveDataToStorage(key, valueObj) {
  localStorage.setItem(key, JSON.stringify(valueObj));
}

export function getDataToStorage(key) {
  return localStorage.getItem(key);
}

export function getNameOfApprovedFile(data) {
  let fileName = APPROVED_NAME;
  let paymentName = "";

  switch (data.paymentMethod) {
    case 1:
      paymentName = "Cash";
      break;
    case 2:
      paymentName = "PaymentOrder";
      break;
    case 3:
      paymentName = "Transfer";
      break;
    case 4:
      paymentName = "PayForPremiumActive";
      break;
    case 5:
      paymentName = "PayForPremiumPassive";
      break;
    default:
  }
  fileName = `${fileName}_${data.insured_is_po ? "PO" : "NotPO"}_${
    data.has_Table ? "Table" : "NoTable"
  }_${paymentName}_${data.is_online ? "Online" : "NotOnline"}_${
    data.co_Payment ? "CoPayment" : "NoCoPayment"
  }_${data.caseNo}`;
  return fileName;
}

export function log(key, value) {
  if (ENVIRONMENT().enableDebug) {
    if (typeof value === "object") {
      console.log(`TVT ${key} = ` + JSON.stringify(value));
    } else {
      console.log(`TVT ${key} = ` + value);
    }
  }
}

export function convertTimeToDDMMYYYY(eventDate) {
  let isoDateStr = new Date(eventDate).toISOString();
  isoDateStr = isoDateStr.substring(0, isoDateStr.indexOf("T"));
  isoDateStr = isoDateStr.split("-").reverse().join("-");
  return isoDateStr;
}
