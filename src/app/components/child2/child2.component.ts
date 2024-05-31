import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['cars'],
  outputs: ['bEvent'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {
  @Input() a: any;
  cars: any;

  b = 200;
  c = 300;
  constructor(private cdr:ChangeDetectorRef){

  }

  bEvent = new EventEmitter();

  sendDataToParent() {
    this.bEvent.emit(this.b);
  }

  refresh(){
    this.cdr.markForCheck();
  }

ngOnChanges(){
console.log('onchanges')
  this.cdr.markForCheck();
}

  ngDoCheck(){
    console.log('docheck')
  }
}
