import { Routes, RouterModule } from "@angular/router";
import {HeaderComponent} from "../Shared/components/header/header.component";


const HEADER_ROUTES: Routes = [
  { path: 'header', component: HeaderComponent}
];

export const homeRouting = RouterModule.forChild(HEADER_ROUTES);
