import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-alert',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
