import { Routes, RouterModule } from "@angular/router";



import { FooterComponent } from "../Shared/components/footer/footer.component";

const FOOTER_ROUTES: Routes = [
  { path: 'footer', component: FooterComponent}
];

export const homeRouting = RouterModule.forChild(FOOTER_ROUTES);
