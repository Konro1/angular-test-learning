import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public test() {
    return true;
  }

  public getA() {
    return 'A';
  }
}
