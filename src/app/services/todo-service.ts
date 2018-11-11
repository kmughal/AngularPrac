import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TodoService {
  private _todo = new  Subject<string>();
  todo$ = this._todo.asObservable();

  add(value: string) {
     this._todo.next(value);
  }
}
