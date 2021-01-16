import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KoreaPrehistoryComponent } from 'src/app/korea-prehistory/korea-prehistory.component';
import { KoreaDivisionComponent } from 'src/app/korea-division/korea-division.component';
import { KoreaConflictComponent } from 'src/app/korea-conflict/korea-conflict.component';

const routes: Routes = [
  {
    path: 'prehistory',
    component: KoreaPrehistoryComponent,
  },
  {
    path: 'division',
    component: KoreaDivisionComponent,
  },
  {
    path: 'conflict',
    component: KoreaConflictComponent,
  },
  { path: '**', redirectTo: '/prehistory'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
