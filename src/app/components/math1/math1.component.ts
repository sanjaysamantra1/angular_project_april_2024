import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  standalone: true,
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  public x = 100;
  private y = 200;

  constructor(public mathService: MathService) {
  }

  ngOnInit() {
    console.log('Math1 Component')
    console.log(this.mathService.a);
    console.log(this.mathService.b);
    // console.log(this.mathService.c);
    const addResult = this.mathService.add();
    console.log('Additon ', addResult)
    const mulResult = this.mathService.mul();
    console.log('Multiplication ', mulResult)
  }

  updateA() {
    this.mathService.a = 15;
  }
}
