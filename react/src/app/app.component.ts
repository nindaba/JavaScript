import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import{take} from 'rxjs/operators'
interface Person{
  id:string;
  name:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title :string;
  people : Observable<Person>;
  constructor(private http:HttpClient){
    this.people = new Observable<Person>();
    this.title = 'react';
  }
  ngOnInit(){
    this.people = Observable.
    .create(
      (person: Observer<Person>) =>new EventSource('http://localhost:9045/get')
      .addEventListener(
        'message',event => person.next(event.data)
        )
    )



    // .pipe(take(1))
    // .subscribe(p=> console.log(p)
    // )

    // this.http
    // .get<Person>('http://localhost:9045/get')
    // .subscribe(person=> this.people
    //   .push(person)
    // )
    // ;

  }
}
