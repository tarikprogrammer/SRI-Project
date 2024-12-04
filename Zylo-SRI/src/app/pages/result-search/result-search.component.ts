import { Component } from '@angular/core';
import {NavTopComponent} from "../../components/nav-top/nav-top.component";
import {DeviderComponent} from "../../components/devider/devider.component";
import {ResultOfSearchComponent} from "../../components/result-of-search/result-of-search.component";

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [
    NavTopComponent,
    DeviderComponent,
    ResultOfSearchComponent
  ],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.css'
})
export class ResultSearchComponent {

}
