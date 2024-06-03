import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math3',
  standalone: true,
  imports: [],
  templateUrl: './math3.component.html',
  styleUrl: './math3.component.css',
  providers: [MathService]
})
export class Math3Component {
  constructor(public mathService: MathService) {
  }
}
