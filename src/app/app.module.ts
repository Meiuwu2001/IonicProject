import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat"
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ "projectId": "unidad-3-b6d32", "appId": "1:932185025588:web:1c1f7a29ad1852bc356e61", "databaseURL": "https://unidad-3-b6d32-default-rtdb.firebaseio.com", "storageBucket": "unidad-3-b6d32.appspot.com", "apiKey": "AIzaSyBbIfUZZtOOy_zx1yc1ZfYbYixYAVym1Ug", "authDomain": "unidad-3-b6d32.firebaseapp.com", "messagingSenderId": "932185025588", "measurementId": "G-G6H8KVCGKE" })), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule { }
