import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form1.component.html',
  styleUrl: './template-form1.component.css'
})
export class TemplateForm1Component {
  user: any;

  constructor() {

  }

  ngOnInit() {
    this.user = {
      "firstName": "Sachin",
      "lastName": "Tendulkar",
      "email": "sachin@gmail.com",
      "address": {
        "street": "Marathahalli",
        "city": "Bangalore",
        "pin": "560037"
      }
    }
  }

  submitMyForm(formData: any) {
    console.log(formData)
    console.log(formData.value)
  }
  resetMyForm(formData: any) {
    console.log(formData)
    console.log(formData.value)
  }
}
