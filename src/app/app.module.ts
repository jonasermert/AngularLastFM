import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Core/components/home/home.component';
import {MainViewComponent} from './Core/components/main-view/main-view.component';
import { DetailViewComponent } from './Core/components/detail-view/detail-view.component';
import {HeaderComponent} from "./Shared/components/header/header.component";
import {FooterComponent} from "./Shared/components/footer/footer.component";
import {SearchComponent} from "./Shared/components/search/search.component";
import {SharedModule} from "./Shared/shared.modules";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainViewComponent,
    DetailViewComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
