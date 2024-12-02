import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-sri-logo',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './sri-logo.component.html',
  styleUrl: './sri-logo.component.css'
})
export class SriLogoComponent {
  date :Date = new Date();
  greeting ?: string;
  constructor() { }

  ngOnInit(): void {
    this.greeting = this.date.getHours()<=12 && this.date.getHours()>=0 ? "Bonjour" : "Bonsoir";
  }
}
