import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    Child1Component,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  // inputs: ['title']
})
export class ParentComponent {
  a: number;
  name: string;
  bParent: any;
  title: any = 'My Title';
  myhttp: any;
  cars = ['tata', 'honda'];

  receiveBData(data: any) {
    this.bParent = data;
  }

  constructor() { // Dependency Injection
    // constructor(private myhttp : HttpClient) { // Dependency Injection
    console.log("Parent constructor");
    this.a = 100;
    this.name = 'Sachin';
    this.myhttp = inject(HttpClient);
  }
  ngOnInit() {
    console.log('Parent ngOnInit');

    this.myhttp.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      console.log(response)
    });
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

  add(a: any, b: any) {
    console.log(a + b)
  }
}
