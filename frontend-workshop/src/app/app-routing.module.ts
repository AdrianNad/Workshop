import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { ServiceListComponentComponent } from './service-list-component/service-list-component.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {ContactComponent} from './contact/contact.component';
import {RulesComponent} from './rules/rules.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
