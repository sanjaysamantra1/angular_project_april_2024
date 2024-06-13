import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { PipesComponent } from '../pipes/pipes.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { ParentComponent } from '../parent/parent.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { TrafficLightComponent } from '../../component/traffic-light/traffic-light.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { Math3Component } from '../math3/math3.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { UsersComponent } from '../users/users.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { Message3Component } from '../message3/message3.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';

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
    ParentComponent,
    UserDetailsComponent,
    TrafficLightComponent,
    Math1Component,
    Math2Component,
    Math3Component,
    HttpDemo1Component,
    UsersComponent,
    ProductListComponent,
    ObservableDemo1Component,
    ObservableDemo2Component,
    ObservableDemo3Component,
    SubjectDemo1Component,
    Message1Component,
    Message2Component,
    Message3Component,
    TodoListComponent,
    TodoAddComponent
  ],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
  inputs: ['title']
})
export class CenterComponent {
  title: any;
}
