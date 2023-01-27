import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SearchBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
