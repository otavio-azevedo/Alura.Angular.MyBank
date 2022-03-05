import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { ResumeComponent } from './resume/resume.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'resume', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'new-transfer', component: NewTransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

