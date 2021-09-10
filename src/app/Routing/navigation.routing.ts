import { Routes, RouterModule } from "@angular/router";
import {NavigationComponent} from "../Shared/components/navigation/navigation.component";

const NAVIGATION_ROUTES: Routes = [
  { path: 'navigation', component: NavigationComponent}
];

export const homeRouting = RouterModule.forChild(NAVIGATION_ROUTES);
