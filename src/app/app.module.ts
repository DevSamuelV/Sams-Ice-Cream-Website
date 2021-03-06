import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IcecreamComponent } from './components/icecream/icecream.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbActionComponent, NbActionsModule, NbContextMenuModule, NbMenuModule, NbButtonComponent, NbButtonModule, NbCardModule, NbUserModule, NbInputModule, NbToggleModule, NbToastrModule, NbTableModule, NbTabComponent, NbTabsetModule, NbDialogModule, NbIconModule, NbAutocompleteModule, NbAutocompleteComponent } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { NgAisInstantSearch, NgAisInstantSearchModule, NgAisModule } from 'angular-instantsearch';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IcecreamComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    AutocompleteComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, NgAisModule.forRoot(),
    MatInputModule, MatAutocompleteModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCI_GeAuLnFqSd3PEcQ1iMPLg9ueGO0VJo",
      authDomain: "sams-ice-cream-1d478.firebaseapp.com",
      databaseURL: "https://sams-ice-cream-1d478.firebaseio.com",
      projectId: "sams-ice-cream-1d478",
      storageBucket: "sams-ice-cream-1d478.appspot.com",
      messagingSenderId: "683898952965",
      appId: "1:683898952965:web:f322db4706ef6ad613eb6c"
    }),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbButtonModule,
    NbCardModule,
    NbUserModule,
    NbInputModule,
    NbToggleModule,
    NbToastrModule.forRoot(),
    AngularFirestoreModule,
    FormsModule,
    NbTabsetModule,
    NbDialogModule.forRoot(),
    NbIconModule,
    NbAutocompleteModule,
    NgAisInstantSearchModule,
    NgAisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
