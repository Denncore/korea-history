import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KoreaPrehistoryComponent } from 'src/app/korea-prehistory/korea-prehistory.component';
import { KoreaDivisionComponent } from 'src/app/korea-division/korea-division.component';

const routes: Routes = [
  {
    path: 'prehistory',
    component: KoreaPrehistoryComponent,
  },
  {
    path: 'division',
    component: KoreaDivisionComponent,
  },
  { path: '**', redirectTo: '/prehistory'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
