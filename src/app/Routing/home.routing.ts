import { Routes, RouterModule } from "@angular/router";


// @ts-ignore
import { HomeComponent } from "Core/components/home/home.component";

const HOME_ROUTES: Routes = [
  { path: 'home', component: HomeComponent}
];

export const homeRouting = RouterModule.forChild(HOME_ROUTES);
