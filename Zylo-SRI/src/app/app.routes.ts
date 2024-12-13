import { Routes } from '@angular/router';
import {HomeSearchComponentComponent} from "./pages/home-search-component/home-search-component.component";
import {ResultSearchComponent} from "./pages/result-search/result-search.component";
import {DetailsComponent} from "./pages/details/details.component";
import {DetailsMatchComponent} from "./pages/details-match/details-match.component";

export const routes: Routes = [
  {path: '', component: HomeSearchComponentComponent},
  {path: 'search', component: ResultSearchComponent},
  {path:'search/:equipe',component:DetailsComponent},
  {path:'match',component:DetailsMatchComponent}
];
