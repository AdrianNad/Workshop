import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LeftMenuComponentComponent } from './left-menu-component/left-menu-component.component';
import { PanelMenuModule, DataListModule, MenuModule, ButtonModule, DataTableModule, SharedModule} from 'primeng/primeng';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RightMenuComponentComponent } from './right-menu-component/right-menu-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceCardsComponent } from './service-cards/service-cards.component';
import {ServiceListComponentComponent} from './service-list-component/service-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponentComponent,
    HeaderComponentComponent,
    LeftMenuComponentComponent,
    RightMenuComponentComponent,
    ServiceCardsComponent,
    ServiceListComponentComponent
  ],
  imports: [
    BrowserModule,
    DataListModule,
    MenuModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
