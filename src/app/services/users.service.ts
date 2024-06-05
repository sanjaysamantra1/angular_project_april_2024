import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.httpClient.get(url,{ observe: 'response' });
    // returns an observable
  }
}
