import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { PipesComponent } from '../pipes/pipes.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    MyModalComponent,
    PipesComponent,
    EmployeeCrudComponent,
    ParentComponent
  ],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
  inputs:['title']
})
export class CenterComponent {
  title:any;
}
