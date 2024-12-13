import { Component } from '@angular/core';
import {CatchDataService} from "../../services/catch-data.service";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(public data:CatchDataService) {
  }
}
