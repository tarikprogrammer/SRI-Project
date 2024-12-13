import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {CatchDataService} from "../../services/catch-data.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  query:string="";
  ngOnInit() {
  }

  constructor(private router:Router,private catchdata:CatchDataService) {
  }

  goToSearch(){
    this.catchdata.getDataByQyery(this.query).subscribe({
      next:(response:any)=>{
        console.log(response)
        this.catchdata.currentQuery = this.query;
        sessionStorage.setItem("query",this.query);
        this.catchdata.data = response;
        this.router.navigateByUrl("search")
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

}
