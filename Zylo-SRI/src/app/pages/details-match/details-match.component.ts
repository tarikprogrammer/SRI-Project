import {Component, OnInit} from '@angular/core';
import {CatchDataService} from "../../services/catch-data.service";

@Component({
  selector: 'app-details-match',
  standalone: true,
  imports: [],
  templateUrl: './details-match.component.html',
  styleUrl: './details-match.component.css'
})
export class DetailsMatchComponent implements OnInit{
  constructor(public data:CatchDataService) {
  }

  ngOnInit(): void {
    console.log("test test");
  }
}
