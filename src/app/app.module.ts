import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
/* import {
  CreateEditModule,
  LoginModule,
  LocationListModule
} from 'asmt-lib-al-nw'; */
import { environment } from 'src/environments/environment';
import { LoginModule } from './library/login/login.module';
import { CreateEditModule } from './library/create-edit-location/create-edit-location.module';
import { LocationListModule } from './library/location-list/location-list.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    LoginModule,
    CreateEditModule,
    LocationListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AuthGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
