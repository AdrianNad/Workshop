import 'jquery';
import 'moment';
import 'fullcalendar';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ContentComponentComponent} from './content-component/content-component.component';
import {HeaderComponentComponent} from './header-component/header-component.component';
import {LeftMenuComponentComponent} from './left-menu-component/left-menu-component.component';
import {PanelMenuModule, DataListModule, MenuModule, ButtonModule, DataTableModule, SharedModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RightMenuComponentComponent} from './right-menu-component/right-menu-component.component';
import {AppRoutingModule} from './app-routing.module';
import {ServiceCardsComponent} from './service-cards/service-cards.component';
import {ServiceListComponentComponent} from './service-list-component/service-list-component.component';
import {FooterComponent} from './footer/footer.component';
import {CardModule} from 'primeng/card';
import {PickListModule} from 'primeng/picklist';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {ContactComponent} from './contact/contact.component';
import {RulesComponent} from './rules/rules.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RepairHistoryComponent} from './repair-history/repair-history.component';
import {ContactMessageComponent} from './contact-message/contact-message.component';
import {MessagesComponent} from './messages/messages.component';
import {FieldsetModule} from 'primeng/fieldset';
import {MessageResponseComponent} from './message-response/message-response.component';
import {DiagnosisSchedulerComponent} from './diagnosis-scheduler/diagnosis-scheduler.component';
import {ScheduleModule} from 'primeng/schedule';
import { DiagnosisVisitCreatorComponent } from './diagnosis-visit-creator/diagnosis-visit-creator.component';
import {GrowlModule} from 'primeng/growl';
import { AccountManagementComponent } from './account-management/account-management.component';
import { OrderedRepairsComponent } from './ordered-repairs/ordered-repairs.component';
import { RepairComponent } from './repair/repair.component';
import { DiagnosisListComponent } from './diagnosis-list/diagnosis-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UserServiceService} from './services/user-service.service';
import {TokenStorageService} from './services/token-storage.service';
import {AuthService} from './services/auth.service';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponentComponent,
    HeaderComponentComponent,
    LeftMenuComponentComponent,
    RightMenuComponentComponent,
    ServiceCardsComponent,
    ServiceListComponentComponent,
    FooterComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ContactComponent,
    RulesComponent,
    RepairHistoryComponent,
    ContactMessageComponent,
    MessagesComponent,
    MessageResponseComponent,
    DiagnosisSchedulerComponent,
    DiagnosisVisitCreatorComponent,
    AccountManagementComponent,
    OrderedRepairsComponent,
    RepairComponent,
    DiagnosisListComponent,
    MainComponent
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
    AppRoutingModule,
    CardModule,
    PickListModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    ScheduleModule,
    GrowlModule,
    HttpClientModule
  ],
  providers: [
    UserServiceService,
    TokenStorageService,
    AuthService,
    LeftMenuComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
