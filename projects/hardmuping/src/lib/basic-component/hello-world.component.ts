import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  showButton = false;
  constructor() {}

  ngOnInit(): void {}
}
