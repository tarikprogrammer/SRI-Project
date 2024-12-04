import { Routes } from '@angular/router';
import {HomeSearchComponentComponent} from "./pages/home-search-component/home-search-component.component";
import {ResultSearchComponent} from "./pages/result-search/result-search.component";

export const routes: Routes = [
  {path: '', component: HomeSearchComponentComponent},
  {path: 'search', component: ResultSearchComponent},
];
