import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ServiceListComponentComponent} from './service-list-component/service-list-component.component';
import {ServiceCardsComponent} from './service-cards/service-cards.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {ContactComponent} from './contact/contact.component';
import {RulesComponent} from './rules/rules.component';
import {RepairHistoryComponent} from './repair-history/repair-history.component';
import {MessagesComponent} from './messages/messages.component';
import {MessageResponseComponent} from './message-response/message-response.component';
import {DiagnosisSchedulerComponent} from './diagnosis-scheduler/diagnosis-scheduler.component';
import {DiagnosisVisitCreatorComponent} from './diagnosis-visit-creator/diagnosis-visit-creator.component';
import {AccountManagementComponent} from './account-management/account-management.component';
import {OrderedRepairsComponent} from './ordered-repairs/ordered-repairs.component';
import {DiagnosisListComponent} from './diagnosis-list/diagnosis-list.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: 'services/list',
    component: ServiceListComponentComponent
  },
  {
    path: 'services/cards',
    component: ServiceCardsComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'repairHistory',
    component: RepairHistoryComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'messages/response',
    component: MessageResponseComponent
  },
  {
    path: 'diagnosis/scheduler',
    component: DiagnosisSchedulerComponent
  },
  {
    path: 'diagnosis/creator',
    component: DiagnosisVisitCreatorComponent
  },
  {
    path: 'account',
    component: AccountManagementComponent
  },
  {
    path: 'orderedRepairs',
    component: OrderedRepairsComponent
  },
  {
    path: 'diagnosisList',
    component: DiagnosisListComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
