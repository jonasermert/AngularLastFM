import { Routes, RouterModule } from "@angular/router";

// @ts-ignore
import { HomeComponent } from "Core/components/home/home.component";
import {DetailViewComponent} from "./Core/components/detail-view/detail-view.component";
import {MainViewComponent} from "./Core/components/main-view/main-view.component";

const ROUTES: Routes = [
  { path: '', component: HomeComponent }  ,
  { path: 'home', loadChildren: './home/home.module#HomeModule'},

  { path: '', component: DetailViewComponent }  ,
  { path: 'detailview', loadChildren: './detail-view/detail-view.module#DetailViewModule'},

  { path: '', component: MainViewComponent }  ,
  { path: 'mainview', loadChildren: './main-view/main-view.module#MainViewModule'},

];

export const routing = RouterModule.forRoot(ROUTES);
