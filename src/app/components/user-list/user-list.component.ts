import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.users = data;
    })
  }
}
