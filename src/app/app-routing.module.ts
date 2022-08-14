import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobListComponent } from './components/job-list/job-list.component';

const routes: Routes = [
  {path:'', redirectTo:"jobList", pathMatch: 'full'},
  {path:"jobList", component:JobListComponent},
  {path:"jobDetail/:id", component:JobDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [JobListComponent,JobDetailComponent];