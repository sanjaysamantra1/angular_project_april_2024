import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  standalone: true,
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  constructor(public mathService: MathService) {
  }

  ngOnInit() {
    console.log('Math2 Component')
    console.log(this.mathService.a);
    console.log(this.mathService.b);
    // console.log(this.mathService.c);
    const addResult = this.mathService.add();
    console.log('Additon ', addResult)
    const mulResult = this.mathService.mul();
    console.log('Multiplication ', mulResult)
  }
}
