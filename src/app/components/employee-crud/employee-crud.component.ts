import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { GenderPrefixPipe } from '../../pipes/gender-prefix.pipe';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, GenderPrefixPipe],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  employees = [
    { id: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { id: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { id: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { id: 102, name: 'sita', sal: 9000, gender: 'female' },
    { id: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];
  selectedEmployee!: any;
  newEmployee: any = { id: 0, name: '', sal: 0, gender: '' }
  isAdd: boolean = true;
  selectedInd: any;

  constructor() {
    if (this.isAdd) {
      this.selectedEmployee = { ...this.newEmployee };
    }
  }
  editEmployee(emp: any, ind: any) {
    this.isAdd = false;
    this.selectedEmployee = { ...emp };
    this.selectedInd = ind;
  }

  saveEditedEmployee() {
    // let indexOfEditedEmp = this.employees.findIndex((emp) => emp.id === this.selectedEmployee.id);
    this.employees[this.selectedInd] = { ...this.selectedEmployee };
  }
  cancelChanges() {
    this.selectedEmployee = { ...this.employees[this.selectedInd] };
  }

  addEmployee() {
    this.employees.push(this.selectedEmployee);
    this.selectedEmployee = this.newEmployee;
    Swal.fire('Added', 'Employee Added Succesfully', 'success')
  }

  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
    Swal.fire({
      title: "<strong>Employee Details</strong>",
      icon: "info",
      html: `
        <div>
          <div>Emp id: ${this.selectedEmployee.id}</div>
          <div>Emp Name: ${this.selectedEmployee.name}</div>
          <div>Emp Salary: ${this.selectedEmployee.sal}</div>
          <div>Emp Gender: ${this.selectedEmployee.gender}</div>
        </div>
      `})
  }

  deleteEmployee(ind: any) {
    Swal.fire({
      title: "Do you want to Delete ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.employees.splice(ind, 1);
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not Deleted", "", "info");
      }
    });

  }
}
