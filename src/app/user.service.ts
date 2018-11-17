import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  numberSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  getUsersObservable() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap(users => {
        console.log('OBSERVABLE', users);
      })
    );
  }

  getUsersPromise() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(users => {
          console.log('PROMISE', users);
        })
      )
      .toPromise();
  }
}
