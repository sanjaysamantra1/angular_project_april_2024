import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-demo1.component.html',
  styleUrl: './form-demo1.component.css'
})
export class FormDemo1Component {
  name: string = 'Sanjay';
  age: number = 50;
}
