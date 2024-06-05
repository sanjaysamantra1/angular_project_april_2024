import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private usersService: UsersService) {

  }
  ngOnInit() {


    const userObs = this.usersService.getAllUsers();
    console.log(userObs);
    userObs.subscribe((res: any) => {
      console.log(res);
      console.log(res.status);
      console.log(res.body);
    }
      , err => {
        console.log('Error')
      },
      () => {
        console.log('Completed')
      }
    );

    console.log('24 line');
  }
}
