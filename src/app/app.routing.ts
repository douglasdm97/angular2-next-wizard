import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: DefaultComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
