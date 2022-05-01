import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormalComponent } from './components/formal/formal.component';
import { CasualComponent } from './components/casual/casual.component';
import { TShirtsComponent } from './components/t-shirts/t-shirts.component';
import { CpantsComponent } from './components/cpants/cpants.component';
import { JeansComponent } from './components/jeans/jeans.component';
import { LandingComponent } from './components/landing/landing.component';

import { NavComponent } from './components/nav/nav.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    FormalComponent,
    CasualComponent,
    TShirtsComponent,
    CpantsComponent,
    JeansComponent,
    LandingComponent,
    NavComponent,routingComponents, RegistrationComponent, LoginComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatIconModule,
    MatToolbarModule,MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
