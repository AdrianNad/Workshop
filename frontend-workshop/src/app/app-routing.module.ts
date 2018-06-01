import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { ServiceListComponentComponent } from './service-list-component/service-list-component.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';

const routes: Routes = [
  {
    path: 'services/list',
    component: ServiceListComponentComponent
  },
  {
    path: 'services/cards',
    component: ServiceCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
