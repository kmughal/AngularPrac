import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LineStatusService } from './services/line-status.service';

@Component({
  selector : 'app-line-status',
  styleUrls : ['./line-status.component.scss'],
  templateUrl : './line-status.component.html',
  providers : [LineStatusService],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['heading']
})
export class LineStatusComponent implements OnInit {
  lines = new Array<RootObject>();
  @Input() heading: string;
  @Output() linesLoaded = new EventEmitter<Boolean>();

  constructor(private lineStatusService: LineStatusService) {

  }

  ngOnInit() {
    this.loadLineStatus();
  }

  loadLineStatus() {
    this.lineStatusService.getLineStatus()
    .subscribe(response => {
      this.lines = this.createViewModelWithDisruptionsOnly(response.response as RootObject[]);
      this.linesLoaded.emit(true);
    });
  }

  private createViewModelWithDisruptionsOnly(lines: Array<RootObject>) {
    if (lines == null || lines.length === 0) {
      return new Array<RootObject>();
    }
    return lines.filter(x => this.filterForDisruptions(x.lineStatuses).length > 0);
  }

  filterForDisruptions(lineStatus: LineStatus[]) {
    return lineStatus.filter(ls => ls.statusSeverity !== 10);
  }
}
