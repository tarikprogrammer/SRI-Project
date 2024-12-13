import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {WeatherService} from "../../services/weather.service";
import {CatchDataService} from "../../services/catch-data.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-nav-top',
  standalone: true,
  imports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './nav-top.component.html',
  styleUrl: './nav-top.component.css'
})
export class NavTopComponent implements OnInit{
  city: string = 'مراكش';
  weatherData: any = null;
  weatherIconUrl:any=null;
  querySearch:string="";
  form!:FormGroup;
  constructor(private weatherService:WeatherService,public catchdata:CatchDataService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe((response:any) => {
      this.weatherData = response;
      console.log(this.weatherData)
      this.weatherIconUrl = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
    });
    console.log(this.catchdata.currentQuery)

  }

  goToSearch(){

    this.catchdata.getDataByQyery(this.catchdata.currentQuery).subscribe({
      next:(response:any)=>{
       this.catchdata.data = response;
        sessionStorage.setItem("query",this.catchdata.currentQuery);
       /* this.catchdata.data = this.catchdata.data.result_club;*/

      },
      error:(err:any)=>{
        console.log(err)
      }
    })

  }

}
