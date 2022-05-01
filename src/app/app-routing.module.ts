import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FormalComponent } from './components/formal/formal.component';
import { TShirtsComponent } from './components/t-shirts/t-shirts.component';
import { JeansComponent } from './components/jeans/jeans.component';
import { CpantsComponent } from './components/cpants/cpants.component';
import { CasualComponent } from './components/casual/casual.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavComponent } from './components/nav/nav.component';
const routes: Routes = [
  { path: 'home',component: LandingComponent }, 
  { path: 'formal',component: FormalComponent }, 
  { path: 'casual',component: CasualComponent },
  { path: 't-shirts',component: TShirtsComponent },
  { path: 'jeans',component: JeansComponent },
  { path: 'pants',component: CpantsComponent },
  { path: 'login',component: LoginComponent },
  { path: 'reg',component: RegistrationComponent},
  { path: 'nav',component: NavComponent }, 






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingComponent,FormalComponent,TShirtsComponent,JeansComponent,CpantsComponent,CasualComponent,LoginComponent,RegistrationComponent,NavComponent, ]
