import {Component, OnInit} from '@angular/core';
import {NavTopComponent} from "../../components/nav-top/nav-top.component";
import {DeviderComponent} from "../../components/devider/devider.component";
import {ResultOfSearchComponent} from "../../components/result-of-search/result-of-search.component";
import {AboutZyloComponent} from "../../components/about-zylo/about-zylo.component";
import {CatchDataService} from "../../services/catch-data.service";

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [
    NavTopComponent,
    DeviderComponent,
    ResultOfSearchComponent,
    AboutZyloComponent
  ],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.css'
})
export class ResultSearchComponent  implements OnInit{
constructor(private catchData :CatchDataService ) {
}

  ngOnInit(): void {

  }

}
