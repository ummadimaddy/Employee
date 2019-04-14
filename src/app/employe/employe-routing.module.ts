import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostEmployeComponent } from './post-employe/post-employe.component';
import { GetEmployeComponent } from './get-employe/get-employe.component';
import {AccessGuard} from '../access.guard';
import { EmployeComponent } from './employe.component';
const routes: Routes = [
{ path: '',  component: EmployeComponent, children: [
  {path: 'postemploye', component: PostEmployeComponent, canActivate: [AccessGuard]},
  {path: 'getemploye', component: GetEmployeComponent, canActivate: [AccessGuard]}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }

