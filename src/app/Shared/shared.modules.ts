import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// @ts-ignore
import { NavigationComponent } from './components/navigation/navigation.component';
// @ts-ignore
import { SearchComponent } from './components/search/search.component';
import { ApiService } from './services/api.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    SearchComponent,
  ],
  exports: [
    NavigationComponent,
    SearchComponent,
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule {}
