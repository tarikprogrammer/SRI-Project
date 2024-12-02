import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '70174706878df001fb7e11511d135078';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http:HttpClient) { }


  getWeather(city: string){
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
