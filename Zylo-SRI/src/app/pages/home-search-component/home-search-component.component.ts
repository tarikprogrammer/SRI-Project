import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SriLogoComponent} from "../../components/sri-logo/sri-logo.component";
import {SearchComponent} from "../../components/search/search.component";
import {FeaturesComponent} from "../../components/features/features.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home-search-component',
  standalone: true,
  imports: [
    NavbarComponent,
    SriLogoComponent,
    SearchComponent,
    FeaturesComponent,
    FooterComponent
  ],
  templateUrl: './home-search-component.component.html',
  styleUrl: './home-search-component.component.css'
})
export class HomeSearchComponentComponent {

}
