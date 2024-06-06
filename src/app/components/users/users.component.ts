import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User, UserModel } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];
  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
      console.log(response);
      // Array of Objects
      // Array Of Employees
    });
  }
}
