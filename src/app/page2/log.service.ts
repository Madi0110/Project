import { Injectable } from '@angular/core';
@Injectable()

export class LoggService {
  log(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
}
