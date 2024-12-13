import { Component } from '@angular/core';
import {CatchDataService} from "../../services/catch-data.service";

@Component({
  selector: 'app-devider',
  standalone: true,
  imports: [],
  templateUrl: './devider.component.html',
  styleUrl: './devider.component.css'
})
export class DeviderComponent {
  tous:boolean =true;
  equipe:boolean =false
  match:boolean =false;
  query=sessionStorage.getItem('query');
  constructor(private  catchData :CatchDataService) {
  }
  filterByEquipe() {
    this.tous =false;
    this.equipe = true;
    this.match = false;
    /*this.catchData.data = this.catchData.data.result_club;*/
    console.log(this.catchData.data)
    this.catchData.getDataByQyery(this.query ? this.query :'').subscribe({
      next:(response:any)=>{
        this.catchData.data = response;
         this.catchData.data = this.catchData.data.result_club;

      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  filterByMatch() {
    this.tous =false;
    this.equipe = false;
    this.match = true;
    this.catchData.getDataByQyery(this.query ? this.query :'').subscribe({
      next:(response:any)=>{
        this.catchData.data = response;
        this.catchData.data = this.catchData.data.results_match;

      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }
}
