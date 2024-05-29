import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs:['aChild1','child2Ref','bParent','title']
})
export class Child1Component {
  aChild1:any;
  child2Ref:any;
  bParent:any;
  title:any;
}
