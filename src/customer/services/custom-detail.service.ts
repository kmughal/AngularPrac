import { Injectable } from "@angular/core";

@Injectable()
export class FakeCustomerDetailService {

  constructor() {
    this.initFakeNames();
  }
  static counter = 0;
  names: Array<string>;

  private initFakeNames() {
    FakeCustomerDetailService.counter = FakeCustomerDetailService.counter + 1;
    this.names = [String(FakeCustomerDetailService.counter),"khurram" , "mohib" , String(new Date())];
  }
}
