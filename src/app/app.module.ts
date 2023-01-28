import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from "ngx-toastr";

import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { SearchBarComponent } from './layout/search-bar/search-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { PokeItemComponent } from './shared/components/poke-item/poke-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
