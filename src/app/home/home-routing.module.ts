import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../login/login.component';
import {FormsModule} from '@angular/forms';
import {LoginserviceService} from '../loginservice.service';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  declarations:[LoginComponent],
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,
    HttpClientModule],
  exports: [RouterModule],
  providers : [LoginserviceService]
})
export class HomePageRoutingModule {}
