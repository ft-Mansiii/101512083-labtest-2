import { Routes } from '@angular/router';
import { Characterlist } from './characterlist/characterlist';

export const routes: Routes = [
  { path: '', component: Characterlist },
  { path: '**', redirectTo: '' }
];