import { Component, Input, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { delay, find, map, Observable, of, pluck, single } from 'rxjs';
// import { Hello } from './hello.model';

export interface Hello {
  prop1: string;
  prop2: HelloLittle;
  prop3: HelloLittle[];
}

export interface HelloLittle {
  sth: string;
}

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! </h1> <br> <h2>{{(propString4c | async)}}</h2> `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  public propString4c: Observable<any>;
  // .map(res => {

  ngOnInit(): void {
    console.log('HelloComponent');
    // this.hello.subscribe((res) => console.log(res));

    // const example = this.hello.pipe(pluck('prop1')); // ok
    // const example = this.hello.pipe(pluck('prop2')); // ok
    // example.subscribe((res) => console.log(res)); // ok!

    // const example = this.hello.pipe(pluck('prop2')); // ok
    // example.subscribe((res) => console.log(res)); // ok!

    // const example = this.hello.pipe(pluck('prop2')); // ok
    // example.subscribe((res) => console.log(res.sth)); // ok!

    // const example = this.hello.pipe(pluck('prop2')); // ok emit property
    // this.propString4c = example.pipe(map(({ sth }) => sth)); //ok

    // const example = this.hello.pipe(map(({ prop2 }) => prop2)); // ok the same as pluck
    // example.subscribe((res) => console.log(res)); // ok!

    // const example = this.hello.pipe(map(({ prop2 }) => prop2)); // ok the same as pluck
    // this.propString4c = example.pipe(map(({ sth }) => sth)); //ok

    // prop3

    // const example = this.hello.pipe(map(({ prop3 }) => prop3)); // ok the same as pluck
    // example.subscribe((res) => console.log(res)); // ok! - array output

    // const example = this.hello.pipe(
    //   map(({ prop3 }) => prop3.filter((res) => res.sth === 'PropString4b'))
    // ); // ok the same as pluck with filtering at the same time
    // example.subscribe((res) => console.log(res[0].sth)); // ok! gives PropString4b

    const example = this.hello.pipe(
      map(({ prop3 }) => prop3.find((res) => res.sth === 'PropString4b'))
    ); // ok the same as pluck with filtering at the same time
    example.subscribe((res) => console.log(res.sth)); // ok! gives PropString4b
  }

  public hello: Observable<Hello> = of({
    prop1: 'PropString1',
    prop2: { sth: 'PropString2a' },
    prop3: [
      { sth: 'PropString4a' },
      { sth: 'PropString4b' },
      { sth: 'PropString4c' },
    ],
  }).pipe(delay(2000));
}
// title: 'Simulating HTTP Requsts'title: 'Simulating HTTP Requsts'title: 'Simulating HTTP Requsts'
