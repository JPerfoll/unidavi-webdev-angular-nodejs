import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { VeiculosModule } from './veiculos/veiculos.module';

const config = {
  apiKey: "AIzaSyDHIB6rdgDhIF6VIohyuywI_enOD0fmKT4",
  authDomain: "unidavi-webdev-angular-n-2e978.firebaseapp.com",
  databaseURL: "https://unidavi-webdev-angular-n-2e978.firebaseio.com",
  projectId: "unidavi-webdev-angular-n-2e978",
  storageBucket: "unidavi-webdev-angular-n-2e978.appspot.com",
  messagingSenderId: "592857628096"
};


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    VeiculosModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
