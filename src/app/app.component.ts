import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    interface test {
      s: string,
      n: number
    }

    let o: test;
    let o1 = {
      s: 'asd',
      n: 1,
      a: true
    };

    o = o1;

    console.log(o);
  }
}
