import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { FormuploadpageComponent } from "../formuploadpage/formuploadpage.component";

import { RegisteruserService } from '../registeruser.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpModule, Http, Response } from '@angular/http';
//import {MdDialog} from '@angular/material';
import { AlertdialogComponent } from '../alertdialog/alertdialog.component';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  private myForm:FormGroup;
 //public bookName=[];
  errorMessage: String;
  //bookName: String;
  data:String;

  constructor(private router:Router, private fb:FormBuilder,private regService:RegisteruserService) {
    this.myForm = fb.group({

      Email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
      PassWord: ['', Validators.compose([Validators.required])],

    });
  }
userLogin(value:any){
  console.log(this.myForm.value);
  this.regService.loginUsers(this.myForm.value).subscribe( data => {
    console.log(data);
    if(data.success==true){

      this.router.navigate(['/categories',
      ]);
    }else{
alert("user already registered!");
    }
     // this.bookName = data;
    },
    error => this.errorMessage = <any>error);
  //console.log(this.errorMessage);
}



  ngOnInit(){
  }
}
