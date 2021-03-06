import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//to make http request
//-->inject HttpClient object from root injector
constructor(private hc:HttpClient){}
//-->make http req on that object
  getData():Observable<object[]>  //data is present in observable
  {
   return  this.hc.get<object[]>('https://jsonplaceholder.typicode.com/posts');
  }
  //make another http get req
  getUserData():Observable<object>
  {
    return  this.hc.get('https://reqres.in/api/users');
  }
}
