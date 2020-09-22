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
}
