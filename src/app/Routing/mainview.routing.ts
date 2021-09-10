import { Routes, RouterModule } from "@angular/router";


// @ts-ignore
import { MainViewComponent } from "Core/components/main-view/mainview.component";

const MAINVIEW_ROUTES: Routes = [
  { path: 'main-view', component: MainViewComponent}
];

export const homeRouting = RouterModule.forChild(MAINVIEW_ROUTES);
