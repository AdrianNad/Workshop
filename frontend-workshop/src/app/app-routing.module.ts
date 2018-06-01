import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { ServiceListComponentComponent } from './service-list-component/service-list-component.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';
import {RegisterFormComponent} from './register-form/register-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
