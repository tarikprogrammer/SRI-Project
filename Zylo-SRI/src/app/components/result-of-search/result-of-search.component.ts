import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CatchDataService} from "../../services/catch-data.service";
import {LowerCasePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-of-search',
  standalone: true,
  imports: [
    LowerCasePipe
  ],
  templateUrl: './result-of-search.component.html',
  styleUrl: './result-of-search.component.css'
})
export class ResultOfSearchComponent implements OnInit{
  query= sessionStorage.getItem('query');
  constructor(public catchData:CatchDataService,private router:Router) {
  }

  ngOnInit(): void {
    this.catchData.getDataByQyery(this.query ? this.query : '').subscribe({
      next:(response:any)=>{
        this.catchData.data = response;

      },
      error:(err:any)=>{
        console.log(err)
      }
    })
    console.log(this.query)
  }


  sendData(result_club: any) {
    this.catchData.currentData = result_club;
    console.log("from send data"+JSON.stringify(this.catchData.currentData))
    this.router.navigate(['/search', this.catchData.data.result_club['Nom de club'].split(" ").at(0).toLowerCase()]);
  }
  sendDataMatch(data:any){
    this.catchData.currentData = data;
    console.log("from send data"+JSON.stringify(this.catchData.currentData))
    this.router.navigateByUrl('/match')
  }
}
