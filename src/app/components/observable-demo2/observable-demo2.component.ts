import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, from, fromEvent, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.forkJoinDemo();
    // this.withoutMergemap();
    // this.withMergemap();
    // this.concatMapDemo();
    this.exhaustMapDemo();
  }

  forkJoinDemo() {
    const userNames = [2, 5, 10];
    let requests = userNames.map(userName => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userName}`);
    });
    forkJoin(requests).subscribe((responses: any) => {
      console.log(responses);
    });
  }
  withoutMergemap() {
    let userIdPublisher = of(1, 3, 5, 7, 9);
    // API Call
    userIdPublisher.subscribe((userIds: any) => {
      userIds.forEach((userId: any) => {
        this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe((userDetails: any) => {
          console.log(userDetails)
        })
      })
    });
  }

  withMergemap() {
    const usersPublisher = of(1, 2, 3, 4);

    usersPublisher.pipe(mergeMap((value: any, ind: number) => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${value}`)
    })).subscribe((details: any) => {
      console.log(details)
    })

  }
  concatMapDemo() {
    const usersPublisher = of(1, 2, 3, 4);

    usersPublisher.pipe(concatMap((value: any) => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${value}`)
    })).subscribe((details: any) => {
      console.log(details)
    })

  }


  exhaustMapDemo() {
    const clicks = fromEvent(document, 'click');

    const result = clicks.pipe(
      exhaustMap(() => this.httpClient.get('https://fakestoreapi.com/products'))
    );
    result.subscribe((data) => console.log(data));

    /* clicks.subscribe(val => {
      this.httpClient.get('https://fakestoreapi.com/products').subscribe(data=>{
        console.log(data)
      })
    }) */

  }

}
