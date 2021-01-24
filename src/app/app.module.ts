import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoreaPrehistoryComponent } from './korea-prehistory/korea-prehistory.component';
import { KoreaDivisionComponent } from './korea-division/korea-division.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { KoreaConflictComponent } from './korea-conflict/korea-conflict.component';
import { KoreaRecentComponent } from './korea-recent/korea-recent.component';
import { KoreaLiveInNorthComponent } from './korea-live-in-north/korea-live-in-north.component';
import { KoreaLiveInSouthComponent } from './korea-live-in-south/korea-live-in-south.component';
import { ScrollNotificationComponent } from './scroll-notification/scroll-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    KoreaPrehistoryComponent,
    KoreaDivisionComponent,
    PageNavigationComponent,
    KoreaConflictComponent,
    KoreaRecentComponent,
    KoreaLiveInNorthComponent,
    KoreaLiveInSouthComponent,
    ScrollNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
