import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  students:any=[];
  weather:any[];
  constructor(private dataService:DataService){}
  
  ngOnInit(){
    this.dataService.GetStudententData().subscribe((data)=>{
      this.students=data.students;
    });

    this.dataService.GetWeater().subscribe((info)=>{
      this.weather=info.weather;
    });
  }

}
