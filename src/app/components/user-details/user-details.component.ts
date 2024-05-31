import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userId: number = 1;
  user: any;
  userDetailsSubcription: Subscription = new Subscription;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchUserDetails();
  }
  ngDoCheck() {
    // this.fetchUserDetails();
  }

  fetchUserDetails() {
    const url = `https://jsonplaceholder.typicode.com/users/${this.userId}`;
    
    this.userDetailsSubcription = this.http.get(url).subscribe((userResponse: any) => {
      this.user = userResponse;
    });
  }

  ngOnDestroy() {
    this.userDetailsSubcription.unsubscribe();
  }

}
