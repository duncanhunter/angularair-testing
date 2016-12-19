import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class JokeService {

  constructor(private http: Http) { }

  getJoke(): Observable<any> {
    return this.http.get(`http://api.icndb.com/jokes/random`)
      .map(response => response.json().value.joke)
      .catch(e => Observable.throw(e));
  }


}
