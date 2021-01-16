import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KoreaPrehistoryComponent } from 'src/app/korea-prehistory/korea-prehistory.component';

const routes: Routes = [
  {
    path: 'prehistory',
    component: KoreaPrehistoryComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
