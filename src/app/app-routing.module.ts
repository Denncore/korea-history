import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KoreaPrehistoryComponent } from 'src/app/korea-prehistory/korea-prehistory.component';
import { KoreaDivisionComponent } from 'src/app/korea-division/korea-division.component';
import { KoreaConflictComponent } from 'src/app/korea-conflict/korea-conflict.component';
import { KoreaRecentComponent } from 'src/app/korea-recent/korea-recent.component';
import { KoreaLiveInNorthComponent } from 'src/app/korea-live-in-north/korea-live-in-north.component';

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
  {
    path: 'recent',
    component: KoreaRecentComponent,
  },
  {
    path: 'north-korea',
    component: KoreaLiveInNorthComponent,
  },
  {
    path: 'south-korea',
    component: KoreaRecentComponent,
  },
  { path: '**', redirectTo: '/prehistory'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
