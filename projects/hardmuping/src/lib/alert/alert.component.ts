import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-alert',
  template: `
    <div>
      <p>alert works!</p>
    </div>
  `,
  styleUrls: ['alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
