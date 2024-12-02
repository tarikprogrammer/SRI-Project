import { Component } from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
