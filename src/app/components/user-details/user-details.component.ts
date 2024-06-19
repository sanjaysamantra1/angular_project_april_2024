import { Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userId: number | undefined;
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {
  }

  ngOnInit() {
    /* this.activatedRoute.params.subscribe((myParams: any) => {
      console.log(myParams);
      this.userId = +myParams['id'];
      this.http.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`).subscribe(response => {
        this.user = response;
      })

    }); */

    this.activatedRoute.data.subscribe((data: any) => {
      this.user = data.userInfo;
    });
  }

  goBack() {
    // this.location.back();
    this.location.historyGo(-2)
  }
}
