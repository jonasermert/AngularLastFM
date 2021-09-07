import { Routes, RouterModule } from "@angular/router";


// @ts-ignore
import { MainViewComponent } from "Core/components/main-view/main-view.component";

const MAINVIEW_ROUTES: Routes = [
  { path: '', component: MainViewComponent}
];

export const homeRouting = RouterModule.forChild(MAINVIEW_ROUTES);
