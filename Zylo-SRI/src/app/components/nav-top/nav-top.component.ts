import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-nav-top',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.css'
})
export class NavTopComponent implements OnInit{
  city: string = 'مراكش';
  weatherData: any = null;
  weatherIconUrl:any=null;
  constructor(private weatherService:WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe((response:any) => {
      this.weatherData = response;
      console.log(this.weatherData)
      this.weatherIconUrl = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
    });

  }

}
