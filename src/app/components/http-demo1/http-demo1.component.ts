import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css',
  providers: []
})
export class HttpDemo1Component {
  allSubscriptions: Subscription[] = [];

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
    const subscription1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (resp) => {
        console.log(resp)
      }
    )
    this.allSubscriptions.push(subscription1);
  }

  ngOnDestroy() {
    this.allSubscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
