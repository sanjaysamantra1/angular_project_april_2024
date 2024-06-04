import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.fetchUsersJavascript()
    this.fetchUsersAngular()
  }
  fetchUsersJavascript() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      (res) => {
        res.json().then(
          (users) => {
            console.log(users)
          },
          (err) => { console.log(err) },
        )
      },
      (err) => { console.log(err) },
    );
  }

  fetchUsersAngular() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (resp) => {
        console.log(resp)
      }
    )
  }
}
