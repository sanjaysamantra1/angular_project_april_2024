import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  // inputs: ['aa'],
  outputs: ['bEvent']
})
export class Child2Component {
  @Input() a: any;
  b = 200;
  c = 300;

  bEvent = new EventEmitter();

  sendDataToParent() {
    this.bEvent.emit(this.b);
  }
}
