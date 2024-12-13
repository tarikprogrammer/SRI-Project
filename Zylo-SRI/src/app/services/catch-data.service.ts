import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CatchDataService {
  API_URL:string = "http://127.0.0.1:5000/search-teams"
  currentQuery:string ="";
  data:any;
  currentData:any;
  constructor(private http:HttpClient) { }


  // get data from flask

  getDataByQyery(query:string){
    return this.http.post(this.API_URL,{input:query})
  }
}
