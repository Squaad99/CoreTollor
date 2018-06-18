import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TimePageComponent } from './time-page/time-page.component';
import {ModalModule} from 'angular-custom-modal';
import { ModalServiceComponent } from './modal-service/modal-service.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: 'HomePage', component: HomeComponent },
  { path: 'TimePage', component: TimePageComponent },
  { component: HomeComponent, path: '', pathMatch: 'full' },
  { component: HomeComponent, path: '**' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginPageComponent,
    TimePageComponent,
    ModalServiceComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
