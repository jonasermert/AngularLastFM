import { Routes, RouterModule } from "@angular/router";

// @ts-ignore
import { DetailViewComponent } from "../detail-view.component";

const DETAILVIEW_ROUTES: Routes = [
  { path: '', component: DetailViewComponent}
];

export const detailviewRouting = RouterModule.forChild(DETAILVIEW_ROUTES);
