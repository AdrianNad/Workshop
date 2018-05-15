import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LeftMenuComponentComponent } from './left-menu-component/left-menu-component.component';
import {DataListModule, MenuModule, ButtonModule, DataTableModule, SharedModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponentComponent,
    HeaderComponentComponent,
    LeftMenuComponentComponent
  ],
  imports: [
    BrowserModule,
    DataListModule,
    MenuModule,
    ButtonModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
