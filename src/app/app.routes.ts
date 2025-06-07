import { RouterModule, Routes } from '@angular/router';
import { EquityForm } from './components/equity-form/equity-form';
import { EquityList } from './components/equity-list/equity-list';
import { NgModule } from '@angular/core';
import { EquityCalc } from './components/equity-calc/equity-calc';

export const routes: Routes = [
  { path: 'equity', component: EquityList },
  { path: 'add-equity', component: EquityForm },
  { path: 'edit-equity/:id', component: EquityForm },
  { path: 'calc-equity', component: EquityCalc },
  { path: '', redirectTo: '/equity', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
