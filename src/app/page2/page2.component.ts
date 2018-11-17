import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @ViewChild('name')
  name: ElementRef;
  constructor() {}

  ngOnInit() {
    fromEvent(this.name.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(text => console.log('API call', text));
  }
}
