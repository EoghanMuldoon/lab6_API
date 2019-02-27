import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
   
  GetStudententData():Observable<any>{
    return this.http.get("https://jsonblob.com/api/jsonblob/40f97c76-3a99-11e9-9959-8b4abba8286b");
    
  }
  GetWeater():Observable<any>{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=2582ae406be223e692f82d774db29d14");
    
  }
}
