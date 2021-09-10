import { Routes, RouterModule } from "@angular/router";

import {SearchComponent} from "../Shared/components/search/search.component";

const SEARCH_ROUTES: Routes = [
  { path: '', component: SearchComponent}
];

export const homeRouting = RouterModule.forChild(SEARCH_ROUTES);
