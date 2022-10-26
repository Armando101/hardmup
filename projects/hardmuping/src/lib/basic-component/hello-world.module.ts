import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [CommonModule],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {}
