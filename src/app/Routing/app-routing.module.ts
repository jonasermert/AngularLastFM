import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../Core/components/home/home.component';
import { DetailViewComponent } from '../Core/components/detail-view/detail-view.component';
import { MainViewComponent } from '../Core/components/main-view/main-view.component';
import { FooterComponent } from '../Shared/components/footer/footer.component';
import { HeaderComponent } from '../Shared/components/header/header.component';
import { NavigationComponent } from '../Shared/components/navigation/navigation.component';
import { SearchComponent } from '../Shared/components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail-view', component: DetailViewComponent},
  { path: 'main-view', component: MainViewComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
