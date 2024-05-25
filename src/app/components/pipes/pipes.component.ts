import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  name = 'Sachin tEnDuLkAr';
  mySal = 5000;
  myDOB = new Date();
  user = { name: 'sachin', add: 'mumbai', age: 50 };
  myMap = new Map();
  arr = [10, 20, 30, 40, 50, 60];
  msg: string = '';

  constructor() {
    this.myMap.set('a', 10);
    this.myMap.set('b', 10);
  }
}
