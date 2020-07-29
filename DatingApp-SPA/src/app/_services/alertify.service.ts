import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }
 // tslint:disable-next-line: typedef
 confirm(message: string, OkCallback: () => any) {
  alertify.confirm(message, (e: any) => {
    if (e) {
      OkCallback();
    } else {
    }
  });
}
    success(message: string) {
  alertify.success(message);
}
 error(message: string) {
  alertify.error(message);
}
warning(message: string) {
  alertify.warning(message);
}
message(message: string) {
  alertify.message(message);
}
}
