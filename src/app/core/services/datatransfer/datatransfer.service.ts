import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  private data: any;

  setData(value: any) {
    // remove confirm_password
    Reflect.deleteProperty(value,'confirm_password');
  
    this.data = value;
  }

  getData() {
    return this.data;
  }
}
