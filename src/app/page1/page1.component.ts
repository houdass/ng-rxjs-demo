import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsersObservable(); // LAZY
    this.userService.getUsersPromise(); // EAGER

    const source = interval(1000);

    /* this.subscription = source.subscribe(
      value => console.log('Next : ', value),
      err => console.log('Error : ', err),
      () => console.log('Complete')
    ); */

    this.userService.numberSubject.subscribe(value => console.log('Observer 1 ', value));

    this.userService.numberSubject.next(2);
    this.userService.numberSubject.subscribe(value => console.log('Observer 2 ', value));

    this.userService.numberSubject.next(3);
    this.userService.numberSubject.next(4);
  }

  ngOnDestroy() {
    console.log('Page1 Unsubscribe/Destroyed');
    this.subscription.unsubscribe();
  }
}
