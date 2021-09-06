import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Core/components/home/home.component';
import { MainViewComponent } from './Core/components/main-view/main-view.component';
import { DetailViewComponent } from './Core/components/detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainViewComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
