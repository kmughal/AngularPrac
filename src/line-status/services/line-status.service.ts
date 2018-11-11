import { Injectable, Input } from '@angular/core';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Injectable()
export class LineStatusService {

  getLineStatus(): Observable<AjaxResponse> {
    return ajax('https://api.tfl.gov.uk/Line/Mode/tube%2Coverground%2Ctflrail%2Cdlr%2Ctram/Status?detail=true')
  }
}
