import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {FormControl, Validators,FormBuilder, FormGroup} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import { RegisteruserService } from './registeruser.service';


import { HomepageComponent } from './homepage/homepage.component';
//import { CustomMaterial } from './custom-material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //public users = {};

  constructor() {

  }




}
