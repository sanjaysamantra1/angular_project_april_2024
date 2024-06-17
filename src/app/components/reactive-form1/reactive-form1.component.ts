import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyEmailValidator } from '../../utils/email-validator';
import { ageRangeValidator } from '../../utils/agerange-validator';

@Component({
  selector: 'app-reactive-form1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form1.component.html',
  styleUrl: './reactive-form1.component.css'
})
export class ReactiveForm1Component {
  registerForm: any;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.usingFormGroup();
    this.usingFormBuilder();
  }
  usingFormGroup() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('sachin', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('tendulkar', [Validators.required, Validators.pattern(/[a-z]/)]),
      email: new FormControl('', [Validators.required, MyEmailValidator.isValidEmail]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl()
      })
    });
  }

  usingFormBuilder() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('sachin', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('tendulkar', [Validators.required, Validators.pattern(/[a-z]/)]),
      email: new FormControl('', [Validators.required, MyEmailValidator.isValidEmail]),
      age: new FormControl('', [Validators.required, ageRangeValidator(18, 45)]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl()
      })
    }, { updateOn: 'change' })
  }
}
